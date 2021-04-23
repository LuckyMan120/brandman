import { createSEOMeta } from './utils/seo.js'
let gtm = ''
const isProd = process.env.CONTEXT === 'production'
if (isProd) {
  gtm = '/js/gtm-body.js'
}
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    baseURL: process.env.URL || 'http://localhost:3000',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Brandman Health Plan',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...createSEOMeta({
        title: 'Brandman Health Plan',
        description: 'Real help, real experts, real fast.',
        image: '/android-chrome-512x512.png',
        url: process.env.HOST_NAME,
      }),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css',
      },
    ],
    script: [
      { src: '/js/jquery.min.js', defer: true },
      { src: '/js/main.js', defer: true },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org/',
          '@type': 'WebSite',
          name: 'Brandman Health Plan',
          url: process.env.HOST_NAME,
          potentialAction: {
            '@type': 'SearchAction',
            target: '{search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        },
      },
    ],
    noscript: [{ src: gtm, body: true }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/gtm.js', mode: 'client' },
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/eventbus.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // recaptcha
    '@nuxtjs/recaptcha',
  ],

  recaptcha: {
    siteKey: '6LdOhtYZAAAAAPU83iQ5OZZbnSJoy-oUAJTN8_7b',
    version: 3,
    hideBadge: true,
    language: 'v3',
    size: 'normal',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
