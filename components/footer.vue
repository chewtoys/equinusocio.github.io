<template>
  <footer class="Footer">
    <small><slot></slot></small>
  </footer>
</template>

<style lang="postcss" scoped>
.Footer {
  font-size: 14px;
  margin: 0 auto;
  text-align: center;
  color: var(--grayColor, #969FA9);
  margin-top: 216px;
  margin-bottom: 16px;
}
</style>

