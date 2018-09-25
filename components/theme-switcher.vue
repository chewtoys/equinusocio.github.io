<template>
  <div class="ThemeSwitcher">
    <svg v-on:click="setLightTheme"
         aria-label="Set the light theme"
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
      <path d="M9 13.364a4.364 4.364 0 1 0 0-8.727 4.364 4.364 0 0 0 0 8.727z" /></svg>


    <svg v-on:click="setDarkTheme"
         aria-label="Set the dark theme"
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
  export default {
    methods: {
      setLightTheme () {
        document.querySelector('html').classList.remove('DarkTheme')
      },
      setDarkTheme () {
        document.querySelector('html').classList.add('DarkTheme')
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .ThemeSwitcher {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .Icon {
    cursor: pointer;
    pointer-events: visiblePainted;
    fill: var(--foregroundColor, #000);
    stroke: var(--foregroundColor, #000);
  }

  .Icon + .Icon {
    margin-left: 24px;
  }
</style>
