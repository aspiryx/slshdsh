// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/aos.scss'],
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
  tailwindcss: {
    config: {
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1880px',
          },
        },
      },
    },
  },
  googleFonts: {
    families: {
      'Montserrat': true,
      'Montserrat Subrayada': true,
      'Montserrat Alternates': true,
    },
  },
})
