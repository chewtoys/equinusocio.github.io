<template>
  <div>
    <Header />
    <HeroBanner class="BlogHero">
      <h1 class="DisplayTitle">Just some story and tips for developers</h1>
    </HeroBanner>

    <h2>All articles ({{ posts.length }})</h2>
    <article-preview :post="post" v-for="post in posts" :key="post.sys.id"></article-preview>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Header from '~/components/header.vue'
import HeroBanner from '~/components/herobanner.vue'
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
    Header,
    HeroBanner
  }
}
</script>

<style lang="postcss" scoped>
.BlogHero {
  height: calc(100vh - 400px);
}
</style>

