<template>
  <div id="blog-post">
    <h1>{{ post.fields.title }}</h1>
    <figure>
      <img v-if="post.fields.heroImage.fields.file.fileName" :src="post.fields.heroImage.fields.file.url" width="900" alt="">
    </figure>
    <small>{{ post.sys.updatedAt | formatDate }}</small>

    <vue-markdown>{{post.fields.body}}</vue-markdown>
  </div>
</template>

<script>
import store from '../store'
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs'

export default {
  name: 'Post',
  metaInfo () {
    return {
      title: this.post.fields.title,
      titleTemplate: null
    }
  },
  components: {
    VueMarkdown
  },
  data () {
    return {
      post: {}
    }
  },
  methods: {
    getPost () {
      store.getEntries({
        limit: 1,
        content_type: 'blogPost',
        'fields.slug': this.$route.params.slug
      })
        .then(entry => {
          this.post = entry.items[0]
          console.log(this.post)
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
