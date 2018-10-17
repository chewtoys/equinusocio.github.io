<template>
  <footer class="Footer">
    <Socials :person="person" class="SocialsFooter" />
    Copyright © <Datetime :date="new Date()" :options="{ year: 'numeric' }" /> Mattia Astorino
  </footer>
</template>

<script>
  import Socials from '~/components/socials.vue'

  export default {
    props: {
      person: {
        type: Object
      }
    },
    components: {
      Socials
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

.SocialsFooter {
  margin-bottom: 24px;
}
</style>

