<template>
  <Media :query="{maxWidth: 768}" @media-leave="unlockScroll">
    <div class="MobileToolbar" :aria-expanded="isExpanded">
      <div class="Panel" ref="panel">
        <ThemeSwitcher class="MobileThemeSwitcher" />
        <Navigation direction="column" />
      </div>

      <div class="Bar">
        <BackLink />
        <button class="MenuButton" v-if="!isExpanded" @click="openMenu">
          Menu
          <svg
            class="MenuIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <line fill="none" stroke-miterlimit="10" x1="2" y1="16" x2="30" y2="16" />
              <line fill="none" stroke-miterlimit="10" x1="2" y1="7" x2="30" y2="7" />
              <line fill="none" stroke-miterlimit="10" x1="2" y1="25" x2="30" y2="25" />
            </g>
          </svg>
        </button>
        <button class="MenuButton" v-if="isExpanded" @click="closeMenu">
          <svg
            role="button"
            aria-label="Close menu"
            class="MenuIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <g
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-miterlimit="10"
              stroke-width="2"
            >
              <path d="M27 5L5 27M27 27L5 5" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </Media>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export default {
  data() {
    return {
      isExpanded: false
    }
  },
  components: {
    BackLink: () => import('~/components/backlink.vue'),
    ThemeSwitcher: () => import('~/components/theme-switcher.vue'),
    Navigation: () => import('~/components/navigation.vue'),
    Media: () => import('vue-media')
  },
  methods: {
    openMenu() {
      disableBodyScroll(this.$refs.panel)
      this.isExpanded = true
    },
    closeMenu() {
      clearAllBodyScrollLocks()
      this.isExpanded = false
    },
    unlockScroll() {
      clearAllBodyScrollLocks()
      this.isExpanded = false
    }
  }
}
</script>


<style scoped lang="postcss">
.MobileToolbar {
  display: grid;
  grid-template-columns: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #000;
  transition: all 300ms;

  &[aria-expanded] {
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.6);
  }
}

@supports (backdrop-filter: blur(10px)) {
  .MobileToolbar {
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
  }
}

.Bar {
  display: grid;
  grid-template-columns: auto max-content;
  padding: 24px;
  box-sizing: border-box;
  align-items: center;
  color: #d2d2d2;
}

@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .Bar {
    --safePaddingBottom: env(safe-area-inset-bottom);

    padding-bottom: calc(16px + var(--safePaddingBottom));
  }
}

.MenuButton {
  border: 0;
  background: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding: 0;
  font-weight: bold;
}

.MenuIcon {
  cursor: pointer;
  pointer-events: visiblePainted;
  stroke: #d2d2d2;
  margin-left: 16px;
}

.MenuTrigger {
  height: 0;
  width: 0;
  opacity: 0;
  pointer-events: none;
}

.Panel {
  display: none;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  color: #d2d2d2;

  @nest .MobileToolbar[aria-expanded] & {
    display: grid;
  }
}

.MobileThemeSwitcher {
  margin: 40px auto 60px auto;
  box-sizing: border-box;
}
</style>

