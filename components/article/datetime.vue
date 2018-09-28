<template>
  <time class="DateTime" :datetime="( new Date(date) )">
    {{ FormatDate(date) }}
  </time>
</template>

<script>
import FormatDate from '~/plugins/formatDate'

export default {
  props: {
    date: {
      type: Date,
      required: true
    }
  },
  methods: {
    FormatDate
  }
}
</script>


<style lang="postcss" scoped>
.DateTime {
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--grayColor, #969FA9);
  margin-right: 16px;
  letter-spacing: 0.11em;
}
</style>

