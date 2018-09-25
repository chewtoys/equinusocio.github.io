<template>
  <nav role="navigation" class="MainNavigation">
    <template v-if="this.$router.options.routes">
      <nuxt-link class="NagivationItem" :key="blog" :to="{ name: 'blog' }">BLOG</nuxt-link>
      <nuxt-link class="NagivationItem" :key="project" :to="{ name: 'projects' }">PROJECTS</nuxt-link>
      <nuxt-link class="NagivationItem" :key="about" :to="{ name: 'about' }">ABOUT</nuxt-link>
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
    color: var(--foregroundColor, #000);
    text-decoration: none;
  }

  .NagivationItem + .NagivationItem {
    margin-left: 90px;
  }
</style>
