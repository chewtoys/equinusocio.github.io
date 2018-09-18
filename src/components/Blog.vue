<template>
  <div id="blog-home">
      <h1>Blog</h1>
      <div
        v-for="(post, index) in content"
        :key="post + '_' + index"
      >
        <router-link :to="{ name: 'post', params: { slug: post.fields.slug }}">
          <article class="media">
            <figure>
              <img
                v-if="post.fields.heroImage.fields.file.fileName"
                :src="post.fields.heroImage.fields.file.url"
                alt="post.fields.title"
                width="740"
              >
              <img
                v-else
                src="http://via.placeholder.com/250x250"
                alt=""
              >
            </figure>
            <h2>{{ post.fields.title }}</h2>
            <p>{{ post.fields.description }}</p>
          </article>
        </router-link>
      </div>
  </div>
</template>

<script>
  import store from '../store'

  export default {
    name: 'Blog',
    data () {
      return {
        content: []
      }
    },
    methods: {
      getPosts () {
        store.getEntries({
          limit: 10,
          order: 'sys.createdAt',
          content_type: 'blogPost'
        }).then(entries => {
          this.content = entries.items
          // console.log(this.content)
        })
      }
    },
    created () {
      this.getPosts()
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
