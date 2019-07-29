/* eslint-disable nuxt/no-cjs-in-config */
/**
 * Import package.json to get
 * basic package informations
 * */
const headConfig = require('./lib/headConfig.js')
const cmsConfig = require('./contentful.config.json')

/**
 * Configure contentful info as env variable
 * to access them inside vue components
 */
const env = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  CTF_SPACE_ID: cmsConfig.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: cmsConfig.CTF_CDA_ACCESS_TOKEN,
  CTF_PERSON_ID: cmsConfig.CTF_PERSON_ID,
  CTF_BLOG_POST_TYPE_ID: cmsConfig.CTF_BLOG_POST_TYPE_ID,
  CTF_PAGE_TYPE_ID: cmsConfig.CTF_PAGE_TYPE_ID,
  CTF_PROJECT_TYPE_ID: cmsConfig.CTF_PROJECT_TYPE_ID
}

export default {
  // Define the project ENV variables
  env,

  // Set the build mode
  mode: 'universal',

  /**
   * PWA Manifest file generation
   */
  manifest: {
    short_name: 'Mattia Astorino',
    name: 'Mattia Astorino',
    icons: [
      {
        src: '../apple-touch-icon.png',
        type: 'image/png',
        sizes: '512x512'
      }
    ],
    start_url: '/?utm_source=homescreen',
    background_color: '#FFFFFF',
    theme_color: '#ffffff',
    display: 'standalone'
  },

  /*
   ** Default header tags for pages
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

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'var(--callToActionColor, #2b7f55)'
  },

  /*
   ** Global CSS
   */
  css: ['modern-normalize/modern-normalize.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~plugins/ga.js', mode: 'client' },
    {
      src: '~/plugins/contentful'
    },
    {
      src: '~/plugins/lazy-load',
      mode: 'client'
    }
  ],

  serverMiddleware: ['~/lib/headers.js'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa' /* '@nuxtjs/feed' */],

  // feed: [
  //   {
  //     path: '/feed.xml', // The route to your feed.
  //     async create(feed) {
  //       feed.options = {
  //         title: 'Equinusocio Blog',
  //         link: 'https://equinusocio.dev/feed.xml',
  //         description: 'Development tips and projects'
  //       }

  //       await fetch(
  //         `https://cdn.contentful.com/spaces/${cmsConfig.CTF_SPACE_ID}/environments/master/entries?access_token=${cmsConfig.CTF_CDA_ACCESS_TOKEN}`
  //       )
  //         .then(resp => resp.json())
  //         .then(data => {
  //           const posts = data.items

  //           posts.items.forEach(post => {
  //             feed.addItem({
  //               title: post.fields.title,
  //               id: process.env.baseUrl + post.fields.slug,
  //               link: process.env.baseUrl + post.fields.slug,
  //               externalLink: post.fields.externalUrl,
  //               description: post.fields.description,
  //               content: post.fields.body
  //             })
  //           })
  //         })
  //         .catch(error => {
  //           console.log(error)
  //         })

  //       feed.addCategory('Nuxt.js')

  //       feed.addContributor({
  //         name: 'Mattia Astorino',
  //         email: 'astorino.design@gmail.com',
  //         link: 'https://equinusocio.dev/'
  //       })
  //     },
  //     cacheTime: 1000 * 60 * 15,
  //     type: 'rss2'
  //   }
  // ],

  /* Force scroll-top when route change */
  router: {
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },

  /**
   * Set HTTP2 headers
   */
  render: {
    http2: {
      push: true
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /**
     * Extract CSS chunks instead to embed them inside
     * the document. Set false to avoid HTTP requests.
     */
    extractCSS: true,
    /**
     * Configure PostCSS plugins
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        /* More info at https://github.com/postcss/postcss-easings */
        'postcss-easings': {},
        /* More info at https://github.com/TrySound/postcss-easy-import */
        'postcss-easy-import': {
          extensions: '.pcss'
        },
        /* More info at https://github.com/seaneking/postcss-responsive-type */
        'postcss-responsive-type': {},
        /* More info at https://cssnano.co/ */
        cssnano: {
          preset: [
            'advanced',
            {
              autoprefixer: false
            },
            {
              discardComments: {
                removeAll: true
              }
            }
          ]
        },
        /* More info at https://github.com/postcss/postcss-reporter */
        'postcss-reporter': {
          clearReportedMessages: true
        }
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0
      }
    },
    /**
     * Extend webpack configuration
     */
    extend(config) {
      if (process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
