<template>
  <header class="HeroBanner" :style="`height: ${height}`" v-scroll-reveal="{ duration: 1500 }">
    <slot></slot>
  </header>
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
    visibility: hidden;
  }

  @nest .sr & {
    visibility: visible;
  }
</style>
