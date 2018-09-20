<template>
  <nav role="navigation">
    <nuxt-link
      v-if="!/\/.*?\/.*/.test(route.path)"
      v-for="route in this.$router.options.routes"
      :key="route.name"
      :to="{ name: route.name }">{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}
    </nuxt-link>
  </nav>
</template>

<style>
</style>
