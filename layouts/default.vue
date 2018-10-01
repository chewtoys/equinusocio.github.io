<template>
  <nuxt />
</template>

<script>
import { clearAllBodyScrollLocks } from 'body-scroll-lock'

export default {
  watch: {
    '$route' (to, from) {
      clearAllBodyScrollLocks()
    }
  }
}
</script>

<style lang="postcss">
  @import '../assets/global.pcss';
</style>
