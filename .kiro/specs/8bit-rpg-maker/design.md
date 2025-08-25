# Design Document

## Overview

8ビット風2D RPGゲームツクールは、Webブラウザ上で動作するモダンなゲーム制作ツールです。Remix v3、React 18+、PixiJS v8.12、TypeScriptを採用し、直感的なマップエディタ、イベントシステム、AIによるアセット生成機能を提供します。

## Architecture

### Technology Stack

- **Frontend Framework**: Remix v3 (モダンWeb標準、直感的ルーティング)
- **UI Library**: React 18+/19互換 + TypeScript
- **2D Rendering**: PixiJS v8.12.0 + @pixi/react v8
- **Database**: Prisma + SQLite (開発) / PostgreSQL (本番)
- **Validation**: Zod
- **Testing**: Vitest (ユニット), Playwright (E2E)
- **AI Integration**: Google Gemini API (Imagen 3 / Gemini 2.x Image Gen)

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser (Client)                         │
├─────────────────────────────────────────────────────────────┤
│  React Components                                           │
│  ├── MapEditor (PixiJS Canvas)                             │
│  ├── TilePalette                                           │
│  ├── LayerManager                                          │
│  ├── EventNodeEditor                                       │
│  ├── AITileGenerator                                       │
│  └── PreviewPlayer                                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/WebSocket
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Remix Server                             │
├─────────────────────────────────────────────────────────────┤
│  Routes & Actions                                           │
│  ├── /editor/map/$mapId                                    │
│  ├── /api/upload                                           │
│  ├── /api/ai/tiles/generate                               │
│  └── /api/export/$projectId                               │
├─────────────────────────────────────────────────────────────┤
│  Services                                                   │
│  ├── ProjectService                                        │
│  ├── MapService                                            │
│  ├── AssetService                                          │
│  ├── AITileService                                         │
│  └── ExportService                                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                External Services                            │
├─────────────────────────────────────────────────────────────┤
│  ├── Prisma Database (SQLite/PostgreSQL)                  │
│  ├── File Storage (Local/S3-compatible)                   │
│  └── Google Gemini API (Imagen 3 / Gemini 2.x)           │
└─────────────────────────────────────────────────────────────┘
```

## Components and Interfaces

### Core Data Models

```typescript
// Project Management
interface Project {
  id: string;
  name: string;
  settings: ProjectSettings;
  createdAt: Date;
  updatedAt: Date;
}

interface ProjectSettings {
  defaultTileSize: number;
  defaultMapSize: { width: number; height: number };
  defaultLanguage: string;
}

// Map System
interface Map {
  id: string;
  projectId: string;
  name: string;
  width: number;
  height: number;
  layers: MapLayer[];
  events: MapEvent[];
}

interface MapLayer {
  id: string;
  name: string;
  type: 'terrain' | 'collision' | 'decoration';
  visible: boolean;
  opacity: number;
  tiles: number[][]; // 2D array of tile IDs
}

// Asset Management
interface Tileset {
  id: string;
  projectId: string;
  name: string;
  imageUrl: string;
  tileSize: number;
  columns: number;
  rows: number;
  stableIdMap: Record<string, number>;
  hash: string;
  metadata?: TilesetMetadata;
}

interface TilesetMetadata {
  model?: string; // AI generation model
  seed?: number;
  tags?: Record<number, string[]>; // tile index -> tags
  avgColors?: Record<number, string>; // tile index -> hex color
}

// Sprite System
interface Sprite {
  id: string;
  projectId: string;
  name: string;
  imageUrl: string;
  animations: SpriteAnimation[];
}

interface SpriteAnimation {
  name: string;
  frames: AnimationFrame[];
  fps: number;
  loop: boolean;
}

// Event System
interface EventGraph {
  nodes: EventNode[];
  edges: EventEdge[];
}

interface EventNode {
  id: string;
  type: 'Talk' | 'IfFlag' | 'SetFlag' | 'Warp' | 'GiveItem' | 'StartBattle';
  position: { x: number; y: number };
  props: Record<string, any>;
}
```

### PixiJS Rendering Architecture

```typescript
// Main rendering components
interface PixiMapRenderer {
  app: PIXI.Application;
  viewport: Viewport;
  layers: {
    terrain: PIXI.Container;
    collision: PIXI.Container;
    decoration: PIXI.Container;
    events: PIXI.Container;
  };
  tileSprites: Map<string, PIXI.Sprite>;
}

// Chunk-based rendering for performance
interface MapChunk {
  x: number;
  y: number;
  size: number; // 32x32 tiles per chunk
  container: PIXI.Container;
  dirty: boolean;
}
```

### AI Tile Generation System

```typescript
interface AITileGenerationRequest {
  category: 'terrain' | 'water' | 'cliff' | 'building' | 'interior' | 'prop';
  palette: 8 | 16 | 32;
  seed: number;
  variations: number;
  style?: string;
  model: 'imagen' | 'gemini';
}

interface AITileGenerationResult {
  jobId: string;
  variants: TileVariant[];
  metadata: GenerationMetadata;
}

