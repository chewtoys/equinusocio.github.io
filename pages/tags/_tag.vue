<template>
  <main>
    <HeroBanner height="calc(100vh - 200px)">
      <h1 class="DisplayTitle">#{{ tag }}</h1>
      <p class="SubTitle"><strong>{{ posts.length }}</strong> stories published</p>
    </HeroBanner>

    <ArticlesList>
      <article-preview :post="post" :index="index" v-for="(post, index) in posts" :key="post.sys.id"></article-preview>
    </ArticlesList>

    <Footer />
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import ArticlePreview from '~/components/article/article-preview.vue'
import HeroBanner from '~/components/herobanner.vue'
import ArticlesList from '~/components/articles-list.vue'
import Footer from '~/components/footer.vue'

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
    ArticlePreview,
    HeroBanner,
    Footer,
    ArticlesList
  }
}
</script>
