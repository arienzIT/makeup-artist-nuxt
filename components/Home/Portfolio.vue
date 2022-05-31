<template>
  <section class="home-portfolio container mx-auto justify-center flex flex-col py-16 lg:py-20 px-6 lg:px-0 lg:max-w-7xl overflow-x-hidden">
    <section-title class="self-center" light text="Portfolio" />
    <h4 class="mt-4 text-center font-title text-3xl lg:text-5xl text-brown-default">
      Alcuni dei miei trucchi creativi, fashion e sposa
    </h4>
    <div class="flex flex-col lg:flex-row mt-16 lg:mt-28 gap-20 lg:gap-56">
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
