import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',

  // nitro: {
  //   plugins: ["~/server/index.ts"],
  // },

  runtimeConfig: {
    mongoDbUri: process.env.MONGODB_URI,
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tribzy',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: "Tribzy." },
        { name: 'theme-color', content: "#000000" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" },
      ]
    },
    pageTransition: {
      name: 'fade',
      type: 'transition',
      mode: 'in-out',
    }
  },

  modules: ["@pinia/nuxt"],

  components: {
    global: true,
    dirs: [
      '~/components',
    ]
  },

  css: ['~/assets/scss/main.scss'],

  ssr: false,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData:
          // `@use "~/assets/scss/abstracts" as *;`,
        },
      },
    },
  },
})
