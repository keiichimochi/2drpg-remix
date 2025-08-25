import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "~/models/db.server";
import { createStorageService } from "~/models/storage.server";
import { processTilesetImage, createStableIdMap } from "~/utils/tileset";
import { z } from "zod";

// Validation schemas
const createTilesetSchema = z.object({
  name: z.string().min(1).max(100),
  projectId: z.string(),
});

// GET /api/tilesets?projectId=xxx - List tilesets for project
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const projectId = url.searchParams.get("projectId");

  if (!projectId) {
    return json({ error: "Project ID is required" }, { status: 400 });
  }

  try {
    const tilesets = await prisma.tileset.findMany({
      where: { projectId },
      orderBy: { createdAt: 'desc' },
    });

    return json({ tilesets });
  } catch (error) {
    console.error("Failed to fetch tilesets:", error);
    return json({ error: "Failed to fetch tilesets" }, { status: 500 });
  }
};

// POST /api/tilesets - Create new tileset from uploaded image
export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const projectId = formData.get("projectId") as string;
    const file = formData.get("file") as File;

    // Validate input
    const validation = createTilesetSchema.safeParse({ name, projectId });
    if (!validation.success) {
      return json({ error: validation.error.errors[0].message }, { status: 400 });
    }

    if (!file) {
      return json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return json({ error: "Only image files are allowed" }, { status: 400 });
    }

    // Upload file
    const storage = createStorageService();
    const uploadResult = await storage.upload(file, file.name, file.type);

    // Process tileset
    const tilesetInfo = await processTilesetImage(
      uploadResult.url,
      name,
      uploadResult.hash
    );

    // Create stable ID map
    const stableIdMap = createStableIdMap(tilesetInfo.tiles, uploadResult.hash);

    // Create tileset record
    const tileset = await prisma.tileset.create({
      data: {
        projectId,
        name,
        imageUrl: uploadResult.url,
        tileSize: tilesetInfo.tileSize,
        columns: tilesetInfo.columns,
        rows: tilesetInfo.rows,
        stableIdMap: JSON.stringify(stableIdMap),
        hash: uploadResult.hash,
        metadata: JSON.stringify({
          originalFilename: file.name,
          fileSize: uploadResult.size,
          dimensions: {
            width: tilesetInfo.width,
            height: tilesetInfo.height,
          },
          tileCount: tilesetInfo.tiles.length,
        }),
      },
    });

    return json({
      tileset,
      tileCount: tilesetInfo.tiles.length,
      success: true
    });
  } catch (error) {
    console.error("Failed to create tileset:", error);
    return json({ error: "Failed to create tileset" }, { status: 500 });
  }
};
