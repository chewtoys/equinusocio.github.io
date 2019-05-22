<template>
  <main>
    <HeroBanner height="calc(100vh - 200px)">
      <h1 class="DisplayTitle">Welcome to my personal laboratory</h1>
    </HeroBanner>

    <section class="ProjectList">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.fields.title"
        :url="project.fields.url"
        :url-target="project.fields.urlTarget"
        :image="project.fields.image.fields.file.url"
        :title="project.fields.title"
        :counter="currentIndex(index)">
      </ProjectCard>
    </section>

    <Footer />
  </main>
</template>

<script>
import createClient from '~/plugins/contentful.js'

const client = createClient()

export default {
  name: 'projects',
  async asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_PROJECT_TYPE_ID
    }).then(entries => {
      return {
        projects: entries.items
      }
    })
    .catch(console.error)
  },
  methods: {
    currentIndex: function (index) {
      return String('0' + (index + 1)).slice(-2)
    }
  },
  components: {
    HeroBanner: () => import('~/components/herobanner.vue'),
    ProjectCard: () => import('~/components/project-card.vue'),
    Footer: () => import('~/components/footer.vue')
  }
}
</script>


<style scoped lang="postcss">
.ProjectList {
  display: grid;
  max-width: 900px;
  padding: 0 32px;
  margin: auto;
  grid-gap: 48px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}
</style>
