import HelloWorld from "../components/HelloWorld.vue";
import Blog from "../components/Blog.vue";
import Post from "../components/Post.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld
  },
  {
    name: "blog",
    path: "/blog",
    component: Blog
  },
  {
    name: "blog-post",
    path: "/blog/:slug",
    component: Post
  }
];
