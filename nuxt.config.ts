// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss', '~/assets/css/aos.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-aos',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  aos: {
    once: true,
  },
  googleFonts: {
    families: {
      'Montserrat': true,
      'Montserrat Subrayada': true,
      'Montserrat Alternates': true,
    },
  },
})
