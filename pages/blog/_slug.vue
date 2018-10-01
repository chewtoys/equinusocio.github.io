<template>
  <main role="main">
    <Header />

    <HeroBanner>
      <h1 class="DisplayTitle">{{ post.fields.title }}</h1>
    </HeroBanner>

    <section>
      <time>{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
      <vue-markdown>{{post.fields.body}}</vue-markdown>
    </section>
  </main>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs'
import {createClient} from '~/plugins/contentful.js'
import HeroBanner from '~/components/herobanner.vue'
import Header from '~/components/header.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error)
  },
  head () {
    return {
      title: this.post.fields.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.fields.description },
        { hid: 'ip:name', itemprop: 'name', content: this.post.fields.title },
        { hid: 'ip:headline', itemprop: 'headline', content: this.post.fields.title },
        { hid: 'ip:description', itemprop: 'description', content: this.post.fields.description },
        { hid: 'ip:image', itemprop: 'image', content: `https:${this.post.fields.heroImage.fields.file.url}` },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.post.fields.title },
        { hid: 'og:url', property: 'og:url', content: `${process.env.baseUrl}${this.$route.fullPath}` },
        { hid: 'og:image', property: 'og:image', content: `https:${this.post.fields.heroImage.fields.file.url}` },
        { hid: 'og:description', property: 'og:description', content: this.post.fields.description },
        { hid: 'og:locale', property: 'og:locale', content: 'default' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.fields.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.fields.description },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@equinusocio' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://atelierbram.github.io/syntax-highlighting/prism/demo/assets/css/prism-base16-ateliercave.light.css' }
      ]
    }
  },
  components: {
    HeroBanner,
    VueMarkdown,
    Header
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style></style>
