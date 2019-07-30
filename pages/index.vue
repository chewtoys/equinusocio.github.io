<template>
  <main>
    <HeroBanner height="calc(100vh - 170px)" v-if="person">
      <h1 class="DisplayTitle">Hello. 👻</h1>
      <vue-markdown class="SubTitle">{{ person.fields.shortBio }}</vue-markdown>
    </HeroBanner>

    <ArticlesList>
      <article-preview
        class="ArticleCard"
        :post="post"
        :index="index"
        v-for="(post, index) in posts"
        :key="post.sys.id"
      ></article-preview>
    </ArticlesList>

    <div class="LoadMore">
      <nuxt-link :to="{ name: 'blog' }">More stories →</nuxt-link>
    </div>

    <Footer />
  </main>
</template>

<script>
import createClient from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  async asyncData(context) {
    const posts = await client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      limit: 3,
      order: '-sys.createdAt'
    })

    const person = await client.getEntries({
      'sys.id': process.env.CTF_PERSON_ID
    })

    return {
      posts: posts.items,
      person: person.items[0]
    }
  },
  head() {
    return {
      __dangerouslyDisableSanitizersByTagID: {
        'ip:image': ['content'],
        'og:image': ['content'],
        'twitter:image': ['content']
      },
      title: 'Development tips and projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'UX Engineer in Milan and member of Open Source Design.'
        },
        { hid: 'ip:name', itemprop: 'name', content: 'Mattia Astorino' },
        {
          hid: 'ip:headline',
          itemprop: 'headline',
          content: 'Development tips and projects'
        },
        {
          hid: 'ip:description',
          itemprop: 'description',
          content: 'UX Engineer in Milan and member of Open Source Design.'
        },
        {
          hid: 'ip:image',
          itemprop: 'image',
          content: `https:${this.person.fields.image.fields.file.url}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Development tips and projects'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.baseUrl}${this.$route.fullPath}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https:${this.person.fields.image.fields.file.url}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'UX Engineer in Milan and member of Open Source Design.'
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `https:${this.person.fields.image.fields.file.url}`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Development tips and projects'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'UX Engineer in Milan and member of Open Source Design.'
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@equinusocio'
        }
      ]
    }
  },
  components: {
    VueMarkdown,
    HeroBanner: () => import('~/components/herobanner.vue'),
    ArticlesList: () => import('~/components/articles-list.vue'),
    ArticlePreview: () => import('~/components/article/article-preview.vue'),
    Footer: () => import('~/components/footer.vue'),
    Datetime: () => import('~/components/article/datetime.vue')
  }
}
</script>

<style scoped lang="postcss">
@import '@native-elements/ne-button/dist/ne-button.css';

.DisplayTitle {
  position: relative;
  animation-name: clip-text;
  cursor: default;
  font-size: responsive 60px 90px;
  font-range: 320px 1440px;

  &,
  &::after {
    animation-delay: 500ms;
    animation-iteration-count: 1;
    animation-duration: 800ms;
    animation-fill-mode: both;
    animation-timing-function: easeOutQuint;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--callToActionColor);
    transform: scaleX(0);
    transform-origin: 0 50%;
    pointer-events: none;
    animation-name: text-revealer;
  }
}

@media (max-width: 48em) {
  .DisplayTitle {
    font-size: 70px;
  }
}

.SubTitle {
  margin-top: 0;
  max-width: 700px;
  text-align: center;
}

.LoadMore {
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  & a {
    font-size: 2rem;
    color: var(--callToActionColor);
  }
}

@keyframes clip-text {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes text-revealer {
  0%,
  50% {
    transform-origin: 0 50%;
  }

  60%,
  100% {
    transform-origin: 100% 50%;
  }

  60% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(0);
  }
}
</style>
