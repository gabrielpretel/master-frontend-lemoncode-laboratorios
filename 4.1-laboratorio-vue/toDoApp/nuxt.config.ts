import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  css: ['@/assets/css/fonts.css', '@/assets/css/globalStyles.css'],
  ssr: false,
  vite: {
    plugins: [svgLoader()],
  },
})
