<template>
  <header class="Header">
    <MobileHeader />

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
import Navigation from '~/components/navigation.vue'
import ThemeSwitcher from '~/components/theme-switcher.vue'
import MobileHeader from '~/components/mobile-header.vue'
import BackLink from '~/components/backlink.vue'
import Media from 'vue-media'

export default {
  props: {
    showBack: { type: Boolean, default: false }
  },
  components: {
    Navigation,
    MobileHeader,
    BackLink,
    Media,
    ThemeSwitcher
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
    grid-template-columns: 140px auto 140px;
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

