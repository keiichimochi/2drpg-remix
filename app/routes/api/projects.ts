import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "~/models/db.server";
import { z } from "zod";

// Validation schemas
const createProjectSchema = z.object({
  name: z.string().min(1).max(100),
});

// GET /api/projects - List all projects
export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return json({ projects });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return json({ error: "Failed to fetch projects" }, { status: 500 });
  }
};

// POST /api/projects - Create new project
export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;

    // Validate input
    const validation = createProjectSchema.safeParse({ name });
    if (!validation.success) {
      return json({ error: validation.error.errors[0].message }, { status: 400 });
    }

    // Create project
    const project = await prisma.project.create({
      data: {
        name,
        settings: JSON.stringify({
          defaultTileSize: 16,
          defaultMapSize: { width: 32, height: 32 },
          defaultLanguage: "ja",
        }),
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return json({ project, success: true });
  } catch (error) {
    console.error("Failed to create project:", error);
    return json({ error: "Failed to create project" }, { status: 500 });
  }
};
