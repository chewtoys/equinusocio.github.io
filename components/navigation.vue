<template>
  <nav role="navigation" class="MainNavigation">
    <template v-if="this.$router.options.routes">
      <nuxt-link class="NagivationItem" :to="{ name: 'blog' }">BLOG</nuxt-link>
      <nuxt-link class="NagivationItem" :to="{ name: 'projects' }">PROJECTS</nuxt-link>
      <nuxt-link class="NagivationItem" :to="{ name: 'about' }">ABOUT</nuxt-link>
    </template>
  </nav>
</template>

<style scoped lang="postcss">
  .MainNavigation {
    display: inline-flex;
    justify-content: space-between;
    font-weight: 700;
  }

  .NagivationItem {
    text-decoration: none;
    color: inherit;

    &.nuxt-link-active {
      color: var(--callToActionColor, #00E2BC);
    }
  }

  .NagivationItem + .NagivationItem {
    margin-left: 90px;
  }
</style>
