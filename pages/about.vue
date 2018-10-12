<template>
  <main role="main">
    <Header />
    <HeroBanner height="calc(100vh - 600px)">
      <h1 class="DisplayTitle">{{page.fields.name}}</h1>
    </HeroBanner>
    <StoryContainer>
      <hr>
      <vue-markdown>{{page.fields.content}}</vue-markdown>
    </StoryContainer>

    <Footer>Copyright © <Datetime :date="new Date()" :options="{ year: 'numeric' }" /> Mattia Astorino</Footer>
  </main>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'
import Header from '~/components/header.vue'
import StoryContainer from '~/components/article/story-container.vue'
import HeroBanner from '~/components/herobanner.vue'
import Footer from '~/components/footer.vue'
import Datetime from '~/components/article/datetime.vue'

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
    Header,
    HeroBanner,
    VueMarkdown,
    StoryContainer,
    Footer,
    Datetime
  }
}
</script>
