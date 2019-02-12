<template>
  <time class="DateTime" :datetime="( new Date(date) )">
    {{ FormatDate(date, options) }}
  </time>
</template>

<script>
import FormatDate from '~/plugins/formatDate'

export default {
  props: {
    date: {
      type: Date,
      required: true
    },
    options: Object
  },
  methods: {
    FormatDate
  }
}
</script>


<style scoped lang="postcss">
.DateTime {
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: inherit;
  letter-spacing: 0.11em;
}
</style>

