// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src',
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true }
    /* do the same for all routes used */
},
})
