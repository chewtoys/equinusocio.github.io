<template>
  <nav class="ShareWidget">
      <a
      class="ShareWidget-Item"
      rel="noopener"
      :href="`http://www.facebook.com/sharer.php?u=${currentUrl}`"
      target="_blank"
      aria-label="Share on Facebook"
      onclick="window.open(this.href,'',' scrollbars=yes,menubar=no,width=555,height=600,resizable=yes,toolbar=no,location=no,status=no'); return false;">

        <svg xmlns="http://www.w3.org/2000/svg" class="SocialIcon" width="24" height="24">
          <path d="M22 0H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h11v-9h-3v-4h3V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763V11h4.44l-1 4h-3.44v9H22a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" stroke="none"/>
        </svg>
      </a>

      <a
      class="ShareWidget-Item"
        rel="noopener"
        :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=''${postTitle}'' by Mattia Astorino (@equinusocio) \n`"
        target="_blank"
        aria-label="Share on Twitter"
        onclick="window.open(this.href,'',' scrollbars=yes,menubar=no,width=555,height=300,resizable=yes,toolbar=no,location=no,status=no'); return false;">
          <svg width="24" height="24" class="SocialIcon" stroke="none">
            <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.2-.2-7.8-2.2-10.2-5.2-.5.8-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z" stroke="none"/>
          </svg>
      </a>

      <a
      class="ShareWidget-Item"
        rel="noopener"
        :href="`http://www.linkedin.com/shareArticle?url=${currentUrl}&title=${postTitle}`"
        onclick="window.open(this.href,'',' scrollbars=yes,menubar=no,width=555,height=600,resizable=yes,toolbar=no,location=no,status=no'); return false;">
          <svg width="24" height="24" class="SocialIcon">
            <path d="M23 0H1C.4 0 0 .4 0 1v22c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM7.1 20.5H3.6V9h3.6v11.5zM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1zm15.2 13.1h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2z" stroke="none" />
          </svg>
      </a>
  </nav>
</template>

<script>
  export default {
    props: {
      postTitle: {
        type: String,
        required: true,
        default: ''
      }
    },
    computed: {
      currentUrl: function () {
        return process.env.baseUrl + this.$route.fullPath
      }
    }
  }
</script>

<style scoped lang="postcss">
.ShareWidget {
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(auto, 32px));
  grid-auto-flow: column;
}

.ShareWidget-Item {
  display: block;
}

.SocialIcon {
  fill: var(--callToActionColor, #00E2BC);
  stroke: var(--callToActionColor, #00E2BC);
}
</style>

