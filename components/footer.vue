<template>
  <footer class="Footer">
    <small><slot></slot></small>
  </footer>
</template>

<style lang="postcss" scoped>
@import '../assets/media.pcss';

.Footer {
  font-size: 14px;
  margin: 0 auto;
  text-align: center;
  color: var(--foregroundColor, #000);
  margin-top: 216px;
  margin-bottom: 100px;
}

@media (--medium) {
  .Footer {
    margin-bottom: 16px;
  }
}
</style>

