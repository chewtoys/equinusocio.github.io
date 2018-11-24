<template>
  <main>
    <HeroBanner height="calc(100vh - 600px)">
      <h1 class="DisplayTitle">{{page.fields.name}}</h1>
    </HeroBanner>
    <StoryContainer>
      <vue-markdown>{{page.fields.content}}</vue-markdown>
    </StoryContainer>

    <Footer />
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'
import StoryContainer from '~/components/article/story-container.vue'
import HeroBanner from '~/components/herobanner.vue'
import Footer from '~/components/footer.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_PAGE_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        page: entries.items[0]
      }
    })
    .catch(console.error)
  },
  components: {
    HeroBanner,
    VueMarkdown,
    StoryContainer,
    Footer
  }
}
</script>
