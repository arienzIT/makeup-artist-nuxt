<template>
  <section class="home-portfolio container mx-auto justify-center flex flex-col py-32 px-4 lg:px-0">
    <section-title class="self-center" light text="Portfolio" />
    <h4 class="mt-4 text-center font-title text-5xl text-brown-default">
      Alcuni dei miei trucchi creativi, fashion e sposa
    </h4>
    <div class="flex flex-col lg:flex-row mt-12 mt-28 projects">
      <project-card
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :frame-position="index % 2 === 0 ? 'right' : 'left'"
        :class="{'lg:mt-20': index % 2 !== 0}"
      />
    </div>
    <!-- @TODO uncomment once portfolio page implemented
    <div class="home-portfolio__cta mt-12 mx-auto">
      <squared-link text="Sfogliali tutti" href="/" />
    </div>
    -->
  </section>
</template>

<script>
export default {
  name: 'HomePortfolio',
  data: () => ({
    projects: [],
    timeline: null
  }),
  async fetch () {
    this.projects = await this.$content('projects').limit(2).fetch()
  }
}
</script>

<style lang="scss">
.projects {
  gap: 280px;
}
</style>
