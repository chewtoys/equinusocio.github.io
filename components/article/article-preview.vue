<template>
  <article :class="`ArticlePreview ${direction}`" itemscope itemtype="http://schema.org/NewsArticle" author="Mattia Astorino">
    <lazy-component @show="onScreen" class="ArticleImage">
      <figure v-if="visible">
        <picture v-if="post.fields.heroImage.fields.file" itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
          <source
            type="image/webp"
            :srcset="`${post.fields.heroImage.fields.file.url}?w=410&h=467&fm=webp, ${post.fields.heroImage.fields.file.url}?fm=webp 2x`"
            draggable="false"
            :alt="post.fields.title"
          >
          <source
            type="image/png"
            :srcset="`${post.fields.heroImage.fields.file.url}?w=410&h=467&fm=png, ${post.fields.heroImage.fields.file.url}?fm=jpg 2x`"
            draggable="false"
            :alt="post.fields.title"
          >
          <img
            :srcset="`${post.fields.heroImage.fields.file.url}?w=410&h=467&fm=jpg, ${post.fields.heroImage.fields.file.url}?fm=jpg 2x`"
            draggable="false"
            :alt="post.fields.title"
            :src="`${post.fields.heroImage.fields.file.url}?w=410&h=467&fm=webp`"
          >
        </picture>
      </figure>
    </lazy-component>

    <div class="ArticleContent" >

      <header>
        <aside class="MetaContainer">
          <Datetime itemprop="datePublished" :content="shortDate" :date="new Date(post.fields.publishDate)" />
          <TagList class="TagsContainer">
            <Tag :tag="tag" :key="tag" v-for="tag in post.fields.tags">{{tag}}</Tag>
          </TagList>
        </aside>

        <h1 class="PostTitle" itemprop="headline">
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">
              {{ post.fields.title }}
          </nuxt-link>
        </h1>
      </header>

      <p class="SmallBody" itemprop="description">{{ post.fields.description }}</p>

      <nuxt-link tag="button" ne-button :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">
        Read this story
      </nuxt-link>

    </div>
  </article>
</template>

<script>
  import FormatDate from '~/plugins/formatDate'

  export default {
    props: {
      post: Object,
      index: Number
    },
    data() {
      return {
        visible: false
      }
    },
    computed: {
      direction() {
        if (this.index % 2 === 0) {
          return ''
        } else {
          return 'Alt'
        }
      },
      shortDate() {
        return FormatDate(this.post.fields.publishDate, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
      }
    },
    components: {
      Tag: () => import('~/components/article/tag.vue'),
      TagList: () => import('~/components/article/taglist.vue'),
      Datetime: () => import('~/components/article/datetime.vue')
    },
    methods: {
      onScreen() {
        this.visible = true
      }
    }
  }
</script>

<style scoped lang="postcss">
@import '@native-elements/ne-button/src/ne-button.pcss';
@import '../../assets/media.pcss';

.ArticlePreview {
  display: grid;
  grid-gap: 0;
  grid-template-columns: auto;
  visibility: hidden;

  @nest html[data-theme] & {
    visibility: visible;
  }
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

  @nest [data-theme='dark-theme'] & {
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
  display: grid;
  margin-bottom: 32px;
  color: var(--grayColor, rgba(119, 133, 149, 0.5));
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

.PostTitle {
  margin: 0;
}

.PostTitle a {
  text-decoration: inherit;
}

p.SmallBody {
  max-width: 95%;
}

[ne-button] {
  margin-top: 28px;
}
</style>
