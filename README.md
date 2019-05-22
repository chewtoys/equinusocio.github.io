
![image](https://i.ibb.co/tbdhd9J/n-c.png)

This starter allows you to easily connect your nuxt application with the Contentful headless CMS. It also provides some basic configurations.

- [How to use](#how-to-use)
  - [Configure](#configure)
  - [Build Setup](#build-setup)
- [Contentful client usage (example)](#contentful-client-usage-example)

## Configured Tools
- Nuxt
- PostCSS with some plugins
- Prettier
- Eslint
- Stylelint

# How to use

You can use `degit` to download the scaffolding directly from Github:

```sh
npx degit equinusocio/nuxt-contentful-starter my-new-project
```

## Configure

Your `SPACE_ID` and `CDA_ACCESS_TOKEN` are defined inside a `.contentful.json`. After cloning the repo, rename `.contentful.sample.json` into `.contentful.json` and **MAKE SURE TO NOT ADD IT TO THE REPOSITORY.**

The `contentful.js` plugin provided makes use of the nuxt configured `env` variables. If you want to add new contentuful keys and make them available inside nuxt add them to `.contentful.json` and the `env` const inside **nuxt.config.js**.

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

# Contentful client usage (example)

You can use the nuxt `asyncData` function to get data from Contentful. Assuming you have a `CTF_BLOG_POST_TYPE_ID` env inside your `.contentful.json` and `nuxt.config.js`:

```html
<script>
  import createClient from '~/plugins/contentful.js'
  const client = createClient()
  
  export default {
    async asyncData({ env }) {
      try {
        let getPosts = await client.getEntries({
          content_type: env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        });
        return {
          posts: getPosts.items
        };
      } catch (e) {
        console.error(e)
      }
    }
  }
</script>
```
