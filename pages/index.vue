<template>
  <main>
    <HeroBanner height="calc(100vh - 200px)">
      <h1 class="DisplayTitle">{{ person.fields.name }}</h1>
      <vue-markdown class="SubTitle">{{ person.fields.shortBio }}</vue-markdown>
    </HeroBanner>

    <ArticlesList>
      <article-preview class="ArticleCard" :post="post" :index="index" v-for="(post, index) in posts" :key="post.sys.id"></article-preview>
    </ArticlesList>

    <div class="LoadMore">
      <nuxt-link :to="{ name: 'blog' }">
        More stories →
      </nuxt-link>
    </div>

    <Footer />
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  async asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        limit: 3,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.person.fields.shortBio },
        { hid: 'ip:name', itemprop: 'name', content: this.person.fields.name },
        { hid: 'ip:headline', itemprop: 'headline', content: this.person.fields.title },
        { hid: 'ip:descriptiom', itemprop: 'description', content: this.person.fields.shortBio },
        { hid: 'ip:image', itemprop: 'image', content: `https:${this.person.fields.image.fields.file.url}?fit=fill&f=top&w=1200&h=630&bg=rgb:F3F6F9` },
        { hid: 'og:url', property: 'og:url', content: `https://equinsuocha.dev${this.$route.fullPath}` }
      ]
    }
  },
  components: {
    HeroBanner: () => import('~/components/herobanner.vue'),
    ArticlesList: () => import('~/components/articles-list.vue'),
    ArticlePreview: () => import('~/components/article/article-preview.vue'),
    VueMarkdown,
    Footer: () => import('~/components/footer.vue'),
    Datetime: () => import('~/components/article/datetime.vue')
  }
}
</script>

<style scoped lang="postcss">
@import '@native-elements/ne-button/src/ne-button.pcss';

.SubTitle {
  margin-top: 0;
  max-width: 700px;
  text-align: center;
}

.LoadMore {
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  & a {
    font-size: 2rem;
    color: var(--callToActionColor);
  }
}
</style>
