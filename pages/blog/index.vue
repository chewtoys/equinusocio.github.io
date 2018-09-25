<template>
  <div>
    <Header />

    <h2>All articles ({{ posts.length }})</h2>
    <article-preview :post="post" v-for="post in posts" :key="post.sys.id"></article-preview>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Header from '~/components/header.vue'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  },
  components: {
    ArticlePreview,
    Header
  }
}
</script>
