<template>
  <header class="Header">
    <div class="BackLink">
      <nuxt-link v-if="this.$route.name !== 'index'" :to="{ name: 'index' }">
        <svg class="BackArrow" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.667h8a4 4 0 0 1 4 4v6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.333 8L2 4.667l3.333-3.334" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Back to home
      </nuxt-link>
    </div>
    <div class="NavContainer">
      <Navigation class="Navigation" />
    </div>
    <ThemeSwitcher />
  </header>
</template>

<script>
import Navigation from '~/components/navigation.vue'
import ThemeSwitcher from '~/components/theme-switcher.vue'

export default {
  props: {
    showBack: { type: Boolean, value: false }
  },
  components: {
    Navigation,
    ThemeSwitcher
  }
}
</script>

<style scoped lang="postcss">
@import '../assets/media.pcss';

.Header {
  display: grid;
  grid-template-areas: '- back navigation theme -';
  grid-template-columns: 140px auto 140px;
  padding: 24px 32px;
}

@media (--medium) {
  .Header {
    padding: 40px 48px;
  }
}

.BackLink {
  color: #969FA9;
  font-weight: 700;
  pointer-events: visible;

  & a {
    display: inline-flex;
    text-decoration: inherit;
    color: inherit;
  }
}

.BackArrow {
  width: 16px;
  display: block;
  margin-right: 8px;


  & path {
    stroke: var(--callToActionColor, #00E2BC);
  }
}

.NavContainer {
  display: flex;
  align-items: center;
  place-content: center;
}
</style>

