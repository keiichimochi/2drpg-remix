// File-based storage implementation
import { storage, type ProjectData, type MapData, type TilesetData } from '~/utils/fileStorage';

// Export storage instance for use in loaders/actions
export { storage };

// Legacy compatibility - export prisma-like interface
export const prisma = {
  project: {
    async findUnique({ where }: { where: { id: string } }) {
      return await storage.getProject(where.id);
    },
    async findMany() {
      return await storage.getAllProjects();
    },
    async create({ data }: { data: { name: string; settings?: any } }) {
      return await storage.createProject(data.name, data.settings);
    },
    async update({ where, data }: { where: { id: string }; data: Partial<ProjectData> }) {
      return await storage.updateProject(where.id, data);
    },
    async delete({ where }: { where: { id: string } }) {
      await storage.deleteProject(where.id);
      return { id: where.id };
    }
  },
  map: {
    async findUnique({ where }: { where: { id: string } }) {
      // This needs projectId context, simplified for now
      const projects = await storage.getAllProjects();
      for (const project of projects) {
        const map = project.maps.find(m => m.id === where.id);
        if (map) return map;
      }
      return null;
    },
    async create({ data }: { data: { projectId: string; name: string; width: number; height: number; layers: string; events: string } }) {
      return await storage.createMap(data.projectId, data.name, data.width, data.height);
    }
  },
  tileset: {
    async findMany({ where }: { where: { projectId: string } }) {
      return await storage.getTilesets(where.projectId);
    },
    async create({ data }: { data: any }) {
      return await storage.createTileset(data.projectId, {
        name: data.name,
        imageUrl: data.imageUrl,
        tileSize: data.tileSize,
        columns: data.columns,
        rows: data.rows,
        stableIdMap: data.stableIdMap,
        hash: data.hash
      });
    }
  }
};
