<template>
  <div>
    <Header/>
    <transition name="fade">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import { clearAllBodyScrollLocks } from 'body-scroll-lock'
import Header from '~/components/header.vue'

export default {
  components: {
    Header
  },
  watch: {
    '$route' (to, from) {
      clearAllBodyScrollLocks()
    }
  }
}
</script>

<style>
  @import '../assets/global.pcss';
</style>
