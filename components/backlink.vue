<template>
  <div class="BackLink">
    <nuxt-link v-if="this.$route.name !== 'index'" :to="{ name: 'index' }">
      <svg class="BackArrow" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.667h8a4 4 0 0 1 4 4v6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.333 8L2 4.667l3.333-3.334" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Home
    </nuxt-link>
  </div>
</template>

<style lang="postcss" scoped>
.BackLink {
  color: var(--grayColor, rgba(119, 133, 149, 0.5));
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
</style>
