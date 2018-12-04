<template>
  <main>
    <article>
      <HeroBanner height="calc(100vh - 200px)">
        <TagList>
          <Tag :tag="tag" :key="tag" v-for="(tag) in post.fields.tags">{{tag}}</Tag>
        </TagList>
        <h1 class="DisplayTitle">{{ post.fields.title }}</h1>

        <div class="PublishDate">
          <Datetime :date="new Date(post.fields.publishDate)" />
        </div>
        <ShareWidget class="Socials" :postTitle="post.fields.title" />
      </HeroBanner>

      <StoryContainer>
        <vue-markdown class="StoryBody">{{post.fields.body}}</vue-markdown>
      </StoryContainer>
    </article>

    <Footer />

  </main>
</template>

<script>
import Prism from 'prismjs'
import {createClient} from '~/plugins/contentful.js'
import FormatDate from '~/plugins/formatDate'
import StoryContainer from '~/components/article/story-container.vue'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  asyncData ({ env, params, error }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      if (entries.items.length === 0) {
        const status = { statusCode: 404, message: 'Post not found' }
        throw (status)
      } else {
        return {
          post: entries.items[0]
        }
      }
    })
    .catch(e => {
      error(e)
    })
  },
  head () {
    return {
      title: this.post.fields.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.fields.description },
        { hid: 'ip:name', itemprop: 'name', content: this.post.fields.title },
        { hid: 'ip:headline', itemprop: 'headline', content: this.post.fields.title },
        { hid: 'ip:description', itemprop: 'description', content: this.post.fields.description },
        { hid: 'ip:image', itemprop: 'image', content: `https:${this.post.fields.heroImage.fields.file.url}?fit=pad&f=top&w=1200&h=630&bg=rgb:F3F6F9` },
        { itemprop: 'datePublished', content: `${FormatDate(new Date(this.post.fields.publishDate))}` },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.post.fields.title },
        { hid: 'og:url', property: 'og:url', content: `${process.env.baseUrl}${this.$route.fullPath}` },
        { hid: 'og:image', property: 'og:image', content: `https:${this.post.fields.heroImage.fields.file.url}?fit=pad&f=top&w=1200&h=630&bg=rgb:F3F6F9` },
        { hid: 'og:description', property: 'og:description', content: this.post.fields.description },
        { hid: 'og:locale', property: 'og:locale', content: 'default' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.fields.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.fields.description },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@equinusocio' }
      ],
      link: [
        { rel: 'stylesheet', href: '/prism-theme.css' }
      ],
      script: [
        { type: 'text/javascript', src: '//cdn.embedly.com/widgets/platform.js', charset: 'UTF-8', async: true, body: true }
      ]
    }
  },
  components: {
    HeroBanner: () => import('~/components/herobanner.vue'),
    TagList: () => import('~/components/article/taglist.vue'),
    ShareWidget: () => import('~/components/article/share-widget.vue'),
    Tag: () => import('~/components/article/tag.vue'),
    Footer: () => import('~/components/footer.vue'),
    Datetime: () => import('~/components/article/datetime.vue'),
    StoryContainer,
    VueMarkdown
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="postcss" scoped>
.DisplayTitle {
  margin-top: 24px;
}

.PublishDate {
  margin-top: 130px;
  color: var(--grayColor, rgba(119, 133, 149, 0.5));
}

.Socials {
  margin-top: 40px;
}

.StoryBody {
  margin-top: 72px;
}
</style>
