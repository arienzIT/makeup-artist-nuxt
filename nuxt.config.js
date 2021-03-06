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
      { hid: 'description', name: 'description', content: 'Sono una make-up artist e beauty expert della provincia di Monza e Brianza, pronta ad aggiornarti sulle nuove tendenze di bellezza e a consigliarti i prodotti più adatti a te' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9965410249159637',
        crossOrigin: 'anonymous',
        async: true
      }
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
    '@nuxtjs/tailwindcss',
    'nuxt-compress'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    'vue-social-sharing/nuxt',
    '@nuxtjs/dotenv',
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
      '/blog/come-ottenere-un-natural-make-up-splendente-grazie-alla-beauty-routine-coreana-glass-skin',
      '/blog/effetto-glass-skin-gli-step-make-up-per-realizzarlo'
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
  },

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 2
    }
  }
}
