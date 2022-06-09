import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ITHS-VUE1/#/' : '/',
  plugins: [
    VitePWA({
      manifest: {
        background_color: 'grey',
        display: 'standalone',
        icons: [
          {
            purpose: 'any',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png',
          },
        ],
        name: 'Project Vue',
        short_name: 'PV',
        start_url: '.',
        theme_color: 'red',
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest'],
        runtimeCaching: [
          {
            handler: 'NetworkFirst',
            // Cache GET requests to ''
            urlPattern: 'https://zoo-animal-api.herokuapp.com/animals/rand/10',
          },
          // {
          //   handler: 'NetworkFirst',
          //   // Regular expression to cache GET requests to
          //   // '' (with or without a trailing
          //   // slash)
          //   urlPattern: new RegExp('')
          // }
        ],
      },
    }),
    vue(),
  ],
});
