<template>
  <ul>
    <li><a class="icon" rel="noopener" :href="`http://www.facebook.com/sharer.php?u=${postUrl}`" target="_blank" aria-label="Share on Facebook" onclick="window.open(this.href,'',' scrollbars=yes,menubar=no,width=555,height=600,resizable=yes,toolbar=no,location=no,status=no'); return false;">Facebook</a></li>
  </ul>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        default: {},
        required: true
      }
    },
    computed: {
      postUrl: function () {
        return process.env.baseUrl + this.$route.fullPath
      }
    }
  }
</script>
