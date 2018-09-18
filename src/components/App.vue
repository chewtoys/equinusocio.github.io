<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
    title: 'Mattia Astorino - Equinusocio',
    titleTemplate: '%s | Mattia Astorino'
  }
}
</script>

<style lang="postcss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2C3E50;
  margin-top: 60px;
}
</style>
