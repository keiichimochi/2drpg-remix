import * as PIXI from 'pixi.js';

// Drawing tools types
export type DrawingTool = 'paint' | 'eraser' | 'rect' | 'bucket';

// Collision and area types
export type AreaTag = 'none' | 'collision' | 'encounter' | 'damage' | 'trigger' | 'portal';

export interface AreaData {
  tag: AreaTag;
  properties?: Record<string, any>;
}

export interface CollisionLayer extends MapLayer {
  type: 'collision';
  areas: AreaData[][];
}

export interface DrawingState {
  tool: DrawingTool;
  selectedTileId: number;
  isDrawing: boolean;
  startPos: { x: number; y: number } | null;
  currentPos: { x: number; y: number } | null;
  brushSize: number;
}

// Map layer data structure
export interface MapLayer {
  id: string;
  name: string;
  type: 'terrain' | 'collision' | 'decoration';
  visible: boolean;
  opacity: number;
  tiles: number[][]; // 2D array of tile IDs
}

export interface MapData {
  id: string;
  name: string;
  width: number;
  height: number;
  layers: MapLayer[];
}

export interface TileData {
  id: number;
  x: number;
  y: number;
  texture: PIXI.Texture;
}

export interface TilesetInfo {
  width: number;
  height: number;
  tileSize: number;
  columns: number;
  rows: number;
  tiles: TileData[];
  texture: PIXI.Texture;
}

/**
 * Load image from URL and create PIXI texture
 */
export async function loadImageAsTexture(url: string): Promise<PIXI.Texture> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const texture = PIXI.Texture.from(img);
      resolve(texture);
    };
    img.onerror = reject;
    img.src = url;
  });
}

/**
 * Slice a tileset image into individual 16x16 tiles
 */
export function sliceTileset(
  texture: PIXI.Texture,
  tileSize: number = 16,
  spacing: number = 0
): TileData[] {
  const tiles: TileData[] = [];
  const { width, height } = texture;

  const columns = Math.floor(width / (tileSize + spacing));
  const rows = Math.floor(height / (tileSize + spacing));

  let tileId = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const x = col * (tileSize + spacing);
      const y = row * (tileSize + spacing);

      // Create rectangle for this tile
      const rect = new PIXI.Rectangle(x, y, tileSize, tileSize);
      const tileTexture = new PIXI.Texture(texture.baseTexture, rect);

      tiles.push({
        id: tileId,
        x,
        y,
        texture: tileTexture,
      });

      tileId++;
    }
  }

  return tiles;
}

/**
 * Create stable ID map for tileset based on content hash
 */
export function createStableIdMap(
  tiles: TileData[],
  contentHash: string
): Record<string, number> {
  const stableMap: Record<string, number> = {};

  tiles.forEach((tile, index) => {
    // Create stable key based on tile position and content hash
    const stableKey = `${contentHash}_${tile.x}_${tile.y}`;
    stableMap[stableKey] = index;
  });

  return stableMap;
}

/**
 * Process uploaded image into tileset data
 */
export async function processTilesetImage(
  imageUrl: string,
  filename: string,
  contentHash: string
): Promise<TilesetInfo> {
  const texture = await loadImageAsTexture(imageUrl);
  const { width, height } = texture;

  // Use 16x16 tiles by default
  const tileSize = 16;
  const tiles = sliceTileset(texture, tileSize);

  const columns = Math.floor(width / tileSize);
  const rows = Math.floor(height / tileSize);

  return {
    width,
    height,
    tileSize,
    columns,
    rows,
    tiles,
    texture,
  };
}

/**
 * Create PIXI sprite from tile
 */
export function createTileSprite(tile: TileData): PIXI.Sprite {
  const sprite = new PIXI.Sprite(tile.texture);
  sprite.position.set(0, 0);
  return sprite;
}

/**
 * Get tile by stable ID
 */
export function getTileByStableId(
  tiles: TileData[],
  stableIdMap: Record<string, number>,
  stableKey: string
): TileData | null {
  const tileId = stableIdMap[stableKey];
  return tiles[tileId] || null;
}

