<template>
  <article :class="`ArticlePreview ${directionChecker(index)}`" >
    <figure class="ArticleImage">
      <img
        draggable="false"
        v-if="post.fields.heroImage.fields.file"
        :src="`${post.fields.heroImage.fields.file.url}`"
      >
    </figure>
    <div class="ArticleContent">
      <header>
        <aside class="MetaContainer">
          <Datetime :date="new Date(post.fields.publishDate)" />
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
import Tag from '~/components/article/tag.vue'
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
@import '@native-elements/ne-button/src/ne-button.pcss';
@import '../../assets/media.pcss';

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

.ArticleImage {
  pointer-events: none;
  transition: filter 200ms;
  width: 100%;
  margin: 0 auto;
  max-width: 408px;
  margin-bottom: 32px;

  & img {
    margin: 0 auto;
    width: 92%;
  }

  @nest .DarkTheme & {
    filter: invert(100%);
  }
}

@media (--small) {
  .ArticleImage {
    margin-bottom: 0;

    & img {
      width: 100%;
    }
  }
  .Alt .ArticleImage {
    order: 2;
  }
}

.ArticleContent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 40px;
  padding-left: 46px;
}

@media (--small) {
  .ArticleContent {
    padding-left: 0;
    padding-top: 90px;

    @nest .Alt & {
      padding-left: 40px;
      padding-right: 0;
    }
  }
}

.MetaContainer {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

@media (--medium) {
  .MetaContainer {
    align-items: center;
    flex-direction: row;
  }
}

.TagsContainer {
  margin-top: 16px;
}

@media (--medium) {
  .TagsContainer {
    margin-top: 0;
    margin-left: 16px;
  }
}

.PostTitle {
  margin: 32px 0;
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