interface TileVariant {
  previewUrl: string;
  tilesetUrl: string;
  autotileData?: AutotileData;
  seamScore: number; // 0-1, quality of tile connections
}
```

## Data Models

### Database Schema (Prisma)

```prisma
model Project {
  id        String   @id @default(cuid())
  name      String
  settings  Json?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  maps      Map[]
  tilesets  Tileset[]
  sprites   Sprite[]
  locales   Locale[]
  flags     Flag[]
}

model Map {
  id        String @id @default(cuid())
  projectId String
  project   Project @relation(fields: [projectId], references: [id])
  name      String
  width     Int
  height    Int
  layers    Json   // MapLayer[]
  events    Json   // MapEvent[]
}

model Tileset {
  id          String @id @default(cuid())
  projectId   String
  name        String
  imageUrl    String
  tileSize    Int    @default(16)
  columns     Int
  rows        Int
  stableIdMap Json   // Record<string, number>
  hash        String
  metadata    Json?  // TilesetMetadata
}

model AIGenerationJob {
  id          String   @id @default(cuid())
  projectId   String
  status      String   // 'pending' | 'generating' | 'processing' | 'completed' | 'failed'
  request     Json     // AITileGenerationRequest
  result      Json?    // AITileGenerationResult
  error       String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Error Handling

### Client-Side Error Handling

- **Network Errors**: Automatic retry with exponential backoff
- **Validation Errors**: Real-time form validation with Zod schemas
- **Rendering Errors**: Graceful fallback to canvas 2D if WebGL fails
- **AI Generation Errors**: User-friendly error messages with retry options

### Server-Side Error Handling

- **Database Errors**: Transaction rollback and error logging
- **File Upload Errors**: Validation and cleanup of partial uploads
- **AI API Errors**: Fallback between Imagen and Gemini models
- **Rate Limiting**: Queue management for AI generation requests

### Error Recovery Strategies

```typescript
// AI Generation Fallback Chain
const generateTiles = async (request: AITileGenerationRequest) => {
  const strategies = [
    () => generateWithImagen(request),
    () => generateWithGemini({ ...request, model: 'gemini' }),
    () => generateWithFallbackPrompt(request)
  ];
  
  for (const strategy of strategies) {
    try {
      return await strategy();
    } catch (error) {
      console.warn('Generation strategy failed:', error);
    }
  }
  
  throw new Error('All generation strategies failed');
};
```

## Testing Strategy

### Unit Testing (Vitest)

- **Data Models**: Validation, serialization, and business logic
- **Utility Functions**: Tile slicing, color quantization, autotile detection
- **AI Integration**: Mock API responses and error handling
- **Event System**: Node execution and graph traversal

### Integration Testing

- **Database Operations**: CRUD operations with test database
- **File Upload/Processing**: Image processing pipeline
- **AI Generation Pipeline**: End-to-end generation workflow

### End-to-End Testing (Playwright)

- **Core User Flows**:
  1. Project creation → Map editing → Preview → Export
  2. Tileset upload → Tile painting → Layer management
  3. AI tile generation → Integration into map
  4. Event creation → Node editing → Preview testing

### Performance Testing

- **Rendering Performance**: 60 FPS with 128×128 maps (3 layers)
- **Memory Usage**: No memory leaks during extended editing sessions
- **Load Times**: LCP < 2.5s for editor initialization
- **AI Generation**: Response time monitoring and timeout handling

## Performance Optimizations

### Rendering Optimizations

- **Chunk-based Rendering**: Only render visible 32×32 tile chunks
- **Sprite Batching**: Batch similar tiles into single draw calls
- **Texture Atlasing**: Combine tilesets into texture atlases
- **Culling**: Frustum culling for off-screen elements

### Memory Management

- **Texture Garbage Collection**: Automatic cleanup of unused textures
- **Object Pooling**: Reuse PIXI sprites and containers
- **Lazy Loading**: Load assets on-demand
- **Cache Management**: LRU cache for processed images

### AI Generation Optimizations

- **Request Queuing**: Limit concurrent AI API calls
- **Result Caching**: Cache generated tiles by prompt hash
- **Progressive Loading**: Stream results as they become available
- **Batch Processing**: Process multiple variations in single request

## Security Considerations

### API Security

- **Authentication**: Session-based authentication for project access
- **Rate Limiting**: Prevent abuse of AI generation endpoints
- **Input Validation**: Sanitize all user inputs with Zod schemas
- **File Upload Security**: Validate file types and scan for malicious content

### AI Integration Security

- **API Key Management**: Server-side storage of Gemini API keys
- **Content Filtering**: Respect Gemini safety filters and policies
- **Usage Monitoring**: Track API usage and costs
- **Prompt Injection Prevention**: Sanitize user prompts before AI calls

### Data Protection

- **Project Isolation**: Ensure users can only access their own projects
- **Asset Security**: Secure file storage with access controls
- **Export Security**: Validate export contents before download
- **Backup Strategy**: Regular backups of project data