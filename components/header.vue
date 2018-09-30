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
    showBack: { type: Boolean, value: false }
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

