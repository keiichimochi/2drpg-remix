import pixiReact from '@pixi/react';
const { Container, useApp } = pixiReact;
import { useCallback, useMemo, useRef, useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import { DrawingTool, DrawingState, MapLayer, MapEditorUtils, AreaTag, CollisionLayer } from '~/utils/tileset';

interface MapEditorProps {
  width: number;
  height: number;
  tileSize?: number;
  showGrid?: boolean;
  layers?: MapLayer[];
  activeLayerId?: string;
  drawingState?: DrawingState;
  selectedAreaTag?: AreaTag;
  showCollisionOverlay?: boolean;
  onTileChange?: (layerId: string, x: number, y: number, tileId: number) => void;
  onLayerChange?: (layerId: string, newLayer: MapLayer) => void;
  onAreaChange?: (layerId: string, x: number, y: number, tag: AreaTag) => void;
}

export default function MapEditor({
  width,
  height,
  tileSize = 16,
  showGrid = true,
  layers = [],
  activeLayerId,
  drawingState,
  selectedAreaTag = 'none',
  showCollisionOverlay = false,
  onTileChange,
  onLayerChange,
  onAreaChange
}: MapEditorProps) {
  const app = useApp();
  const gridGraphicsRef = useRef<PIXI.Graphics>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastDrawPos, setLastDrawPos] = useState<{ x: number; y: number } | null>(null);

  // Calculate grid lines
  const gridLines = useMemo(() => {
    const lines = [];
    const mapWidth = width * tileSize;
    const mapHeight = height * tileSize;

    // Vertical lines
    for (let x = 0; x <= mapWidth; x += tileSize) {
      lines.push({ x1: x, y1: 0, x2: x, y2: mapHeight });
    }

    // Horizontal lines
    for (let y = 0; y <= mapHeight; y += tileSize) {
      lines.push({ x1: 0, y1: y, x2: mapWidth, y2: y });
    }

    return lines;
  }, [width, height, tileSize]);

  // Get tile coordinates from mouse position
  const getTileCoords = useCallback((event: PIXI.FederatedPointerEvent) => {
    const localPos = event.getLocalPosition(event.target as PIXI.Container);
    const tileX = Math.floor(localPos.x / tileSize);
    const tileY = Math.floor(localPos.y / tileSize);
    return { x: tileX, y: tileY };
  }, [tileSize]);

  // Check if coordinates are valid
  const isValidCoords = useCallback((x: number, y: number) => {
    return x >= 0 && x < width && y >= 0 && y < height;
  }, [width, height]);

  // Get active layer
  const activeLayer = useMemo(() => {
    return layers.find(layer => layer.id === activeLayerId);
  }, [layers, activeLayerId]);

  // Handle drawing operations
  const handleDrawing = useCallback((tileX: number, tileY: number, isStart = false) => {
    if (!activeLayer || !drawingState || !onLayerChange) return;

    let newLayer: MapLayer;

    // Handle area drawing for collision layer
    if (activeLayer.type === 'collision' && selectedAreaTag !== 'none' && onAreaChange) {
      switch (drawingState.tool) {
        case 'paint':
          onAreaChange(activeLayer.id, tileX, tileY, selectedAreaTag);
          return;
        case 'eraser':
          onAreaChange(activeLayer.id, tileX, tileY, 'none');
          return;
        case 'bucket':
          if (isStart) {
            const collisionLayer = activeLayer as CollisionLayer;
            const newLayer = MapEditorUtils.floodFillArea(
              collisionLayer,
              tileX,
              tileY,
              selectedAreaTag
            );
            onLayerChange(activeLayer.id, newLayer);
          }
          return;
        case 'rect':
          // Rectangle area tool is handled in mouse up event
          return;
      }
    }

    // Handle regular tile drawing
    switch (drawingState.tool) {
      case 'paint':
        newLayer = MapEditorUtils.paintTile(
          activeLayer,
          tileX,
          tileY,
          drawingState.selectedTileId,
          drawingState.brushSize
        );
        break;

      case 'eraser':
        newLayer = MapEditorUtils.eraseTile(
          activeLayer,
          tileX,
          tileY,
          drawingState.brushSize
        );
        break;

      case 'bucket':
        if (isStart) {
          newLayer = MapEditorUtils.floodFill(
            activeLayer,
            tileX,
            tileY,
            drawingState.selectedTileId
          );
        } else {
          return; // Bucket tool only works on click start
        }
        break;

      case 'rect':
        // Rectangle tool is handled in mouse up event
        return;

      default:
        return;
    }

    onLayerChange(activeLayer.id, newLayer);
  }, [activeLayer, drawingState, selectedAreaTag, onLayerChange, onAreaChange]);

  // Handle mouse down event
  const handlePointerDown = useCallback((event: PIXI.FederatedPointerEvent) => {
    const { x: tileX, y: tileY } = getTileCoords(event);

    if (!isValidCoords(tileX, tileY)) return;

    if (drawingState) {
      setIsDrawing(true);
      setLastDrawPos({ x: tileX, y: tileY });

      if (drawingState.tool === 'rect') {
        // Start rectangle selection
        // This will be handled in pointer up event
      } else {
        handleDrawing(tileX, tileY, true);
      }
    }
  }, [getTileCoords, isValidCoords, drawingState, handleDrawing]);

  // Handle mouse move event for continuous drawing
  const handlePointerMove = useCallback((event: PIXI.FederatedPointerEvent) => {
    if (!isDrawing || !drawingState || drawingState.tool === 'bucket') return;

    const { x: tileX, y: tileY } = getTileCoords(event);

    if (!isValidCoords(tileX, tileY)) return;

    // Avoid drawing on the same tile multiple times
    if (lastDrawPos && lastDrawPos.x === tileX && lastDrawPos.y === tileY) return;

    handleDrawing(tileX, tileY);
    setLastDrawPos({ x: tileX, y: tileY });
  }, [isDrawing, drawingState, getTileCoords, isValidCoords, lastDrawPos, handleDrawing]);

  // Handle mouse up event
  const handlePointerUp = useCallback((event: PIXI.FederatedPointerEvent) => {
    if (!isDrawing || !drawingState || !activeLayer || !onLayerChange) {
      setIsDrawing(false);
      setLastDrawPos(null);
      return;
    }

    const { x: endX, y: endY } = getTileCoords(event);

    if (!isValidCoords(endX, endY)) {
      setIsDrawing(false);
      setLastDrawPos(null);
      return;
    }

    if (drawingState.tool === 'rect' && lastDrawPos) {
      // Handle rectangle fill for collision layer
      if (activeLayer.type === 'collision' && selectedAreaTag !== 'none' && onAreaChange) {
        const collisionLayer = activeLayer as CollisionLayer;
        const newLayer = MapEditorUtils.fillAreaRect(
          collisionLayer,
          lastDrawPos.x,
          lastDrawPos.y,
          endX,
          endY,
          selectedAreaTag
        );
        onLayerChange(activeLayer.id, newLayer);
      } else {
        // Handle rectangle fill for regular tiles
        const newLayer = MapEditorUtils.fillRect(
          activeLayer,
          lastDrawPos.x,
          lastDrawPos.y,
          endX,
          endY,
          drawingState.selectedTileId
        );
        onLayerChange(activeLayer.id, newLayer);
      }
    }

    setIsDrawing(false);
    setLastDrawPos(null);
  }, [isDrawing, drawingState, activeLayer, onLayerChange, getTileCoords, isValidCoords, lastDrawPos]);

  // Render grid
  const renderGrid = useCallback((g: PIXI.Graphics) => {
    if (!showGrid) return;

    g.clear();
    g.lineStyle(1, 0x444444, 0.5);

    gridLines.forEach(line => {
      g.moveTo(line.x1, line.y1);
      g.lineTo(line.x2, line.y2);
    });
  }, [showGrid, gridLines]);

  // Render collision overlay
  const renderCollisionOverlay = useCallback((g: PIXI.Graphics) => {
    if (!showCollisionOverlay) return;

    g.clear();

    const collisionLayer = layers.find(layer => layer.type === 'collision') as CollisionLayer;
    if (!collisionLayer?.areas) return;

    g.lineStyle(1, 0x000000, 0.8);

    collisionLayer.areas.forEach((row, y) => {
      row.forEach((area, x) => {
        if (area.tag !== 'none') {
          const color = MapEditorUtils.getAreaColor(area.tag);
          g.beginFill(color, 0.3);
          g.drawRect(x * tileSize, y * tileSize, tileSize, tileSize);
          g.endFill();

          // Add border
          g.lineStyle(1, color, 0.8);
          g.drawRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
      });
    });
  }, [showCollisionOverlay, layers, tileSize]);

  return (
    <Container
      interactive
      cursor="crosshair"
      onpointerdown={handlePointerDown}
      onpointermove={handlePointerMove}
      onpointerup={handlePointerUp}
      onpointerupoutside={handlePointerUp}
    >
      {/* Terrain layer */}
      <Container name="terrain" />

      {/* Collision layer */}
      <Container name="collision" alpha={0.4} visible={false} />

      {/* Decoration layer */}
      <Container name="decoration" />

      {/* Collision overlay */}
      <graphics
        draw={renderCollisionOverlay}
      />

      {/* Grid overlay */}
      <graphics
        ref={gridGraphicsRef}
        draw={renderGrid}
      />

      {/* Event layer (invisible, for event placement) */}
      <Container name="events" />
    </Container>
  );
}

// Layer management component
interface LayerControlsProps {
  layers: {
    terrain: { visible: boolean; opacity: number };
    collision: { visible: boolean; opacity: number };
    decoration: { visible: boolean; opacity: number };
  };
  onLayerToggle: (layer: string, visible: boolean) => void;
  onLayerOpacityChange: (layer: string, opacity: number) => void;
}

export function LayerControls({
  layers,
  onLayerToggle,
  onLayerOpacityChange
}: LayerControlsProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-sm font-semibold mb-3 text-gray-300">レイヤー</h3>

      {Object.entries(layers).map(([layerName, layer]) => (
        <div key={layerName} className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={layer.visible}
                onChange={(e) => onLayerToggle(layerName, e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm capitalize">{layerName}</span>
            </label>
          </div>

          {layer.visible && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={layer.opacity}
              onChange={(e) => onLayerOpacityChange(layerName, parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          )}
        </div>
      ))}
    </div>
  );
}
