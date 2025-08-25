import pixiReact from '@pixi/react';
const { Application } = pixiReact;
import { useCallback, useMemo } from 'react';
import * as PIXI from 'pixi.js';
// import pixiViewport from 'pixi-viewport';
// const { Viewport } = pixiViewport;

// Configure PIXI for 8-bit style rendering
if (PIXI.settings) {
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
  PIXI.settings.ROUND_PIXELS = true;
}

interface PixiStageProps {
  width: number;
  height: number;
  backgroundColor?: number;
  children?: React.ReactNode;
}

export default function PixiStage({
  width,
  height,
  backgroundColor = 0x000000,
  children
}: PixiStageProps) {
  const appOptions = useMemo(() => ({
    width,
    height,
    backgroundColor,
    antialias: false,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    powerPreference: 'high-performance' as const,
  }), [width, height, backgroundColor]);

  const onMount = useCallback((app: PIXI.Application) => {
    // Configure for 8-bit style
    app.renderer.textureGC.setMaxIdle(120);

    console.log('PixiJS Application mounted with 8-bit style settings');
  }, [width, height]);

  return (
    <Application
      options={appOptions}
      onMount={onMount}
    >
      {children}
    </Application>
  );
}

// Hook for accessing the PIXI application
export function usePixiApp() {
  // This will be implemented when we need to access the app instance
  return null;
}
