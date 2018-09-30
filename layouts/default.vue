<template>
  <main role="main">
    <Media :query="{maxWidth: 768}">
      <MobileHeader />
    </Media>
    <Media :query="{minWidth: 768}">
      <Header />
    </Media>
    <nuxt/>
    <Footer>Copyright © <Datetime :date="new Date()" :options="{ year: 'numeric' }" /> Mattia Astorino</Footer>
  </main>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import MobileHeader from '~/components/mobile-header.vue'
import Datetime from '~/components/article/datetime.vue'
import Media from 'vue-media'

export default {
  components: {
    Media,
    MobileHeader,
    Header,
    Footer,
    Datetime
  }
}
</script>


<style lang="postcss">
  @import '../assets/global.pcss';
</style>
