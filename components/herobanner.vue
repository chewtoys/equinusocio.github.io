<template>
  <section class="HeroBanner">
    <slot></slot>
  </section>
</template>

<script>

</script>

<style lang="postcss" scoped>
  .HeroBanner {
    display: flex;
    padding: 0 32px;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    height: calc(100vh - 200px);
    min-height: 400px;
    margin-bottom: 40px;
  }
</style>
