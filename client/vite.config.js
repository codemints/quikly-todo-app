import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
      '@comps': path.resolve(__dirname, './src/components'),
      '@scss': path.resolve(__dirname, './src/assets/scss'),
      '@store': path.resolve(__dirname, './src/store'),
      '@ico': path.resolve(__dirname, './src/assets/icons'),
      '@img': path.resolve(__dirname, './public'),
      '@font': path.resolve(__dirname, './src/assets/fonts'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../server/public'),
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
        secure: false,
        changeOrigin: true
      },
    },
  },
})
