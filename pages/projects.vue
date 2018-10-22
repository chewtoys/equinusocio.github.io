<template>
  <main role="main">
    <Header />
    <HeroBanner height="calc(100vh - 200px)">
      <h1 class="DisplayTitle">My personal laboratory</h1>
    </HeroBanner>

    <section class="ProjectList">
      <ProjectCard
        url="/projects/material-theme"
        image="/prjscovers/vscmt.svg"
        title="Material Theme for Visual Studio Code"
        counter="01">
      </ProjectCard>

      <ProjectCard
        url="/projects/gaming-photobook"
        image="/prjscovers/gamingpb.svg"
        title="Gaming photobook from my PS4"
        counter="02">
      </ProjectCard>

      <ProjectCard
        image="/prjscovers/blob.svg"
        title="Animated CSS blob element"
        counter="03">
      </ProjectCard>
    </section>

    <Footer />
  </main>
</template>

<script>
import Header from '~/components/header.vue'
import HeroBanner from '~/components/herobanner.vue'
import ProjectCard from '~/components/project-card.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Header,
    HeroBanner,
    ProjectCard,
    Footer
  }
}
</script>


<style lang="postcss" scoped>
.ProjectList {
  display: grid;
  max-width: 900px;
  padding: 0 32px;
  margin: auto;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(280px, auto));
}
</style>
