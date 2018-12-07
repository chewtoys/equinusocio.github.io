<template>
  <nav class="TagsList">
    <slot></slot>
  </nav>
</template>

<style scoped>
@import '../../assets/media.pcss';

.TagsList {
  display: flex;
  flex-wrap: wrap;
}
</style>
