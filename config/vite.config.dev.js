import { mergeConfig } from 'vite';
import baseConfig from './vite.config.js';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      fs: {
        strict: true,
      },
    },
    plugins: [
      //调试工具
      VueDevTools(),

    ],
  },
  baseConfig,
);
