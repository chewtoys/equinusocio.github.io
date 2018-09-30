<template>
  <div>
    <HeroBanner class="BlogHero">
      <h1 class="DisplayTitle">Just some story and tips for developers</h1>
    </HeroBanner>

    <h2>All articles ({{ posts.length }})</h2>
    <ArticlesList>
      <article-preview :post="post" :index="index" v-for="(post, index) in posts" :key="post.sys.id"></article-preview>
    </ArticlesList>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import HeroBanner from '~/components/herobanner.vue'
import ArticlesList from '~/components/articles-list.vue'
import ArticlePreview from '~/components/article/article-preview.vue'

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
    ArticlesList,
    ArticlePreview,
    HeroBanner
  }
}
</script>

<style lang="postcss" scoped>
.BlogHero {
  height: calc(100vh - 400px);
}
</style>

