<template>
  <article :class="`ArticlePreview ${directionChecker(index)}`" >
    <figure class="ArtigleImage">
      <img
        draggable="false"
        v-if="post.fields.heroImage.fields.file"
        :src="`${post.fields.heroImage.fields.file.url}`"
        width="408"
      >
    </figure>
    <div class="ArticleContent">
      <header>
        <aside class="MetaContainer">
          <Datetime :date="post.fields.publishDate"></Datetime>
          <TagList class="TagsContainer">
            <Tag :tag="tag" :key="tag" v-for="tag in post.fields.tags">{{tag}}</Tag>
          </TagList>
        </aside>
        <h1 class="PostTitle"><nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="title">{{ post.fields.title }}</nuxt-link></h1>
      </header>
      <p class="SmallBody">{{ post.fields.description }}</p>
      <nuxt-link tag="button" ne-button :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="title">Read this story</nuxt-link>
    </div>
  </article>
</template>

<script>
import Tag from '~/components/tag.vue'
import TagList from '~/components/article/taglist.vue'
import Datetime from '~/components/article/datetime.vue'

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
    Tag,
    TagList,
    Datetime
  },
  methods: {
    directionChecker (index) {
      if (index % 2 === 0) {
        return ''
      } else {
        return 'Alt'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../assets/media.pcss';
@import '@native-elements/ne-button/src/ne-button.pcss';

.ArticlePreview {
  display: grid;
  grid-gap: 0;
  grid-template-columns: auto;
}

@media (--small) {
  .ArticlePreview {
    grid-gap: 56px;
    grid-template-columns: 408px auto;

    &.Alt {
      grid-template-columns: auto 408px;
    }
  }
}

.ArticlePreview + .ArticlePreview {
  margin-top: 170px;
}

.ArtigleImage {

  & img {
    margin: 0 auto;
  }

  @nest .DarkTheme & {
    filter: invert(100%);
  }
}

@media (--small) {
  .Alt .ArtigleImage {
    order: 2;
  }
}

.ArticleContent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: calc(90px);
  padding-right: 56px;
  padding-left: 46px;
}

@media (--small) {
  .ArticleContent {
    padding-left: 0;

    @nest .Alt & {
      padding-left: 56px;
      padding-right: 0;
    }
  }
}

.MetaContainer {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

@media (--small) {
  .MetaContainer {
    flex-direction: row;
  }
}

.TagsContainer {
  margin-top: 16px;
}

@media (--small) {
  .TagsContainer {
    margin-top: 0;
  }
}

.PostTitle a {
  text-decoration: inherit;
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
