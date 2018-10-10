<template>
  <main role="main">
    <Header />
    <HeroBanner height="calc(100vh - 200px)">
      <h1 class="DisplayTitle">Just some story and tips for developers</h1>

      <TagList class="AllTags">
        <Tag :tag="tag" :key="tag" v-for="(tag) in tags">{{tag}}</Tag>
      </TagList>
    </HeroBanner>

    <ArticlesList>
      <article-preview :post="post" :index="index" v-for="(post, index) in posts" :key="post.sys.id"></article-preview>
    </ArticlesList>

    <Footer>Copyright © <Datetime :date="new Date()" :options="{ year: 'numeric' }" /> Mattia Astorino</Footer>
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import HeroBanner from '~/components/herobanner.vue'
import Header from '~/components/header.vue'
import ArticlesList from '~/components/articles-list.vue'
import ArticlePreview from '~/components/article/article-preview.vue'
import Datetime from '~/components/article/datetime.vue'
import Footer from '~/components/footer.vue'
import TagList from '~/components/article/taglist.vue'
import Tag from '~/components/article/tag.vue'

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
        posts: posts.items
      }
    })
  },
  data () {
    return {
      tags: Array
    }
  },
  methods: {
    removeDuplicates (arr) {
      return Array.from(new Set(arr))
    },
    getAllTags (posts) {
      this.tags = this.removeDuplicates(posts.reduce((acc, src) => acc.concat(src.fields.tags), []))
    }
  },
  mounted () {
    this.getAllTags(this.posts)
  },
  components: {
    ArticlesList,
    ArticlePreview,
    HeroBanner,
    Datetime,
    Footer,
    Header,
    TagList,
    Tag
  }
}
</script>

<style lang="postcss" scoped>
.AllTags {
  margin-top: 110px;
}
</style>
