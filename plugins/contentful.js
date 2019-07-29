/**
 * Require the Contentful javascript
 * client.
 */
const contentful = require('contentful')

/**
 * Export the createClient function with
 * the default config
 */
const createClient = (
  spaceId = process.env.CTF_SPACE_ID,
  accessToken = process.env.CTF_CDA_ACCESS_TOKEN
) => {
  return contentful.createClient({
    space: spaceId,
    accessToken: accessToken
  })
}

export default createClient
