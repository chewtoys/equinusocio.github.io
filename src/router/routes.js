import HelloWorld from '../components/HelloWorld.vue'
import Blog from '../components/Blog.vue'
import Post from '../components/Post.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
    meta: {
      title: 'Home'
    }
  },
  {
    name: 'blog',
    path: '/blog',
    component: Blog,
    meta: {
      title: 'Blog'
    }
  },
  {
    name: 'post',
    path: '/blog/:slug',
    component: Post,
    meta: {
      title: route => (route.params.slug)
    },
    props: route => ({ slug: route.params.slug })
  }
]
