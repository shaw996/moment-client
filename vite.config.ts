import path from 'node:path';

import uni from '@dcloudio/vite-plugin-uni';
import { defineConfig } from 'vite';
import uniPlatformLoaderPlugin from 'vite-plugin-uni-platform-loader';

const platform = process.env['UNI_PLATFORM'] ?? 'h5';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), uniPlatformLoaderPlugin({ platform, rootDir: path.resolve(__dirname, 'src') })],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
  },
});
