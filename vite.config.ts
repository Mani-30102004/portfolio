import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import os from 'os';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  cacheDir: path.join(os.tmpdir(), 'vite-cache')  // ✅ move Vite cache outside OneDrive
});
