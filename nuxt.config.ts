// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@vueuse/nuxt', "nuxt-icon-tw", "@nuxtjs/i18n", '@formkit/nuxt'],
  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    defaultDirection: 'rtl',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.json',
      },
    ],
    defaultLocale: 'ar',
    },
    formkit: {
      // Experimental support for auto loading (see note):
      autoImport: true,
      configFile: './formkit.config.ts',
    }
})