import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { Buffer } from 'buffer';


export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills()
  ],
  resolve: {
    alias: {
      global: 'rollup-plugin-node-polyfills/polyfills/global.js',
      process: 'rollup-plugin-node-polyfills/polyfills/process-es6.js',
      buffer: 'buffer/'
    }
  },
  define: {
    global: 'window',
    'process.env': {},
    Buffer: Buffer // Define Buffer explícitamente
  }
});
