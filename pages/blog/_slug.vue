<template>
  <main role="main">
    <Header />

    <HeroBanner height="calc(100vh - 600px)">
      <TagList>
        <Tag :tag="tag" :key="tag" v-for="(tag) in post.fields.tags">{{tag}}</Tag>
      </TagList>
      <h1 class="DisplayTitle">{{ post.fields.title }}</h1>

      <Datetime class="PublishDate" :date="new Date(post.fields.publishDate)" />
      <ShareWidget :postTitle="post.fields.title" />
    </HeroBanner>

    <section>
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
import TagList from '~/components/article/taglist.vue'
import Datetime from '~/components/article/datetime.vue'
import ShareWidget from '~/components/article/share-widget.vue'
import Tag from '~/components/article/tag.vue'

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
    Header,
    TagList,
    ShareWidget,
    Datetime,
    Tag
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="postcss" scoped>
.DisplayTitle {
  margin-top: 24px;
}

.PublishDate {
  margin-top: 80px;
}
</style>
