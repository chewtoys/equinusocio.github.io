<template>
  <div>
    <section>
      <h2>All articles tagged #{{ tag }} ({{ posts.length }})</h2>
      <article-preview :post="post" v-for="post in posts" :key="post.sys.id"></article-preview>
    </section>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import ArticlePreview from '~/components/article/article-preview.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.tags[in]': params.tag,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items,
        tag: params.tag
      }
    })
  },
  components: {
    ArticlePreview
  }
}
</script>
