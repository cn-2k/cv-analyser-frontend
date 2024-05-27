// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    OPEN_PIX: process.env.OPEN_PIX,
  },
  devtools: { enabled: true },

  runtimeConfig: {
    OPEN_PIX: process.env.OPEN_PIX,
    turso: {
      databaseUrl: "",
      authToken: "",
    },
  },

  app: {
    head: {
      title: "olhameucv.ai",
      link: [
        {
          rel: "icon",
          href: "/favicon.png",
        },
      ],
      script: [
        {
          src: "https://plugin.openpix.com.br/v1/openpix.js",
          defer: true,
          async: true,
        },
      ],
    },
  },

  css: ["@/assets/css/base.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
    "nuxt-lucide-icons",
  ],

  eslint: {
    config: {
      stylistic: {
        quotes: "double",
      },
    },
  },

  googleFonts: {
    base64: true,
    fontsDir: "assets/fonts",
    overwriting: true,
    families: {
      Inter: [300, 400, 500, 600, 800],
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
