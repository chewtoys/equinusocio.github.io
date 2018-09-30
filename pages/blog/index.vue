<template>
  <main role="main">
    <Media :query="{maxWidth: 768}">
      <MobileHeader :person="person" />
    </Media>

    <Media :query="{minWidth: 768}">
      <Header />
    </Media>

    <HeroBanner class="BlogHero">
      <h1 class="DisplayTitle">Just some story and tips for developers</h1>
    </HeroBanner>

    <h2>All articles ({{ posts.length }})</h2>
    <ArticlesList>
      <article-preview :post="post" :index="index" v-for="(post, index) in posts" :key="post.sys.id"></article-preview>
    </ArticlesList>
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import HeroBanner from '~/components/herobanner.vue'
import MobileHeader from '~/components/mobile-header.vue'
import Header from '~/components/header.vue'
import ArticlesList from '~/components/articles-list.vue'
import ArticlePreview from '~/components/article/article-preview.vue'
import Media from 'vue-media'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        posts: posts.items
      }
    })
  },
  components: {
    ArticlesList,
    ArticlePreview,
    HeroBanner,
    MobileHeader,
    Media,
    Header
  }
}
</script>

<style lang="postcss" scoped>
.BlogHero {
  height: calc(100vh - 400px);
}
</style>

