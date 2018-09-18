<template>
  <div id="blog-post">
    <h1>{{ post.title }}</h1>
    <figure>
      <img v-if="post.featured_image" :src="post.featured_image" width="900" alt="">
      <img v-else src="http://via.placeholder.com/250x250" width="900" alt="">
    </figure>
    <small>{{ post.published | formatDate }}</small>

    <vue-markdown :source="post.body"></vue-markdown>

    <router-link
      v-if="postMeta.previous_post"
      :to="/blog/ + postMeta.previous_post.slug"
      class="button"
    >
      {{ postMeta.previous_post.title }}
    </router-link>
    <router-link
      v-if="postMeta.next_post"
      :to="/blog/ + postMeta.next_post.slug"
      class="button"
    >
      {{ postMeta.next_post.title }}
    </router-link>
  </div>
</template>

<script>
import { butter } from '@/butter'
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs'

export default {
  name: 'Post',
  components: {
    VueMarkdown
  },
  data () {
    return {
      post: {},
      postMeta: {},
      postCategories: []
    }
  },
  methods: {
    getPost () {
      butter.post
        .retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data.data
          this.postMeta = res.data.meta
        })
        .catch(res => {})
    }
  },
  created () {
    this.getPost()
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="postcss" scoped>
  h3 {
    margin: 40px 0 0;
  }


  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42B983;
  }
</style>
