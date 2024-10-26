// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-escss-estest", "@pinia/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `@use 'assets/scss/_awaken.scss' as *;`,
        },
      },
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  features: {
    inlineStyles: false,
  },
  app: {
    head: {
      title: "天堂衝裝模擬器",
      meta: [
        {
          name: "description",
          content: "天堂衝裝備模擬器、lineage gear enhancement simulator",
        },
      ],
      htmlAttrs: {
        lang: "zh-tw",
      },
    },
  },
});