// Drawing tool utilities
export class MapEditorUtils {
  static paintTile(
    layer: MapLayer,
    x: number,
    y: number,
    tileId: number,
    brushSize: number = 1
  ): MapLayer {
    const newLayer = { ...layer };
    newLayer.tiles = layer.tiles.map(row => [...row]);

    for (let dy = -Math.floor(brushSize / 2); dy <= Math.floor(brushSize / 2); dy++) {
      for (let dx = -Math.floor(brushSize / 2); dx <= Math.floor(brushSize / 2); dx++) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < newLayer.tiles[0].length && ny >= 0 && ny < newLayer.tiles.length) {
          newLayer.tiles[ny][nx] = tileId;
        }
      }
    }

    return newLayer;
  }

  static eraseTile(
    layer: MapLayer,
    x: number,
    y: number,
    brushSize: number = 1
  ): MapLayer {
    return this.paintTile(layer, x, y, 0, brushSize); // 0 = empty tile
  }

  static fillRect(
    layer: MapLayer,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    tileId: number
  ): MapLayer {
    const newLayer = { ...layer };
    newLayer.tiles = layer.tiles.map(row => [...row]);

    const minX = Math.min(startX, endX);
    const maxX = Math.max(startX, endX);
    const minY = Math.min(startY, endY);
    const maxY = Math.max(startY, endY);

    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        if (x >= 0 && x < newLayer.tiles[0].length && y >= 0 && y < newLayer.tiles.length) {
          newLayer.tiles[y][x] = tileId;
        }
      }
    }

    return newLayer;
  }

  static floodFill(
    layer: MapLayer,
    startX: number,
    startY: number,
    newTileId: number
  ): MapLayer {
    const newLayer = { ...layer };
    newLayer.tiles = layer.tiles.map(row => [...row]);

    const width = newLayer.tiles[0].length;
    const height = newLayer.tiles.length;
    const oldTileId = newLayer.tiles[startY][startX];

    if (oldTileId === newTileId) return newLayer;

    const stack: [number, number][] = [[startX, startY]];
    const visited = new Set<string>();

    while (stack.length > 0) {
      const [x, y] = stack.pop()!;
      const key = `${x},${y}`;

      if (visited.has(key)) continue;
      visited.add(key);

      if (x < 0 || x >= width || y < 0 || y >= height) continue;
      if (newLayer.tiles[y][x] !== oldTileId) continue;

      newLayer.tiles[y][x] = newTileId;

      // Add adjacent tiles
      stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }

    return newLayer;
  }

  static isValidTilePosition(layer: MapLayer, x: number, y: number): boolean {
    return x >= 0 && x < layer.tiles[0].length && y >= 0 && y < layer.tiles.length;
  }

  static createEmptyLayer(width: number, height: number, id: string, name: string, type: 'terrain' | 'collision' | 'decoration'): MapLayer {
    const layer = {
      id,
      name,
      type,
      visible: type !== 'collision', // collision layer is hidden by default
      opacity: type === 'collision' ? 0.4 : 1,
      tiles: Array(height).fill(null).map(() => Array(width).fill(0)),
    };

    // Add areas data for collision layer
    if (type === 'collision') {
      (layer as CollisionLayer).areas = Array(height).fill(null).map(() =>
        Array(width).fill(null).map(() => ({ tag: 'none' as AreaTag }))
      );
    }

    return layer;
  }

  // Collision and area utilities
  static setAreaTag(layer: CollisionLayer, x: number, y: number, tag: AreaTag, properties?: Record<string, any>): CollisionLayer {
    const newLayer = { ...layer };
    newLayer.areas = layer.areas.map((row, rowIndex) =>
      rowIndex === y
        ? row.map((area, colIndex) =>
            colIndex === x
              ? { tag, properties }
              : area
          )
        : row
    );
    return newLayer;
  }

  static fillAreaRect(layer: CollisionLayer, startX: number, startY: number, endX: number, endY: number, tag: AreaTag, properties?: Record<string, any>): CollisionLayer {
    const newLayer = { ...layer };
    newLayer.areas = layer.areas.map((row, rowIndex) =>
      rowIndex >= Math.min(startY, endY) && rowIndex <= Math.max(startY, endY)
        ? row.map((area, colIndex) =>
            colIndex >= Math.min(startX, endX) && colIndex <= Math.max(startX, endX)
              ? { tag, properties }
              : area
          )
        : row
    );
    return newLayer;
  }

  static floodFillArea(layer: CollisionLayer, startX: number, startY: number, newTag: AreaTag, properties?: Record<string, any>): CollisionLayer {
    const newLayer = { ...layer };
    newLayer.areas = layer.areas.map(row => [...row]);

    const width = newLayer.areas[0].length;
    const height = newLayer.areas.length;
    const oldTag = newLayer.areas[startY][startX].tag;

    if (oldTag === newTag) return newLayer;

    const stack: [number, number][] = [[startX, startY]];
    const visited = new Set<string>();

    while (stack.length > 0) {
      const [x, y] = stack.pop()!;
      const key = `${x},${y}`;

      if (visited.has(key)) continue;
      visited.add(key);

      if (x < 0 || x >= width || y < 0 || y >= height) continue;
      if (newLayer.areas[y][x].tag !== oldTag) continue;

      newLayer.areas[y][x] = { tag: newTag, properties };

      // Add adjacent tiles
      stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }

    return newLayer;
  }

  static getAreaColor(tag: AreaTag): number {
    switch (tag) {
      case 'collision': return 0xff0000; // Red
      case 'encounter': return 0xffa500; // Orange
      case 'damage': return 0x800080; // Purple
      case 'trigger': return 0x00ff00; // Green
      case 'portal': return 0x0080ff; // Blue
      default: return 0x000000; // Black (transparent)
    }
  }

  static getAreaDisplayName(tag: AreaTag): string {
    switch (tag) {
      case 'collision': return '衝突';
      case 'encounter': return 'エンカウント';
      case 'damage': return 'ダメージ';
      case 'trigger': return 'トリガー';
      case 'portal': return 'ポータル';
      default: return 'なし';
    }
  }
}
