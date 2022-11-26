export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pascal.gangloff',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/flowbite.client.ts', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-svg-loader',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        fullName: 'English',
      },
      {
        code: 'fr',
        fullName: 'Français',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          sculptor: 'Sculptor',
          menu: {
            about: 'About Me',
            contact: 'Contact',
          },
          about: {
            paragraphOne: '',
            paragraphTwo: '',
            paragraphThree: '',
            critics: 'Critics',
          },
          footer: {
            rights: 'All rights reserved.',
          },
        },
        fr: {
          sculptor: 'Sculpteur',
          menu: {
            about: 'À Propos',
            contact: 'Contact',
          },
          about: {
            paragraphOne:
              'Je suis né en 1963 à Mulhouse en Alsace, où je débute la sculpture en 2000 de façon autodidacte. Fils et petit fils de mineurs, j’ai grandi porté par les jardins du bassin minier.',
            paragraphTwo:
              'Quand je sculpte, je me retrouve dans l’univers printanier de ce jadis, du jardin du Paradis, qui cesse alors d’être perdu.',
            paragraphThree:
              'Le hasard m’a emmené à Porto Santo à Madère, j’y retrouve ces racines indispensables a mon bien être. J’ai plaisir à y vivre et à y pratiquer la sculpture animalière, en ces lieux, cela m’y est inspiré.',
            critics: 'Critiques Presse',
          },
          footer: {
            rights: 'Tous droits réservés.',
          },
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
