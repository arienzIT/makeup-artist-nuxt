<template>
  <section class="home-portfolio container mx-auto justify-center flex flex-col py-16 lg:py-20 px-6 lg:px-0 lg:max-w-7xl overflow-x-hidden">
    <section-title class="self-center" light text="Portfolio" />
    <h4 class="mt-4 text-center font-title text-3xl lg:text-5xl font-black text-brown-default">
      Alcuni dei miei trucchi creativi, fashion e sposa
    </h4>
    <div class="grid grid-cols-1 lg:grid-cols-2 mt-8 lg:mt-16 gap-8 lg:gap-24">
      <post-article
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :image="project.img"
        :image-alt="project.imgAlt"
        :href="project.modelProfileUrl"
        :slug="project.slug"
        image-ratio="square"
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
