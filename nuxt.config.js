export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '~/assets/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/axios',
    '~/plugins/moment',
    '~/plugins/lodash',
    '~/plugins/config'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    host: 'ks-backend.cnsaas.com',
    port: '80',
    prefix: '/content/api',
    // baseURL: http://[HOST]:[PORT][PREFIX],
    // browserBaseURL
    // https
    // progress
    // proxy
    // retry
    credentials: true
    // debug
    // proxyHeaders
    // proxyHeadersIgnore
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
    /* postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 100,
          propList: ['*']
        }
      },
      preset: {
        autoprefixer: { grid: true }
      }
    } */
  },
  server: {
    port: 8080, // default: 3000
    host: '127.0.0.1' // default: localhost
  }
}
