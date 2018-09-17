<template>
  <div id="blog-home">
    asd
      <h1>{{ page_title }}</h1>
      <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
      <div
        v-for="(post,index) in posts"
        :key="post.slug + '_' + index"
      >
        <router-link :to="{ name: 'post', params: { slug: post.slug }}">
          <article class="media">
            <figure>
              <!-- Bind results using a `:` -->
              <!-- Use a `v-if`/`else` if their is a `featured_image` -->
              <img
                v-if="post.featured_image"
                :src="post.featured_image"
                alt=""
                width="740"
              >
              <img
                v-else
                src="http://via.placeholder.com/250x250"
                alt=""
              >
            </figure>
            <h2>{{ post.title }}</h2>
            <p>{{ post.summary }}</p>
          </article>
        </router-link>
      </div>
  </div>
</template>

<script>
  import { butter } from '@/butter';

  export default {
    name: 'Blog',
    data() {
      return {
        page_title: 'Blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          this.posts = res.data.data
        })
      }
    },
    created() {
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
