import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './',
  server: {
    host: 'localhost',
    port: 3000,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
