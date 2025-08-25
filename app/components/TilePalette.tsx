import { useState, useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import pixiReact from '@pixi/react';
const { Application, Sprite, useApp } = pixiReact;
import { TileData, processTilesetImage } from '~/utils/tileset';

interface TilePaletteProps {
  tilesetUrl?: string;
  tilesetName?: string;
  onTileSelect?: (tileId: number) => void;
  selectedTileId?: number;
  tileSize?: number;
}

interface PixiTilePaletteProps {
  tiles: TileData[];
  selectedTileId: number;
  tileSize: number;
  onTileClick: (tileId: number) => void;
}

function PixiTilePalette({
  tiles,
  selectedTileId,
  tileSize,
  onTileClick
}: PixiTilePaletteProps) {
  const tilesPerRow = 8; // Display 8 tiles per row
  const padding = 2;

  return (
    <>
      {tiles.map((tile) => {
        const row = Math.floor(tile.id / tilesPerRow);
        const col = tile.id % tilesPerRow;
        const x = col * (tileSize + padding);
        const y = row * (tileSize + padding);

        return (
          <Sprite
            key={tile.id}
            texture={tile.texture}
            x={x}
            y={y}
            width={tileSize}
            height={tileSize}
            interactive
            cursor="pointer"
            tint={selectedTileId === tile.id ? 0x00ff00 : 0xffffff}
            onpointerdown={() => onTileClick(tile.id)}
          />
        );
      })}
    </>
  );
}

export default function TilePalette({
  tilesetUrl,
  tilesetName,
  onTileSelect,
  selectedTileId = 0,
  tileSize = 16
}: TilePaletteProps) {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Process tileset when URL is provided
  useEffect(() => {
    if (tilesetUrl) {
      loadTileset(tilesetUrl);
    }
  }, [tilesetUrl]);

  const loadTileset = async (url: string) => {
    setLoading(true);
    setError(null);

    try {
      const tilesetInfo = await processTilesetImage(url, tilesetName || 'unknown', 'hash');
      setTiles(tilesetInfo.tiles);
    } catch (err) {
      console.error('Failed to process tileset:', err);
      setError('タイルセットの読み込みに失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Create object URL for the uploaded file
    const objectUrl = URL.createObjectURL(file);

    // Load the tileset
    await loadTileset(objectUrl);

    // Clean up object URL
    URL.revokeObjectURL(objectUrl);
  };

  const handleTileClick = (tileId: number) => {
    if (onTileSelect) {
      onTileSelect(tileId);
    }
  };

  // Calculate canvas size based on tiles
  const tilesPerRow = 8;
  const rows = Math.ceil(tiles.length / tilesPerRow);
  const canvasWidth = tilesPerRow * (tileSize + 2) - 2; // -2 for last padding
  const canvasHeight = rows * (tileSize + 2) - 2;

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-300">タイルパレット</h3>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-xs rounded transition-colors"
        >
          アップロード
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/gif"
        onChange={handleFileUpload}
        className="hidden"
      />

      {loading && (
        <div className="text-center py-8 text-gray-400">
          読み込み中...
        </div>
      )}

      {error && (
        <div className="text-center py-8 text-red-400 text-sm">
          {error}
        </div>
      )}

      {!loading && !error && tiles.length === 0 && (
        <div className="text-center py-8 text-gray-500 text-sm">
          PNGタイルシートをアップロードしてください
        </div>
      )}

      {!loading && !error && tiles.length > 0 && (
        <div className="border border-gray-600 rounded overflow-hidden">
          <Application
            width={canvasWidth}
            height={canvasHeight}
            options={{
              backgroundColor: 0x2d3748,
              antialias: false,
              resolution: window.devicePixelRatio || 1,
            }}
          >
            <PixiTilePalette
              tiles={tiles}
              selectedTileId={selectedTileId}
              tileSize={tileSize}
              onTileClick={handleTileClick}
            />
          </Application>
        </div>
      )}

      {tiles.length > 0 && (
        <div className="mt-2 text-xs text-gray-400">
          {tiles.length} 個のタイル ({Math.ceil(tiles.length / tilesPerRow)} 行)
        </div>
      )}
    </div>
  );
}
