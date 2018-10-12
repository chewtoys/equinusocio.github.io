<template>
  <main role="main">

    <Header />

    <HeroBanner>
      <h1 class="DisplayTitle">{{ person.fields.name }}</h1>
      <p class="SubTitle"><vue-markdown>{{ person.fields.shortBio }}</vue-markdown></p>
      <Socials :person="person" />
    </HeroBanner>

    <ArticlesList>
      <article-preview :post="post" :index="index" v-for="(post, index) in posts" :key="post.sys.id"></article-preview>
    </ArticlesList>

    <Footer>Copyright © <Datetime :date="new Date()" :options="{ year: 'numeric' }" /> Mattia Astorino</Footer>
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'
import HeroBanner from '~/components/herobanner.vue'
import ArticlesList from '~/components/articles-list.vue'
import Socials from '~/components/socials.vue'
import ArticlePreview from '~/components/article/article-preview.vue'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import Datetime from '~/components/article/datetime.vue'

const client = createClient()

export default {
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        limit: 5,
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
        { hid: 'og:url', property: 'og:url', content: `https://equinsuocha.io${this.$route.fullPath}` }
      ]
    }
  },
  components: {
    HeroBanner,
    ArticlesList,
    ArticlePreview,
    Socials,
    VueMarkdown,
    Header,
    Footer,
    Datetime
  }
}
</script>

<style lang="postcss" scoped>
.SubTitle {
  margin-top: 0;
  max-width: 700px;
  text-align: center;
}
</style>
