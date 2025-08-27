import * as fs from 'fs/promises';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

interface ProjectData {
  id: string;
  name: string;
  settings?: any;
  createdAt: string;
  updatedAt: string;
  maps: MapData[];
  tilesets: TilesetData[];
  sprites: SpriteData[];
  locales: LocaleData[];
  flags: FlagData[];
}

interface MapData {
  id: string;
  name: string;
  width: number;
  height: number;
  layers: any;
  events: any;
}

interface TilesetData {
  id: string;
  name: string;
  imageUrl: string;
  tileSize: number;
  columns: number;
  rows: number;
  stableIdMap: any;
  hash: string;
}

interface SpriteData {
  id: string;
  name: string;
  imageUrl: string;
  animations: any;
}

interface LocaleData {
  id: string;
  lang: string;
  entries: Record<string, string>;
}

interface FlagData {
  id: string;
  key: string;
  value: any;
}

class FileStorage {
  private dataDir: string;
  private cache: Map<string, ProjectData> = new Map();

  constructor(dataDir: string = './data') {
    this.dataDir = path.resolve(process.cwd(), dataDir);
  }

  async init(): Promise<void> {
    try {
      await fs.mkdir(this.dataDir, { recursive: true });
    } catch (error) {
      console.error('Failed to create data directory:', error);
    }
  }

  private getProjectFilePath(projectId: string): string {
    return path.join(this.dataDir, `${projectId}.json`);
  }

  async createProject(name: string, settings?: any): Promise<ProjectData> {
    const project: ProjectData = {
      id: uuidv4(),
      name,
      settings,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      maps: [],
      tilesets: [],
      sprites: [],
      locales: [],
      flags: []
    };

    await this.saveProject(project);
    this.cache.set(project.id, project);
    return project;
  }

  async getProject(projectId: string): Promise<ProjectData | null> {
    // Check cache first
    if (this.cache.has(projectId)) {
      return this.cache.get(projectId)!;
    }

    try {
      const filePath = this.getProjectFilePath(projectId);
      const data = await fs.readFile(filePath, 'utf-8');
      const project = JSON.parse(data);
      this.cache.set(projectId, project);
      return project;
    } catch (error) {
      console.error(`Failed to load project ${projectId}:`, error);
      return null;
    }
  }

  async getAllProjects(): Promise<ProjectData[]> {
    try {
      const files = await fs.readdir(this.dataDir);
      const projectFiles = files.filter(file => file.endsWith('.json'));

      const projects: ProjectData[] = [];
      for (const file of projectFiles) {
        const projectId = file.replace('.json', '');
        const project = await this.getProject(projectId);
        if (project) {
          projects.push(project);
        }
      }

      return projects;
    } catch (error) {
      console.error('Failed to load projects:', error);
      return [];
    }
  }

  async updateProject(projectId: string, updates: Partial<ProjectData>): Promise<ProjectData | null> {
    const project = await this.getProject(projectId);
    if (!project) return null;

    const updatedProject = {
      ...project,
      ...updates,
      updatedAt: new Date().toISOString()
    };

    await this.saveProject(updatedProject);
    this.cache.set(projectId, updatedProject);
    return updatedProject;
  }

  async deleteProject(projectId: string): Promise<boolean> {
    try {
      const filePath = this.getProjectFilePath(projectId);
      await fs.unlink(filePath);
      this.cache.delete(projectId);
      return true;
    } catch (error) {
      console.error(`Failed to delete project ${projectId}:`, error);
      return false;
    }
  }

  private async saveProject(project: ProjectData): Promise<void> {
    try {
      const filePath = this.getProjectFilePath(project.id);
      const data = JSON.stringify(project, null, 2);
      await fs.writeFile(filePath, data, 'utf-8');
    } catch (error) {
      console.error(`Failed to save project ${project.id}:`, error);
      throw error;
    }
  }

  // Map operations
  async createMap(projectId: string, name: string, width: number, height: number): Promise<MapData | null> {
    const project = await this.getProject(projectId);
    if (!project) return null;

    const map: MapData = {
      id: uuidv4(),
      name,
      width,
      height,
      layers: [],
      events: []
    };

    project.maps.push(map);
    await this.saveProject(project);
    this.cache.set(projectId, project);
    return map;
  }

  async getMap(projectId: string, mapId: string): Promise<MapData | null> {
    const project = await this.getProject(projectId);
    if (!project) return null;

    return project.maps.find(map => map.id === mapId) || null;
  }

  async updateMap(projectId: string, mapId: string, updates: Partial<MapData>): Promise<MapData | null> {
    const project = await this.getProject(projectId);
    if (!project) return null;

    const mapIndex = project.maps.findIndex(map => map.id === mapId);
    if (mapIndex === -1) return null;

    project.maps[mapIndex] = { ...project.maps[mapIndex], ...updates };
    await this.saveProject(project);
    this.cache.set(projectId, project);
    return project.maps[mapIndex];
  }

  // Tileset operations
  async createTileset(projectId: string, tilesetData: Omit<TilesetData, 'id'>): Promise<TilesetData | null> {
    const project = await this.getProject(projectId);
    if (!project) return null;

    const tileset: TilesetData = {
      id: uuidv4(),
      ...tilesetData
    };

    project.tilesets.push(tileset);
    await this.saveProject(project);
    this.cache.set(projectId, project);
    return tileset;
  }

  async getTilesets(projectId: string): Promise<TilesetData[]> {
    const project = await this.getProject(projectId);
    return project?.tilesets || [];
  }

  // Sprite operations
  async createSprite(projectId: string, spriteData: Omit<SpriteData, 'id'>): Promise<SpriteData | null> {
    const project = await this.getProject(projectId);
    if (!project) return null;

    const sprite: SpriteData = {
      id: uuidv4(),
      ...spriteData
    };

    project.sprites.push(sprite);
    await this.saveProject(project);
    this.cache.set(projectId, project);
    return sprite;
  }

  async getSprites(projectId: string): Promise<SpriteData[]> {
    const project = await this.getProject(projectId);
    return project?.sprites || [];
  }

  // Locale operations
  async createLocale(projectId: string, lang: string): Promise<LocaleData | null> {
    const project = await this.getProject(projectId);
    if (!project) return null;

    const locale: LocaleData = {
      id: uuidv4(),
      lang,
      entries: {}
    };

    project.locales.push(locale);
    await this.saveProject(project);
    this.cache.set(projectId, project);
    return locale;
  }

  async getLocales(projectId: string): Promise<LocaleData[]> {
    const project = await this.getProject(projectId);
    return project?.locales || [];
  }

  async updateLocale(projectId: string, localeId: string, entries: Record<string, string>): Promise<LocaleData | null> {
    const project = await this.getProject(projectId);
    if (!project) return null;

    const localeIndex = project.locales.findIndex(locale => locale.id === localeId);
    if (localeIndex === -1) return null;

    project.locales[localeIndex].entries = { ...project.locales[localeIndex].entries, ...entries };
    await this.saveProject(project);
    this.cache.set(projectId, project);
    return project.locales[localeIndex];
  }
}

// Global instance
const storage = new FileStorage('./data');

// Initialize storage
storage.init().catch(console.error);

export { storage, type ProjectData, type MapData, type TilesetData, type SpriteData, type LocaleData, type FlagData };
