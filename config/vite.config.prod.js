import { mergeConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import baseConfig from './vite.config.js';
// https://vitejs.dev/config/
const TODAY = new Date().toLocaleDateString().replace(/\//g, '_');
export default mergeConfig(
  {
    mode: 'production',
    plugins: [
      visualizer({
        filename: `./packStats/${TODAY}.html`, //分析图生成的文件名
        open: true, //注意这里要设置为true，否则无效
        title: `${TODAY}打包分析图`, //html标签页标题
        gzipSize: true, // 收集 gzip 大小并将其显示
        brotliSize: true, // 收集 brotli 大小并将其显示
        // sourcemap: true,
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // chart: ['echarts', 'vue-echarts'],
            // vue: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n'],
            vue: ['vue', 'vue-router', 'pinia'],
          },
        },
      },
      chunkSizeWarningLimit: 2000,
    },
  },
  baseConfig,
);
