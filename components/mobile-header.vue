<template>
  <Media :query="{maxWidth: 768}" @media-leave="unlockScroll">
    <header class="MobileHeader" :aria-expanded="isExpanded">

      <div class="Panel">
        <ThemeSwitcher class="MobileThemeSwitcher" />
        <Navigation direction="column" />
      </div>

      <div class="Bar">
        <BackLink />
        <svg v-if="!isExpanded" @click="openMenu" class="MenuIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <line fill="none" stroke-miterlimit="10" x1="2" y1="16" x2="30" y2="16"></line>
            <line fill="none" stroke-miterlimit="10" x1="2" y1="7" x2="30" y2="7"></line>
            <line fill="none" stroke-miterlimit="10" x1="2" y1="25" x2="30" y2="25"></line>
          </g>
        </svg>
        <svg v-if="isExpanded" @click="closeMenu" class="MenuIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <g stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-miterlimit="10" stroke-width="2">
            <path d="M27 5L5 27M27 27L5 5"/>
          </g>
        </svg>
      </div>

    </header>
  </Media>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import BackLink from '~/components/backlink.vue'
import ThemeSwitcher from '~/components/theme-switcher.vue'
import Navigation from '~/components/navigation.vue'
import Media from 'vue-media'

export default {
  data () {
    return {
      isExpanded: false
    }
  },
  components: {
    BackLink,
    Media,
    ThemeSwitcher,
    Navigation
  },
  methods: {
    openMenu () {
      disableBodyScroll(document.querySelector('.Panel'))
      this.isExpanded = true
    },
    closeMenu () {
      clearAllBodyScrollLocks()
      this.isExpanded = false
    },
    unlockScroll () {
      clearAllBodyScrollLocks()
      this.isExpanded = false
    }
  }
}
</script>


<style lang="postcss" scoped>
.MobileHeader {
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
  .MobileHeader {
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
  }
}

.Bar {
  display: grid;
  grid-template-columns: auto 32px;
  padding: 24px 32px;
  box-sizing: border-box;
  align-items: center;
  color: #D2D2D2;
}

@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .Bar {
    --safePaddingBottom: env(safe-area-inset-bottom);

    padding-bottom: calc(24px + var(--safePaddingBottom));
  }
}

.MenuIcon {
  cursor: pointer;
  pointer-events: visiblePainted;
  stroke: #D2D2D2;
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
  color: #D2D2D2;

  @nest .MobileHeader[aria-expanded] & {
    display: grid;
  }
}

.MobileThemeSwitcher {
  margin: 40px auto 60px auto;
  box-sizing: border-box;
}
</style>

