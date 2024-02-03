// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/styles.scss'],
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
  ],
})
