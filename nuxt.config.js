import langConfig from './lang/config';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'p2p-service-nuxt-js',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      { hid: 'description', name: 'description', content: 'description' },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css',
        type: 'text/css',
      },
      {
        rel: 'stylesheet',
        href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css',
        type: 'text/css',
      },
      {
        rel: 'stylesheet',
        href:
          '//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        type: 'text/css',
      },
    ],
  },
  loading: { color: '#f0f0f0' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.css',
    '~/assets/css/main.css',
    'vue-js-modal/dist/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-js-modal',
    '~plugins/vue-css-donut-chart',
    '~plugins/after-each',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/i18n',
    'vue-daum-postcode/nuxt',
    'cookie-universal-nuxt',
  ],
  i18n: {
    ...langConfig,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
  // },
  // proxy: {
  //   '/api': '[P2P SERVICE API SERVER]',
  // },
  router: {
    middleware: ['bank-list/index'],
    scrollBehavior: function onScrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
     /** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //   });
      // }
    },
  },
}
