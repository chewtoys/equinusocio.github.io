<template>
  <nav class="TagsList">
    <slot></slot>
  </nav>
</template>

<style lang="postcss" scoped>
@import '../../assets/media.pcss';

.TagsList {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;

  & > .Tag {
    margin-top: 8px;
  }
}

@media (--small) {
  .Taglist {
    flex-wrap: nowrap;
  }
}
</style>
