import uni from '@dcloudio/vite-plugin-uni';
import { defineConfig } from 'vite';
import uniPlatformLoaderPlugin from 'vite-plugin-uni-platform-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), uniPlatformLoaderPlugin()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
