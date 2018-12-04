<template>
  <main>
    <HeroBanner height="calc(100vh - 200px)">
      <h1 class="DisplayTitle">Just some stories and tips for developers</h1>

      <TagList class="AllTags">
        <Tag :tag="tag" :key="tag" v-for="tag in tags">{{tag}}</Tag>
      </TagList>
    </HeroBanner>

    <ArticlesList>
      <article-preview :post="post" :index="index" v-for="(post, index) in posts" :key="post.sys.id"></article-preview>
    </ArticlesList>

    <Footer />
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

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
  computed: {
    tags: function () {
      return this.removeDuplicates(this.posts.reduce((acc, src) => acc.concat(src.fields.tags), []))
    }
  },
  methods: {
    removeDuplicates (arr) {
      return Array.from(new Set(arr))
    }
  },
  components: {
    HeroBanner: () => import('~/components/herobanner.vue'),
    ArticlesList: () => import('~/components/articles-list.vue'),
    ArticlePreview: () => import('~/components/article/article-preview.vue'),
    Footer: () => import('~/components/footer.vue'),
    TagList: () => import('~/components/article/taglist.vue'),
    Tag: () => import('~/components/article/tag.vue')
  },
  transition: 'bounce',
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.person.fields.shortBio },
        { hid: 'ip:name', itemprop: 'name', content: this.person.fields.name },
        { hid: 'ip:headline', itemprop: 'headline', content: this.person.fields.title },
        { hid: 'ip:descriptiom', itemprop: 'description', content: this.person.fields.shortBio },
        { hid: 'ip:image', itemprop: 'image', content: `${this.person.fields.image.fields.file.url}?fit=fill&f=top&w=1200&h=630&bg=rgb:F3F6F9` },
        { hid: 'og:url', property: 'og:url', content: `${process.env.baseUrl}${this.$route.fullPath}` }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.AllTags {
  margin-top: 110px;
}
</style>
