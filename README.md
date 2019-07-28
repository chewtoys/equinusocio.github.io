
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

After cloning the repo, create a file named `contentful.config.json` at the project root, then add and populate the contentful required keys:

```json
{
  "CTF_SPACE_ID": "",
  "CTF_CDA_ACCESS_TOKEN": ""
}
```

The config file is ignored by default, but **MAKE SURE TO NOT ADD IT ACCIDENTALLY TO THE REPOSITORY.**

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build

# generate static project
$ yarn generate
```

# Contentful client usage (example)

You can use the nuxt `asyncData` function to get data from Contentful:

```html
<script>
  import { createClient } from '~/plugins/contentful.js'
  const client = createClient()

  export default {
    async asyncData({ env }) {
      try {
        let getPosts = await client.getEntries({
          content_type: 'blogPost',
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
