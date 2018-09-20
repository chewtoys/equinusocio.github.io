<template>
  <nav role="navigation">
    <template v-for="route in this.$router.options.routes">
      <nuxt-link
        v-if="!/\/.*?\/.*/.test(route.path) && route.name !== 'index'"
        :key="route.name"
        :to="{ name: route.name }">{{ route.name }}
      </nuxt-link>
    </template>
  </nav>
</template>

<style scoped lang="postcss">
/* PLACEHOLDER */
</style>
