import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import cesium from 'vite-plugin-cesium'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/GIS_Cesium_OpenLayers/",
  plugins: [vue(), cesium()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
})
