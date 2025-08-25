import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";
import PixiStage from "~/components/PixiStage";
import MapEditor, { LayerControls } from "~/components/MapEditor";
import TilePalette from "~/components/TilePalette";
import { DrawingState, MapLayer, AreaTag, CollisionLayer, MapEditorUtils } from "~/utils/tileset";
import { prisma } from "~/models/db.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const projectId = params.projectId;

  if (!projectId) {
    throw new Response("Project ID is required", { status: 400 });
  }

  // Fetch project data
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      maps: {
        take: 1, // For now, get first map
      },
      tilesets: true,
    },
  });

  if (!project) {
    throw new Response("Project not found", { status: 404 });
  }

  // Create a default map if none exists
  let map = project.maps[0];
  if (!map) {
    map = await prisma.map.create({
      data: {
        projectId,
        name: "Default Map",
        width: 32,
        height: 32,
        layers: JSON.stringify([
          {
            id: "terrain",
            name: "Terrain",
            type: "terrain",
            visible: true,
            opacity: 1,
            tiles: Array(32 * 32).fill(0), // Empty tile array
          },
          {
            id: "collision",
            name: "Collision",
            type: "collision",
            visible: false,
            opacity: 0.4,
            tiles: Array(32 * 32).fill(0),
          },
          {
            id: "decoration",
            name: "Decoration",
            type: "decoration",
            visible: true,
            opacity: 1,
            tiles: Array(32 * 32).fill(0),
          },
        ]),
        events: JSON.stringify([]),
      },
    });
  }

  return json({
    project,
    map: {
      ...map,
      layers: JSON.parse(map.layers),
      events: JSON.parse(map.events),
    },
    tilesets: project.tilesets,
  });
};

