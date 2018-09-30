<template>
  <header class="MobileHeader">
    <BackLink />
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g class="nc-icon-wrapper" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="#111111" stroke="#111111">
        <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="2" y1="16" x2="30" y2="16"></line>
        <line fill="none" stroke="#111111" stroke-miterlimit="10" x1="2" y1="7" x2="30" y2="7"></line>
        <line fill="none" stroke="#111111" stroke-miterlimit="10" x1="2" y1="25" x2="30" y2="25"></line>
      </g>
    </svg>
  </header>
</template>

<script>
import BackLink from '~/components/backlink.vue'

export default {
  components: {
    BackLink
  }
}
</script>


<style lang="postcss" scoped>
.MobileHeader {
  display: grid;
  align-items: center;
  grid-template-columns: auto 32px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--backgroundColor, #FFF);
  z-index: 1;
  padding: 24px 32px;
}

@supports (backdrop-filter: blur(10px)) {
  .MobileHeader {
    background-color: var(--vibrantBackground, rgba(255, 255, 255, 0.7));
    backdrop-filter: blur(10px);
  }
}
</style>

