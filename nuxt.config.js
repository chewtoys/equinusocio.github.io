const { getConfigForKeys } = require('./lib/config.js')
const headConfig = require('./lib/headConfig.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
  'CTF_PERSON_ID'
])
const { createClient } = require('./plugins/contentful')
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
    title: headConfig.TITLE,
    meta: headConfig.COMMON_META,
    link: headConfig.COMMON_LINKS
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'var(--callToActionColor, #2b7f55)' },
  /**
  ** Define the destination mode when building
  */
  mode: 'spa',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
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
      src: '~plugins/ga.js',
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
    routes () {
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
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
}

module.exports = config
