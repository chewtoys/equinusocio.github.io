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
const {
  createClient
} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const cmaContentful = require('contentful-management')
const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})

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
    link: headConfig.COMMON_LINKS
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
  mode: 'universal',
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    /*
     ** Configure Postcss Plugins
     */
  },

  /*
   ** Make client available everywhere via Nuxt plugins
   */
  plugins: [
    '~/plugins/contentful',
    {
      src: '~/plugins/scroll-reveal',
      ssr: false
    }
  ],

  /*
   ** Get all blog posts from Contentful
   ** and generate the needed files upfront
   **
   ** Included:
   ** - blog posts
   ** - available blog post tags
   */
  generate: {
    routes() {
      return Promise.all([
          // get all blog posts
          cdaClient.getEntries({
            'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
          }),
          // get the blog post content type
          cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
          .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
        ])
        .then(([entries, postType]) => {
          return [
            // map entries to URLs
            ...entries.items.map(entry => `/blog/${entry.fields.slug}`),
            // map all possible tags to URLs
            ...postType.fields.find(field => field.id === 'tags').items.validations[0].in.map(tag => `/tags/${tag}`)
          ]
        })
    }
  },

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
  }
}

module.exports = config
