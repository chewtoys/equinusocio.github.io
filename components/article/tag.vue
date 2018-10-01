<template>
  <nuxt-link
    class="Tag"
    :key="tag"
    :to="{ name: 'tags-tag', params: { tag: tag }}">
    #<slot></slot>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      tag: String
    }
  }
</script>

<style lang="postcss" scoped>
.Tag {
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  padding: 7px 10px;
  line-height: 1;
  font-size: 12px;
  color: var(--callToActionColor, #00E2BC);
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  user-select: none;

  &::before {
    content: '';
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--callToActionColor, #00E2BC);
    opacity: 0.13;
  }

  &:hover::before {
    opacity: 0.2;
  }
}

.Tag + .Tag {
  margin-left: 8px;
}
</style>
