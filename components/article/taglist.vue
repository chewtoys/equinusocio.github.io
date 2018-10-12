<template>
  <nav class="TagsList">
    <slot></slot>
  </nav>
</template>

<style lang="postcss" scoped>
.TagsList {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;

  & > .Tag {
    margin-top: 8px;
  }
}
</style>
