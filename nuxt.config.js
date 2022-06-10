export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sara Redaelli - Make-up artist',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sono una make-up artist e beauty expert pronta ad aggiornarti sulle nuove tendenze' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/fonts.css',
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    'vue-social-sharing/nuxt',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-9965410249159637"'
    }],
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  googleAnalytics: {
    id: 'UA-230922669-1'
  },

  sitemap: {
    hostname: 'https://sararedaelli.me',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
    routes: [
      '/blog/il-meglio-e-il-peggio-dei-trucchi-al-festival-di-cannes',
      '/blog/ocean-day-protezioni-sostenibili-per-un-abbronzatura-da-sogno',
    ]
  },

  robots: {
    Sitemap: 'https://sararedaelli.me/sitemap.xml',
    UserAgent: 'Googlebot',
    Disallow: /admin/
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader']
      })
    },
    transpile: ['gsap']
  }
}
