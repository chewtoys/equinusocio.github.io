<template>
  <div>
    <header>
      <Navigation></Navigation>
      <img
        :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
        :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=250&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=500&fit=fill 2000w`"
        size="100vw"
        :alt="post.fields.heroImage.fields.description"
      >
    </header>

    <section>
      <time>{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
      <h1>{{ post.fields.title }}</h1>
      <vue-markdown>{{post.fields.body}}</vue-markdown>
    </section>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import Prism from 'prismjs'

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
        { hid: 'og:locale', property: 'og:locale', content: 'default' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://atelierbram.github.io/syntax-highlighting/prism/demo/assets/css/prism-base16-ateliercave.light.css' }
      ]
    }
  },
  components: {
    Navigation,
    VueMarkdown
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style></style>
