<template>
  <header class="MobileHeader" :aria-expanded="isExpanded">
    <div class="Panel">
      <ThemeSwitcher />
      <div class="NavContainer">
        <Navigation />
      </div>
      <Socials :person="person"></Socials>
    </div>
    <div class="Bar">
      <BackLink />
      <svg v-if="!isExpanded" @click="openClose" class="MenuIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <line fill="none" stroke-miterlimit="10" x1="2" y1="16" x2="30" y2="16"></line>
          <line fill="none" stroke-miterlimit="10" x1="2" y1="7" x2="30" y2="7"></line>
          <line fill="none" stroke-miterlimit="10" x1="2" y1="25" x2="30" y2="25"></line>
        </g>
      </svg>
      <svg v-if="isExpanded" @click="openClose" class="MenuIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <g stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-miterlimit="10" stroke-width="2">
          <path d="M27 5L5 27M27 27L5 5"/>
        </g>
      </svg>
    </div>
  </header>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import BackLink from '~/components/backlink.vue'
import Navigation from '~/components/navigation.vue'
import ThemeSwitcher from '~/components/theme-switcher.vue'
import Socials from '~/components/socials.vue'

export default {
  props: {
    person: Object
  },
  data () {
    return {
      isExpanded: false
    }
  },
  components: {
    BackLink,
    Navigation,
    Socials,
    ThemeSwitcher
  },
  methods: {
    openClose () {
      if (!this.isExpanded) {
        disableBodyScroll(document.querySelector('.Panel'))
        this.isExpanded = true
      } else {
        clearAllBodyScrollLocks()
        this.isExpanded = false
      }
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
  background-color: var(--backgroundColor, #FFF);
}

@supports (backdrop-filter: blur(10px)) {
  .MobileHeader {
    background-color: var(--vibrantBackground, rgba(255, 255, 255, 0.7));
    backdrop-filter: blur(10px);
  }
}

.Bar {
  display: grid;
  align-items: center;
  grid-template-columns: auto 32px;
  padding: 24px 32px;
  box-sizing: border-box;
}

@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .Bar {
    --safePaddingBottom: env(safe-area-inset-bottom);

    padding-bottom: calc(8px + var(--safePaddingBottom));
  }
}

.MenuIcon {
  cursor: pointer;
  pointer-events: visiblePainted;
  stroke: var(--foregroundColor, #000);
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
  grid-template-rows: 32px 1fr 100px;

  @nest .MobileHeader[aria-expanded] & {
    display: grid;
  }
}
</style>

