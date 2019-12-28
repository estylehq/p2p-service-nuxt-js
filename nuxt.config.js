import pkg from './package';
import langConfig from './src/lang/config';

export default {
  mode: 'universal',
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      { hid: 'description', name: 'description', content: pkg.description },
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
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/css/bootstrap.css',
    '~/css/main.css',
    'vue-js-modal/dist/styles.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-js-modal',
    '~plugins/vue-css-donut-chart',
    '~plugins/after-each',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['nuxt-i18n', langConfig],
    'bootstrap-vue/nuxt',
    'cookie-universal-nuxt',
    'vue-daum-postcode/nuxt',
  ],
  /*
   ** Axios module configuration
   */
  // axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  //   proxy: true,
  // },
  // proxy: {
  //   '/api': '[P2P SERVICE API SERVER]',
  // },
  router: {
    base: '/app/',
    middleware: ['bank-list/index'],
    scrollBehavior: function onScrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
  },
  /*
   ** Build configuration
   */
  build: {
    watch: ['api'],
    filenames: {
      manifest: 'manifest/[name].js',
      vendor: 'vendor/[name].js',
      app: 'app/[name].js',
      chunk: 'chunk/[name].js',
      css: 'css/[name].css',
      img: 'img/[name].[ext]',
      md: 'md/[name].[ext]',
      html: 'html/[name].[ext]',
    },
    extractCSS: true,
    // transpile: [''],
    // plugins: [],
    // loaders: {
    //   stylus: {
    //     import: [''],
    //   },
    // },
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
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
