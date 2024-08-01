
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@vueuse/nuxt'],
ssr: true,
experimental: {
  payloadExtraction: false,
  inlineSSRStyles: false,
  extractCSS: true,
},
css: [
  '~/assets/bulma.css',
],
})