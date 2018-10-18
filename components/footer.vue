<template>
  <footer class="Footer">
    <Socials />
    Copyright © <Datetime :date="new Date()" :options="{ year: 'numeric' }" /> Mattia Astorino
  </footer>
</template>

<script>
  import Socials from '~/components/socials.vue'
  import Datetime from '~/components/article/datetime.vue'

  export default {
    components: {
      Socials,
      Datetime
    }
  }
</script>

<style lang="postcss" scoped>
@import '../assets/media.pcss';

.Footer {
  font-size: 14px;
  margin: 0 auto;
  text-align: center;
  color: var(--foregroundColor, #000);
  margin-top: 216px;
  margin-bottom: 126px;
}

@media (--medium) {
  .Footer {
    margin-bottom: 16px;
  }
}
</style>

