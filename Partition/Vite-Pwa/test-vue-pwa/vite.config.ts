import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest:{
        icons:[
          {
            src: "assets/images/logo.png",
            sizes: "360x360",
            type:"image/png",
            
          },
          {
            src: "assets/images/arrow.png",
            type: "image/png",
            sizes: "512x512",
            
          },
        ],
        display: "standalone",
        scope: "/",
        description: "A simply readable Hacker News app.",
      },
      workbox: {
        globPatterns: [ "**/*.{js,css,html,pdf}"],
        swDest: './public/sw.js',
        runtimeCaching: [{
          urlPattern: ({ url }) => {
            return url.pathname.startsWith("/api");
          },
          handler: "CacheFirst" as const,
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      },
      includeAssets: [
        "**/*",
      ],
      devOptions:{
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host:true
  }
})
