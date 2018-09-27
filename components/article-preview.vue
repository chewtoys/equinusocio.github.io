<template>
  <article class="ArticlePreview">
    <figure>
      <img
        class="ArtigleImage"
        draggable="false"
        v-if="post.fields.heroImage.fields.file"
        :src="`${post.fields.heroImage.fields.file.url}`"
        width="408"
      >
    </figure>
    <div class="ArticleContent">
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
      <nuxt-link tag="button" :ne-button="true" :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="title">Read this story</nuxt-link>
    </div>
  </article>
  <!-- <article>
    <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="title">{{ post.fields.title }}</nuxt-link>


  </article> -->
</template>

<script>
import FormatDate from '../plugins/formatDate'
import Tag from './tag.vue'

export default {
  props: ['post'],
  components: {
    Tag
  },
  methods: {
    FormatDate
  }
}
</script>

<style lang="postcss" scoped>
@import '@native-elements/ne-button/src/ne-button.pcss';

.ArticlePreview {
  display: grid;
  grid-gap: 56px;
  grid-template-columns: auto auto;
}

.DarkTheme .ArtigleImage {
  filter: invert(90%);
}

.ArticleContent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: calc(140px);
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
  max-width: 80%;
}

[ne-button] {
  --ne-button-background: var(--callToActionColor, #00E2BC);
  --ne-button-hover-background: var(--callToActionColor, #00E2BC);
  --ne-button-active-background: var(--callToActionColor, #00E2BC);
  --ne-button-outline-color: none;
  --ne-button-radius: 200px;
  --ne-button-shadow: none;
}
</style>
