<template>
  <nav class="TagsList">
    <slot></slot>
  </nav>
</template>

<style scoped lang="postcss">
@import '../../assets/media.pcss';

.TagsList {
  display: flex;
  flex-wrap: wrap;
}
</style>
