<template>
  <header class="Header">
    <BackLink />
    <div class="NavContainer">
      <Navigation />
    </div>
    <ThemeSwitcher />
  </header>
</template>

<script>
import Navigation from '~/components/navigation.vue'
import ThemeSwitcher from '~/components/theme-switcher.vue'
import BackLink from '~/components/backlink.vue'

export default {
  props: {
    showBack: { type: Boolean, default: false }
  },
  components: {
    Navigation,
    BackLink,
    ThemeSwitcher
  }
}
</script>

<style scoped lang="postcss">
@import '../assets/media.pcss';

.Header {
  display: grid;
  grid-template-areas: '- back navigation theme -';
  padding: 24px 32px;
  grid-template-columns: auto;
  text-align: center;
}

@supports (padding-left: env(safe-area-inset-left)) {
  .Header {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
}

@media (--small) {
  .Header {
    grid-template-columns: 140px auto 140px;
    text-align: left;
  }
}

@media (--medium) {
  .Header {
    padding: 40px 48px;
  }
}

.NavContainer {
  display: flex;
  align-items: center;
  place-content: center;
}
</style>

