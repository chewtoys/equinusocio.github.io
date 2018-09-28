<template>
  <article class="ArticlePreview" :dir="directionChecker(index)">
    <figure>
      <img
        class="ArtigleImage"
        draggable="false"
        v-if="post.fields.heroImage.fields.file"
        :src="`${post.fields.heroImage.fields.file.url}`"
        width="408"
      >
    </figure>
    <div class="ArticleContent" dir="ltr">
      <header>
        <aside class="MetaContainer">
          <time class="DateTime" :datetime="( new Date(post.fields.publishDate) )">
            {{ FormatDate(post.fields.publishDate) }}
          </time>
          <div class="TagsContainer">
            <Tag :tag="tag" :key="tag" v-for="tag in post.fields.tags">{{tag}}</Tag>
          </div>
        </aside>
        <h1>{{ post.fields.title }}</h1>
      </header>
      <p class="SmallBody">{{ post.fields.description }}</p>
      <nuxt-link tag="button" ne-button :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="title">Read this story</nuxt-link>
    </div>
  </article>
</template>

<script>
import FormatDate from '../plugins/formatDate'
import Tag from './tag.vue'

export default {
  props: {
    post: Object,
    index: Number
  },
  data () {
    return {
      dir: 'ltr'
    }
  },
  components: {
    Tag
  },
  methods: {
    FormatDate,
    directionChecker (index) {
      if (index % 2 === 0) {
        return null
      } else {
        return 'rtl'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '@native-elements/ne-button/src/ne-button.pcss';

.ArticlePreview {
  display: grid;
  grid-gap: 56px;
  grid-template-columns: 408px auto;
}

.ArticlePreview + .ArticlePreview {
  margin-top: 170px;
}

.DarkTheme .ArtigleImage {
  filter: invert(100%);
}

.ArticleContent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: calc(90px);
  padding-right: 56px;

  @nest [dir='rtl'] & {
    padding-left: 56px;
    padding-right: 0;
  }
}

.MetaContainer {
  display: flex;
  margin-bottom: 32px;
}

.DateTime {
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--grayColor, #969FA9);
  margin-right: 16px;
  letter-spacing: 0.11em;
}

p.SmallBody {
  max-width: 95%;
}

[ne-button] {
  --ne-button-background: var(--callToActionColor, #00E2BC);
  --ne-button-hover-background: var(--callToActionColor, #00E2BC);
  --ne-button-active-background: var(--callToActionColor, #00E2BC);
  --ne-button-outline-color: none;
  --ne-button-radius: 200px;
  --ne-button-shadow: none;

  margin-top: 48px;
}
</style>
