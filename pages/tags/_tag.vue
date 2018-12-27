<template>
  <main>
    <HeroBanner height="calc(100vh - 200px)">
      <h1 class="DisplayTitle">#{{ tag }}</h1>
      <p class="SubTitle"><strong>{{ posts.length }}</strong> stories published</p>
    </HeroBanner>

    <ArticlesList>
      <article-preview class="ArticleCard" :post="post" :index="index" v-for="(post, index) in posts" :key="post.sys.id"></article-preview>
    </ArticlesList>

    <Footer />
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

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
    ArticlePreview: () => import('~/components/article/article-preview.vue'),
    HeroBanner: () => import('~/components/herobanner.vue'),
    ArticlesList: () => import('~/components/articles-list.vue'),
    Footer: () => import('~/components/footer.vue')
  }
}
</script>
