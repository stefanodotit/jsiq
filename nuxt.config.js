import bodyParser from 'body-parser'
import pkg from './package'
import * as questions from './data/questions.json'

export default {
  mode: 'universal',
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  head: {
    title: 'JSIQ - JavaScript Interview Questions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap',
        rel: 'stylesheet'
      }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/15744fb900.js',
        crossorigin: 'anonymous'
      }
    ]
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'question',
        path: '/question/:id',
        component: resolve('pages/index.vue')
      })
    }
  },

  generate: {
    routes() {
      const routes = []
      for (const key of Object.keys(questions.default.questions)) {
        for (const question of questions.default.questions[key]) {
          routes.push(`/question/${question.id}`)
        }
      }
      return routes
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  buildModules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-175044613-1'
      }
    ]
  ],

  serverMiddleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    { path: '/api/add', handler: '~/api/add.js' },
    { path: '/api/load', handler: '~/api/load.js' },
    { path: '/api/edit', handler: '~/api/edit.js' }
  ]
}
