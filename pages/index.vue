<template>
  <main role="main">

    <Media :query="{maxWidth: 768}">
      <MobileHeader :person="person" />
    </Media>

    <Media :query="{minWidth: 768}">
      <Header />
    </Media>

    <HeroBanner>
      <h1 class="DisplayTitle">{{ person.fields.name }}</h1>
      <p class="SubTitle"><vue-markdown>{{ person.fields.shortBio }}</vue-markdown></p>
      <Media :query="{minWidth: 768}">
        <Socials :person="person" />
      </Media>
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
import Media from 'vue-media'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import MobileHeader from '~/components/mobile-header.vue'
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
        { hid: 'ip:image', itemprop: 'image', content: `https:${this.person.fields.image.fields.file.url}` },
        { hid: 'og:url', property: 'og:url', content: `https://equinsuocha.io${this.$route.fullPath}` }
      ]
    }
  },
  components: {
    HeroBanner,
    ArticlesList,
    ArticlePreview,
    Socials,
    Media,
    VueMarkdown,
    Header,
    Footer,
    MobileHeader,
    Datetime
  }
}
</script>

<style lang="postcss" scoped>
.DisplayTitle {
  margin-bottom: 0;
}

.SubTitle {
  margin-top: 0;
  max-width: 700px;
  text-align: center;
}
</style>
