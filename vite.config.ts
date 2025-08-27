import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';

installGlobals();

export default defineConfig({
  plugins: [remix()],
  optimizeDeps: {
    include: ['@prisma/client', 'prisma'],
  },
  ssr: {
    noExternal: ['@prisma/client', 'prisma'],
  },
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      '~': new URL('./app', import.meta.url).pathname,
    },
  },
});
