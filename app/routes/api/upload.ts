import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { createStorageService, validateImageFile } from "~/models/storage.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file
    const validation = validateImageFile(file);
    if (!validation.valid) {
      return json({ error: validation.error }, { status: 400 });
    }

    // Upload file
    const storage = createStorageService();
    const result = await storage.upload(file, file.name, file.type);

    // Get image dimensions for tileset processing
    const buffer = Buffer.from(await file.arrayBuffer());
    const dimensions = await getImageDimensions(buffer);

    return json({
      success: true,
      filename: result.filename,
      url: result.url,
      hash: result.hash,
      size: result.size,
      width: dimensions.width,
      height: dimensions.height,
    });

  } catch (error) {
    console.error("Upload error:", error);
    return json({ error: "Upload failed" }, { status: 500 });
  }
};

// Helper function to get image dimensions
async function getImageDimensions(buffer: Buffer): Promise<{ width: number; height: number }> {
  // Simple implementation - in production, use a proper image library
  return new Promise((resolve, reject) => {
    // For now, return placeholder dimensions
    // TODO: Implement proper image dimension detection
    resolve({ width: 256, height: 256 });
  });
}

export const loader = () => {
  return json({ error: "Method not allowed" }, { status: 405 });
};
