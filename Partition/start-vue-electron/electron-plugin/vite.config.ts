import { fileURLToPath, URL } from 'node:url'

import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), electron([
  {
    // Main-Process entry file of the Electron App.
    entry: 'electron/main.ts',
  },
  {
    entry: 'electron/preload.ts',
    onstart(options) {
      // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
      // instead of restarting the entire Electron App.
      options.reload()
    },
  }
])],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
