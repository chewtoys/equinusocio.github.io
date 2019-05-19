const {
  getConfigForKeys
} = require('./lib/config.js')
const headConfig = require('./lib/headConfig.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_PAGE_TYPE_ID',
  'CTF_PROJECT_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
  'CTF_PERSON_ID'
])

const config = {
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'en'
    },
    title: headConfig.TITLE,
    meta: headConfig.COMMON_META,
    link: headConfig.COMMON_LINKS,
    script: headConfig.COMMON_SCRIPTS
  },

  /**
   * PWA Manifest file generation
   */
  manifest: {
    "short_name": "Mattia Astorino",
    "name": "Mattia Astorino",
    "icons": [{
      "src": "../apple-touch-icon.png",
      "type": "image/png",
      "sizes": "512x512"
    }],
    "start_url": "/?utm_source=homescreen",
    "background_color": "#FFFFFF",
    "theme_color": "#ffffff",
    "display": "standalone"
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'var(--callToActionColor, #2b7f55)'
  },
  /**
   ** Define the destination mode when building
   */
  mode: 'spa',
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
   ** Make client available everywhere via Nuxt plugins
   */
  plugins: [
    '~/plugins/contentful',
    {
      src: '~/plugins/scroll-reveal',
      mode: 'client'
    },
    {
      src: '~/plugins/lazy-load',
      mode: 'client'
    }
  ],

  /*
   ** Define environment variables being available
   ** in generate and browser context
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
    CTF_PAGE_TYPE_ID: ctfConfig.CTF_PAGE_TYPE_ID,
    CTF_PROJECT_TYPE_ID: ctfConfig.CTF_PROJECT_TYPE_ID
  },

  modules: [
    // Simple usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-134447939-1'
    }],
    '@nuxtjs/pwa'
  ],

  render: {
    http2: {
      push: true
    }
  }
};

module.exports = config;
