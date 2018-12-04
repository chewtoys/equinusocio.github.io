<template>
  <footer class="Footer">
    <span>Copyright © <Datetime :date="new Date()" :options="{ year: 'numeric' }" /> Mattia Astorino</span>
    <Socials class="Socials" />
  </footer>
</template>

<script>
  export default {
    components: {
      Socials: () => import('~/components/socials.vue'),
      Datetime: () => import('~/components/article/datetime.vue')
    }
  }
</script>

<style lang="postcss" scoped>
@import '../assets/media.pcss';

.Footer {
  font-size: 14px;
  margin: 0 auto;
  text-align: center;
  color: var(--grayColor, rgba(119, 133, 149, 0.5));
  margin-top: 216px;
  margin-bottom: 126px;
  display: flex;
  flex-direction: column-reverse;
}

@media (--small) {
  .Footer {
    flex-direction: unset;
    margin-bottom: 16px;
    padding: 0 32px;
    justify-content: space-between;
  }
}

.Socials {
  margin-bottom: 16px;
}

@media (--medium) {
  .Socials {
    margin-bottom: 0;
  }
}
</style>

