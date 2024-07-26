// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@vueuse/nuxt', ['@nuxt/image', {
    provider: 'static',
    dir: "assets/",
}], "@nuxt/image"]
    
})