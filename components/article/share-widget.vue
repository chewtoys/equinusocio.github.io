<template>
  <ul>
    <li><a class="icon" rel="noopener" :href="`http://www.facebook.com/sharer.php?u=${currentUrl}`" target="_blank" aria-label="Share on Facebook" onclick="window.open(this.href,'',' scrollbars=yes,menubar=no,width=555,height=600,resizable=yes,toolbar=no,location=no,status=no'); return false;">Facebook</a></li>
  </ul>
</template>

<script>
  export default {
    computed: {
      currentUrl: function () {
        return process.env.baseUrl + this.$route.fullPath
      }
    }
  }
</script>
