// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/icon', '@vueuse/nuxt'],
ssr: true,
css: [
  '@/assets/bulma.scss',
],
})