<template>
  <div class="ThemeSwitcher" role="radiogroup">
    <svg v-on:click="setTheme(LightTheme)"
         v-on:keydown.enter="setTheme(LightTheme)"
         tabindex="0"
         role="radio"
         :aria-checked="activeTheme('light-theme')"
         data-theme-id="light-theme"
         aria-label="Switch to day mode"
         class="Icon"
         width="18"
         height="18"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">

          <path d="M1 9h.727M3.327 3.327l.51.51M9 1v.727M14.673 3.327l-.51.51M17 9h-.727M14.673 14.673l-.51-.51M9 17v-.727M3.327 14.673l.51-.51"
                stroke-width="1.455"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round" />
          <path d="M9 13.364a4.364 4.364 0 1 0 0-8.727 4.364 4.364 0 0 0 0 8.727z" />
    </svg>

    <svg v-on:click="setTheme(DarkTheme)"
         v-on:keydown.enter="setTheme(DarkTheme)"
         tabindex="0"
         role="radio"
         :aria-checked="activeTheme('dark-theme')"
         aria-label="Switch to night mode"
         data-theme-id="dark-theme"
         class="Icon"
         width="14"
         height="14"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">

        <path stroke="none" d="M13.2 8.01a6.409 6.409 0 0 1-1.554.194c-3.235 0-5.823-2.577-5.823-5.797 0-.515.065-1.03.194-1.546.065-.193 0-.45-.194-.644C5.63.024 5.435-.04 5.176.024 2.136.926 0 3.76 0 6.915 0 10.845 3.17 14 7.117 14c3.17 0 6.018-2.125 6.859-5.217.064-.193 0-.45-.194-.644-.13-.129-.389-.193-.583-.129z" />
    </svg>
  </div>
</template>

<script>
  import LightTheme from '../lib/light-theme.js'
  import DarkTheme from '../lib/dark-theme.js'

  export default {
    data () {
      return {
        LightTheme,
        DarkTheme,
        currentTheme: {
          type: String,
          default: 'light-theme'
        }
      }
    },
    mounted () {
      let currentTheme = localStorage.getItem('themeName')
      let currentThemeTokens = localStorage.getItem('themeTokens')

      if (currentTheme) {
        this.currentTheme = currentTheme
        this.getThemeFromLocalStorage(JSON.parse(currentThemeTokens))
        this.setRootTheme(currentTheme)
      } else {
        this.currentTheme = 'light-theme'
        this.setRootTheme('light-theme')
        this.getThemeFromLocalStorage(LightTheme.tokens)
      }
    },
    methods: {
      activeTheme (theme) {
        return theme === this.currentTheme ? 'true' : 'false'
      },
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
      },
      setTheme (theme) {
        localStorage.setItem('themeName', theme.name)
        process.browser ? document.documentElement.setAttribute('data-theme', theme.name) : null

        this.currentTheme = theme.name

        for (let key of Object.keys(theme.tokens)) {
          const property = key
          const value = theme.tokens[key]

          if (process.browser) {
            document.documentElement.style.setProperty(`--${property}`, value)
            localStorage.setItem('themeTokens', JSON.stringify(theme.tokens))
          }
        }
      }
    }
  }
</script>

<style scoped>
  .ThemeSwitcher {
    display: flex;
    align-items: center;
  }

  .Icon {
    cursor: pointer;
    pointer-events: visiblePainted;
    fill: currentColor;
    stroke: currentColor;
    transition: all 200ms ease-out;

    &:active {
      transform: scale(1.2);
    }

    @nest [data-theme='light-theme'] &[data-theme-id='light-theme'] {
      fill: var(--callToActionColor, #00E2BC);
      stroke: var(--callToActionColor, #00E2BC);
    }
    @nest [data-theme='dark-theme'] &[data-theme-id='dark-theme'] {
      fill: var(--callToActionColor, #00E2BC);
      stroke: var(--callToActionColor, #00E2BC);
    }
  }

  .Icon + .Icon {
    margin-left: 24px;
  }
</style>
