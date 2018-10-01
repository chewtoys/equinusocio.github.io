<template>
  <section class="HeroBanner" :style="`height: ${height}`">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    props: {
      height: {
        type: String,
        default: 'calc(100vh - 200px)'
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .HeroBanner {
    display: flex;
    padding: 0 32px;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    min-height: 400px;
    margin-bottom: 40px;
  }
</style>
