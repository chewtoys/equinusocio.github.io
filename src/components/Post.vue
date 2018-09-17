<template>
  <div id="blog-post">
    <h1>{{ post.data.title }}</h1>
    <figure>
      <img v-if="post.data.featured_image" :src="post.data.featured_image" width="900" alt="">
      <img v-else src="http://via.placeholder.com/250x250" width="900" alt="">
    </figure>
    <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
    <div v-html="post.data.body"></div>

    <router-link
      v-if="post.meta.previous_post"
      :to="/blog/ + post.meta.previous_post.slug"
      class="button"
    >
      {{ post.meta.previous_post.title }}
    </router-link>
    <router-link
      v-if="post.meta.next_post"
      :to="/blog/ + post.meta.next_post.slug"
      class="button"
    >
      {{ post.meta.next_post.title }}
    </router-link>
  </div>
</template>

<script>
import { butter } from "@/butter";

export default {
  name: "Post",
  data() {
    return {
      post: {},
      postCategories: []
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data;
          console.log(res.data);
        })
        .catch(res => {
          console.log(res);
        });
    },
    getCategories() {
      butter.category.list().then(res => {
        console.log("List of Categories:");
        console.log(res.data.data);
      });
    },
    getPostsByCategory() {
      butter.category
        .retrieve("example-category", {
          include: "recent_posts"
        })
        .then(res => {
          console.log("Posts with specific category:");
          console.log(res);
        });
    }
  },
  created() {
    this.getPost();
  }
};
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
  color: #42b983;
}
</style>
