<template>
  <section
    class="home-portfolio bg-page-bg"
  >
    <div class="justify-center flex flex-col py-16 lg:py-20 px-6 xl:px-0 lg:max-w-7xl container mx-auto">
      <section-title class="self-center" text="Articoli"/>
      <h3 class="mt-4 text-center font-title text-3xl lg:text-5xl font-black text-brown-default">
        Scopri tutte le novità dal mondo make-up
      </h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-8 lg:mt-16 gap-4">
        <post-article
          v-for="article in articles"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :href="`/blog/${article.slug}`"
          :image="article.image"
          :image-alt="article.imageAlt"
          :slug="article.slug"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeBlog',
  data () {
    return {
      articles: []
    }
  },

  async fetch () {
    this.articles = await this.$content('articles')
      .where({ isPublished: true })
      .limit(5)
      .sortBy('createdAt', 'desc')
      .fetch()
  }
}
</script>
