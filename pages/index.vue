<template>
  <main role="main">
    <Header />
    <HeroBanner>
      <h1 class="DisplayTitle">{{ person.fields.name }}</h1>
      <p class="SubTitle"><vue-markdown>{{ person.fields.shortBio }}</vue-markdown></p>
      <nav class="Socials" aria-label="Social profiles">
        <a v-if='person.fields.dribbble' :href="person.fields.dribbble" :aria-label="`${ person.fields.name } on Dribbble`" target="_blank">
          <svg class="SocialIcon" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16zm13.5-13.8c-.5-.2-4.2-1.3-8.5-.6 1.8 4.9 2.5 8.9 2.7 9.7 3-2 5.2-5.3 5.8-9.1zm-8.2 10.4c-.2-1.2-1-5.4-2.9-10.4h-.1c-7.7 2.7-10.5 8-10.7 8.5 2.3 1.8 5.2 2.9 8.4 2.9 1.9.1 3.7-.3 5.3-1zM5.8 25.2c.3-.5 4.1-6.7 11.1-9 .2-.1.4-.1.5-.2-.3-.8-.7-1.6-1.1-2.3-6.8 2-13.4 2-14 1.9v.4c0 3.5 1.4 6.7 3.5 9.2zm-3.2-12c.6 0 6.2 0 12.6-1.7-2.3-4-4.7-7.4-5.1-7.9C6.4 5.5 3.5 9 2.6 13.2zM12.8 2.7c.4.5 2.9 3.9 5.1 8 4.9-1.8 6.9-4.6 7.2-4.9-2.4-2.1-5.6-3.4-9.1-3.4-1.1 0-2.2.1-3.2.3zm13.8 4.7c-.3.4-2.6 3.3-7.6 5.4.3.7.6 1.3.9 2 .1.2.2.5.3.7 4.5-.6 9.1.3 9.5.4-.1-3.2-1.2-6.2-3.1-8.5z"/></svg>
        </a>
        <a v-if='person.fields.github' :href="person.fields.github" :aria-label="`${ person.fields.name } on Github`" target="_blank">
          <svg class="SocialIcon" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.2 0 0 7.2 0 16c0 7.1 4.6 13.1 10.9 15.2.8.1 1.1-.3 1.1-.8v-2.7c-4.5 1-5.4-2.1-5.4-2.1-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.5 1.6 2.5 1.6 1.4 2.4 3.7 1.7 4.7 1.3.1-1 .6-1.7 1-2.1-3.6-.4-7.3-1.8-7.3-7.9 0-1.7.6-3.2 1.6-4.3-.2-.4-.7-2 .2-4.2 0 0 1.3-.4 4.4 1.6 1.3-.4 2.6-.5 4-.5s2.7.2 4 .5c3.1-2.1 4.4-1.7 4.4-1.7.9 2.2.3 3.8.2 4.2 1 1.1 1.6 2.5 1.6 4.3 0 6.1-3.7 7.5-7.3 7.9.6.5 1.1 1.5 1.1 3v4.4c0 .4.3.9 1.1.8C27.4 29.1 32 23.1 32 16c0-8.8-7.2-16-16-16z"/></svg>
        </a>
        <a :href="person.fields.twitter" v-if='person.fields.twitter' :aria-label="`${ person.fields.name } on Twitter`" target="_blank">
          <svg class="SocialIcon" width="33" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.1 3.1c-1.2.5-2.4.9-3.8 1 1.4-.8 2.4-2.1 2.9-3.6-1.3.8-2.7 1.3-4.2 1.6C25.8.8 24.1 0 22.3 0c-3.6 0-6.6 2.9-6.6 6.6 0 .5.1 1 .2 1.5-5.5-.3-10.3-2.9-13.6-6.9-.6 1-.9 2.1-.9 3.3 0 2.3 1.2 4.3 2.9 5.5-1.1 0-2.1-.3-3-.8v.1c0 3.2 2.3 5.8 5.3 6.4-.6.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.6 3.3 4.5 6.1 4.6-2.2 1.8-5.1 2.8-8.2 2.8-.5 0-1.1 0-1.6-.1C3 24.9 6.5 26 10.2 26c12.1 0 18.7-10 18.7-18.7v-.8c1.2-1 2.3-2.1 3.2-3.4z"/></svg>
        </a>
        <a v-if='person.fields.linkedin' :href="person.fields.linkedin" :aria-label="`${ person.fields.name } on Linkedin`" target="_blank">
          <svg class="SocialIcon" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.7 0H1.3C.6 0 0 .6 0 1.3v29.3c0 .8.6 1.4 1.3 1.4h29.3c.7 0 1.3-.6 1.3-1.3V1.3C32 .6 31.4 0 30.7 0zM9.5 27.3H4.7V12h4.8v15.3zM7.1 9.9c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8 1.5 0 2.8 1.2 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8zm20.2 17.4h-4.7v-7.4c0-1.8 0-4-2.5-4s-2.8 1.9-2.8 3.9v7.6h-4.7V12H17v2.1h.1c.6-1.2 2.2-2.5 4.5-2.5 4.8 0 5.7 3.2 5.7 7.3v8.4z"/></svg>
        </a>
        <a v-if='person.fields.codepen' :href="person.fields.codepen" :aria-label="`${ person.fields.name } on Codepen`" target="_blank">
          <svg class="SocialIcon" width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.9 10.925v-.2-.2-.2-.1s0-.1-.1-.1v-.1s0-.1-.1-.1l-.1-.1s-.1 0-.1-.1h-.1L16.7.225c-.5-.3-1.1-.3-1.5 0l-14.7 9.8H.4s-.1 0-.1.1l-.1.1-.1.1v.1s0 .1-.1.1V22.025s0 .1.1.1v.1s0 .1.1.1l.1.1s.1 0 .1.1h.1l14.6 9.8c.2.2.5.2.8.2.3 0 .5-.1.8-.2l14.6-10.3h.1s.1 0 .1-.1l.1-.1.1-.1v-.1s0-.1.1-.1v-.2-.2-.2-.1V10.925c.1.2.1.1.1 0zm-14.6-7l10.8 7.2-4.8 3.2-6-4v-6.4zm-2.8 0v6.4l-6 4-4.8-3.2 10.8-7.2zm-11.8 9.8l3.4 2.3-3.4 2.3v-4.6zm11.8 14.4l-10.7-7.2 4.8-3.2 6 4v6.4h-.1zm1.4-8.8l-4.9-3.3 4.9-3.3 4.9 3.3-4.9 3.3zm1.4 8.8v-6.4l6-4 4.8 3.2-10.8 7.2zm11.8-9.8l-3.4-2.3 3.4-2.3v4.6z"/></svg>
        </a>
      </nav>
    </HeroBanner>
    <section class="ArticlesList">
      <article-preview :post="post" :index="index" v-for="(post, index) in posts" :key="post.sys.id"></article-preview>
    </section>
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'
import Header from '~/components/header.vue'
import HeroBanner from '~/components/herobanner.vue'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        limit: 5,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.person.fields.shortBio },
        { hid: 'ip:name', itemprop: 'name', content: this.person.fields.name },
        { hid: 'ip:headline', itemprop: 'headline', content: this.person.fields.title },
        { hid: 'ip:descriptiom', itemprop: 'description', content: this.person.fields.shortBio },
        { hid: 'ip:image', itemprop: 'image', content: `https:${this.person.fields.image.fields.file.url}` },
        { hid: 'og:url', property: 'og:url', content: `https://equinsuocha.io${this.$route.fullPath}` }
      ]
    }
  },
  components: {
    Header,
    HeroBanner,
    ArticlePreview,
    VueMarkdown
  }
}
</script>

<style lang="postcss" scoped>
@import '../assets/media.pcss';

.DisplayTitle {
  margin-bottom: 0;
}

.SubTitle {
  margin-top: 0;
  max-width: 700px;
  text-align: center;
}

.Socials {
  display: grid;
  grid-template-columns: repeat(3, 32px);
  grid-auto-flow: column;
  grid-gap: 40px;
  margin-top: 60px;
  grid-template-rows: 32px;
  align-items: center;
}

.SocialIcon {
  fill: var(--foregroundColor, #000);
  pointer-events: visiblePainted;
  transition: all 200ms ease-out;

  &:active {
    transform: scale(1.2);
  }
}

.ArticlesList {
  max-width: 953px;
  margin: 0 auto;
}
</style>
