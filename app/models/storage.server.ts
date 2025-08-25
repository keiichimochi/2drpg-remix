import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';

// Storage interface for different storage backends
export interface StorageService {
  upload(file: File | Buffer, filename: string, mimeType: string): Promise<UploadResult>;
  getUrl(filename: string): string;
  delete(filename: string): Promise<void>;
}

export interface UploadResult {
  filename: string;
  url: string;
  hash: string;
  size: number;
}

// Local storage implementation for development
export class LocalStorageService implements StorageService {
  private uploadDir: string;
  private baseUrl: string;

  constructor(uploadDir: string = 'public/uploads', baseUrl: string = '/uploads') {
    this.uploadDir = uploadDir;
    this.baseUrl = baseUrl;
  }

  async upload(file: File | Buffer, filename: string, mimeType: string): Promise<UploadResult> {
    // Ensure upload directory exists
    await fs.mkdir(this.uploadDir, { recursive: true });

    // Generate unique filename with hash
    const buffer = Buffer.isBuffer(file) ? file : Buffer.from(await file.arrayBuffer());
    const hash = createHash('sha256').update(buffer).digest('hex').substring(0, 16);
    const ext = path.extname(filename);
    const uniqueFilename = `${hash}_${Date.now()}${ext}`;
    const filepath = path.join(this.uploadDir, uniqueFilename);

    // Write file
    await fs.writeFile(filepath, buffer);

    return {
      filename: uniqueFilename,
      url: `${this.baseUrl}/${uniqueFilename}`,
      hash,
      size: buffer.length,
    };
  }

  getUrl(filename: string): string {
    return `${this.baseUrl}/${filename}`;
  }

  async delete(filename: string): Promise<void> {
    try {
      const filepath = path.join(this.uploadDir, filename);
      await fs.unlink(filepath);
    } catch (error) {
      // File might not exist, ignore error
      console.warn(`Failed to delete file ${filename}:`, error);
    }
  }
}

// Factory function to create storage service based on environment
export function createStorageService(): StorageService {
  const storageType = process.env.STORAGE_TYPE || 'local';

  switch (storageType) {
    case 'local':
      return new LocalStorageService(
        'public/uploads',
        process.env.STORAGE_BASE_URL || '/uploads'
      );

    default:
      throw new Error(`Unknown storage type: ${storageType}`);
  }
}

// File validation utilities
export function validateImageFile(file: File): { valid: boolean; error?: string } {
  // Check file size (max 10MB)
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    return { valid: false, error: 'File size must be less than 10MB' };
  }

  // Check file type
  const allowedTypes = ['image/png', 'image/jpeg', 'image/gif'];
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Only PNG, JPEG, and GIF files are allowed' };
  }

  return { valid: true };
}

// Calculate file hash
export async function calculateFileHash(file: File | Buffer): Promise<string> {
  const buffer = Buffer.isBuffer(file) ? file : Buffer.from(await file.arrayBuffer());
  return createHash('sha256').update(buffer).digest('hex');
}
