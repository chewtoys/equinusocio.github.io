<template>
  <nuxt/>
</template>

<style lang="postcss">
  @import-normalize;

  :root {
    /* Semantic Colors */
    --backgroundColor: #FFF;
    --foregroundColor: #000;
    --callToActionColor: #00E2BC;
    --activeColor: #D480AA;

    /* Unit Colors */
    --grayColor: #969FA9;
    --lightGrayColor: #F3F6F9;
  }

  :root.DarkTheme {
    /* Semantic Colors */
    --backgroundColor: #000;
    --foregroundColor: #FFF;
  }

  html {
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    background: var(--backgroundColor, #FFF);
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    color: var(--foregroundColor, #000);
    transition-property: color;
    transition-property: background;
    transition-duration: 200ms;
    transition-timing-function: linear;
  }

  img {
    display: block;
    width: 100%;
  }

</style>
