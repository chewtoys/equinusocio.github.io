<template>
  <nav class="TagsList">
    <slot></slot>
  </nav>
</template>

<style lang="postcss" scoped>
@import '../../assets/media.pcss';

.TagsList {
  display: grid;
  grid-auto-columns: minmax(auto, max-content);
  grid-auto-flow: column;
}
</style>
