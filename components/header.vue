<template>
  <header class="Header">

    <MobileToolbar />

    <Media :query="{minWidth: 768}">
      <BackLink />
    </Media>

    <Media :query="{minWidth: 768}">
      <div class="NavContainer">
        <Navigation />
      </div>
    </Media>

    <Media :query="{minWidth: 768}">
      <div class="ThemeSwitcherContainer">
        <ThemeSwitcher />
      </div>
    </Media>

  </header>
</template>

<script>
export default {
  props: {
    showBack: { type: Boolean, default: false }
  },
  components: {
    Navigation: () => import('~/components/navigation.vue'),
    ThemeSwitcher: () => import('~/components/theme-switcher.vue'),
    MobileToolbar: () => import('~/components/mobile-toolbar.vue'),
    BackLink: () => import('~/components/backlink.vue'),
    Media: () => import('vue-media')
  }
}
</script>

<style scoped lang="postcss">
@import '../assets/media.pcss';

.Header {
  display: grid;
  padding: 40px 48px;
  grid-template-columns: auto;
  align-items: center;
}

@media (--small) {
  .Header {
    grid-template-columns: 140px auto minmax(auto, 140px);
  }
}

.NavContainer {
  display: flex;
  align-items: center;
  place-content: center;
}

.ThemeSwitcherContainer {
  display: inline-flex;
  justify-content: flex-end;
}
</style>

