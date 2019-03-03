<template>
  <nav role="navigation" :class="`MainNavigation`" :data-direction="direction.toLowerCase()">
    <template v-if="this.$router.options.routes">
      <nuxt-link class="NagivationItem" :to="{ name: 'blog' }">BLOG</nuxt-link>
      <nuxt-link class="NagivationItem" :to="{ name: 'projects' }">PROJECTS</nuxt-link>
      <nuxt-link class="NagivationItem" :to="{ name: 'about' }">ABOUT</nuxt-link>
    </template>
  </nav>
</template>

<script>
  export default {
    props: {
      direction: {
        type: String,
        default: 'row'
      }
    }
  }
</script>

<style scoped lang="postcss">
@import '../assets/media.pcss';

.MainNavigation {
  display: inline-flex;
  justify-content: space-between;
  font-weight: 700;

  &[data-direction='column'] {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
}

.NagivationItem {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  text-align: center;
  padding: 16px 24px;

  &.nuxt-link-active {
    color: var(--callToActionColor, #00E2BC);
  }
}

.MainNavigation[data-direction='row'] .NagivationItem + .NagivationItem {
  margin-left: 90px;
}

.MainNavigation[data-direction='column'] .NagivationItem + .NagivationItem {
  margin-top: 40px;
}
</style>
