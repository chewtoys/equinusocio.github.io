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
        default: '100vh'
      }
    }
  }
</script>

<style scoped>
  .HeroBanner {
    display: flex;
    padding: 0 32px;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    min-height: 500px;
  }
</style>
