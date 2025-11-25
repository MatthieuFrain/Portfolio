// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable Server-Side Rendering
  ssr: true,

  // Enable devtools
  devtools: { enabled: true },

  // Global CSS
  css: ['~/assets/css/main.css'],

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
  ],

  // Site configuration
  site: {
    url: 'https://www.matthieufrain.dev',
  },

  sitemap: {
    urls: ['/'],
  },

  // Nitro configuration
  nitro: {
    preset: 'vercel',
  },

  // Compatibility date
  compatibilityDate: '2024-11-25',

  // App Head Configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  }
})