export default function ProjectEditor() {
  const { project, map, tilesets } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedTool, setSelectedTool] = useState<'paint' | 'erase' | 'rect' | 'bucket'>('paint');
  const [selectedTileId, setSelectedTileId] = useState(0);
  const [selectedTileset, setSelectedTileset] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [showGrid, setShowGrid] = useState(true);
  const [brushSize, setBrushSize] = useState(1);
  const [activeLayerId, setActiveLayerId] = useState<string>('terrain');
  const [mapLayers, setMapLayers] = useState<MapLayer[]>([]);
  const [selectedAreaTag, setSelectedAreaTag] = useState<AreaTag>('none');
  const [showCollisionOverlay, setShowCollisionOverlay] = useState(false);

  // Drawing state
  const drawingState: DrawingState = {
    tool: selectedTool,
    selectedTileId,
    isDrawing: false,
    startPos: null,
    currentPos: null,
    brushSize,
  };

  // Initialize map layers from loaded data
  useEffect(() => {
    if (map.layers && mapLayers.length === 0) {
      setMapLayers(map.layers);
    }
  }, [map.layers, mapLayers.length]);

  const handleLayerChange = (layerId: string, newLayer: MapLayer) => {
    setMapLayers(prevLayers =>
      prevLayers.map(layer =>
        layer.id === layerId ? newLayer : layer
      )
    );
  };

  const handleLayerToggle = (layerName: string, visible: boolean) => {
    setMapLayers(prevLayers =>
      prevLayers.map(layer =>
        layer.name.toLowerCase() === layerName
          ? { ...layer, visible }
          : layer
      )
    );
  };

  const handleLayerOpacityChange = (layerName: string, opacity: number) => {
    setMapLayers(prevLayers =>
      prevLayers.map(layer =>
        layer.name.toLowerCase() === layerName
          ? { ...layer, opacity }
          : layer
      )
    );
  };

  const handleAreaChange = (layerId: string, x: number, y: number, tag: AreaTag) => {
    setMapLayers(prevLayers =>
      prevLayers.map(layer => {
        if (layer.id === layerId && layer.type === 'collision') {
          const collisionLayer = layer as CollisionLayer;
          const newLayer = { ...collisionLayer };
          newLayer.areas = collisionLayer.areas.map((row, rowIndex) =>
            rowIndex === y
              ? row.map((area, colIndex) =>
                  colIndex === x
                    ? { tag, properties: area.properties }
                    : area
                )
              : row
          );
          return newLayer;
        }
        return layer;
      })
    );
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("name", file.name);
    formData.append("projectId", project.id);
    formData.append("file", file);

    fetcher.submit(formData, {
      method: "POST",
      action: "/api/tilesets",
      encType: "multipart/form-data",
    });

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleTilesetSelect = (tilesetId: string) => {
    setSelectedTileset(tilesetId);
  };

  // Get selected tileset data
  const currentTileset = tilesets.find(t => t.id === selectedTileset);

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Toolbar */}
      <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedTool('paint')}
            className={`px-3 py-1 rounded ${
              selectedTool === 'paint'
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            ペイント
          </button>
          <button
            onClick={() => setSelectedTool('erase')}
            className={`px-3 py-1 rounded ${
              selectedTool === 'erase'
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            消しゴム
          </button>
          <button
            onClick={() => setSelectedTool('rect')}
            className={`px-3 py-1 rounded ${
              selectedTool === 'rect'
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            矩形
          </button>
          <button
            onClick={() => setSelectedTool('bucket')}
            className={`px-3 py-1 rounded ${
              selectedTool === 'bucket'
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            バケツ
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm">ズーム:</span>
          <input
            type="range"
            min="0.5"
            max="8"
            step="0.5"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            className="w-20"
          />
          <span className="text-sm w-12">{zoom}x</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm">ブラシ:</span>
          <input
            type="range"
            min="1"
            max="5"
            value={brushSize}
            onChange={(e) => setBrushSize(parseInt(e.target.value))}
            className="w-16 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm w-6">{brushSize}</span>
        </div>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showGrid}
            onChange={(e) => setShowGrid(e.target.checked)}
          />
          <span className="text-sm">グリッド</span>
        </label>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex">
        {/* Left Sidebar - Tools and Layers */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 space-y-4">
          {/* Tile Palette */}
          <TilePalette
            tilesetUrl={currentTileset?.imageUrl}
            tilesetName={currentTileset?.name}
            onTileSelect={setSelectedTileId}
            selectedTileId={selectedTileId}
          />

          {/* Layer Controls */}
          <LayerControls
            layers={layers}
            onLayerToggle={handleLayerToggle}
            onLayerOpacityChange={handleLayerOpacityChange}
          />

          {/* Tilesets */}
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-300">タイルセット</h3>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-2 py-1 bg-green-600 hover:bg-green-700 text-xs rounded transition-colors"
              >
                +
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/gif"
              onChange={handleFileUpload}
              className="hidden"
            />

            {tilesets.length === 0 ? (
              <div className="text-center text-gray-500 text-sm py-4">
                タイルセットがありません
              </div>
            ) : (
              <div className="space-y-1">
                {tilesets.map(tileset => (
                  <button
                    key={tileset.id}
                    onClick={() => handleTilesetSelect(tileset.id)}
                    className={`w-full text-left px-2 py-1 rounded text-xs transition-colors ${
                      selectedTileset === tileset.id
                        ? 'bg-green-600 text-white'
                        : 'text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {tileset.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 bg-gray-900 p-4">
          <div className="w-full h-full border border-gray-700 rounded-lg overflow-hidden">
            <PixiStage width={800} height={600}>
              <MapEditor
                width={map.width}
                height={map.height}
                showGrid={showGrid}
                layers={mapLayers}
                activeLayerId={activeLayerId}
                drawingState={drawingState}
                selectedAreaTag={selectedAreaTag}
                showCollisionOverlay={showCollisionOverlay}
                onLayerChange={handleLayerChange}
                onAreaChange={handleAreaChange}
              />
            </PixiStage>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-64 bg-gray-800 border-l border-gray-700 p-4 space-y-4">
          {/* Map Info */}
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-sm font-semibold mb-3 text-gray-300">マップ情報</h3>
            <div className="space-y-2 text-sm">
              <div>名前: {map.name}</div>
              <div>サイズ: {map.width} × {map.height}</div>
              <div>プロジェクト: {project.name}</div>
            </div>
          </div>

          {/* Area Tags */}
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-sm font-semibold mb-3 text-gray-300">領域タグ</h3>
            <div className="space-y-2">
              {(['none', 'collision', 'encounter', 'damage', 'trigger', 'portal'] as AreaTag[]).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedAreaTag(tag)}
                  className={`w-full text-left px-3 py-2 rounded text-xs transition-colors ${
                    selectedAreaTag === tag
                      ? 'bg-green-600 text-white'
                      : 'text-gray-300 hover:bg-gray-600'
                  }`}
                  style={{
                    backgroundColor: tag !== 'none' && selectedAreaTag !== tag
                      ? `${MapEditorUtils.getAreaColor(tag).toString(16).padStart(6, '0')}20`
                      : undefined
                  }}
                >
                  {MapEditorUtils.getAreaDisplayName(tag)}
                </button>
              ))}
            </div>
          </div>

          {/* Collision Overlay Toggle */}
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-sm font-semibold mb-3 text-gray-300">表示設定</h3>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showCollisionOverlay}
                onChange={(e) => setShowCollisionOverlay(e.target.checked)}
              />
              <span className="text-sm">衝突領域表示</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
