<template>
  <nuxt />
</template>

<script>
import { clearAllBodyScrollLocks } from 'body-scroll-lock'

export default {
  watch: {
    '$route' (to, from) {
      clearAllBodyScrollLocks()
    }
  },
  methods: {
    getThemeFromLocalStorage (theme) {
      for (let key of Object.keys(theme)) {
        const value = theme[key]

        if (process.browser) {
          document.documentElement.style.setProperty(`--${key}`, value)
        }
      }
    },
    setRootTheme (themeName) {
      process.browser ? document.documentElement.setAttribute('data-theme', themeName) : null
    }
  },
  mounted () {
    let currentTheme = localStorage.getItem('themeName')
    let currentThemeTokens = localStorage.getItem('themeTokens')

    if (currentTheme) {
      this.getThemeFromLocalStorage(JSON.parse(currentThemeTokens))
      this.setRootTheme(currentTheme)
    } else {
      this.setRootTheme('light-theme')
    }
  }
}
</script>

<style lang="postcss">
  @import '../assets/global.pcss';
</style>
