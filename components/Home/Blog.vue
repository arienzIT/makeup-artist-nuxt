<template>
  <section class="home-portfolio container mx-auto justify-center flex flex-col py-32 px-4 lg:px-0">
    <section-title class="self-center" light text="Articoli" />
    <h4 class="mt-4 text-center font-title text-5xl text-brown-default">
      Scopri tutte le novità
    </h4>
    <div class="grid grid-cols-3 mt-16 gap-8">
      <article v-for="article in articles" :key="article.title">
        <div class="relative">
          <img :src="require('~/assets/images/blog/' + article.image)" class="h-56 object-cover w-full object-center relative">
        </div>
        <h2 class="mt-5 font-title text-2xl text-brown-dark font-bold hover:underline">
          <nuxt-link :to="{name: 'blog-slug', params: {slug: article.slug} }">
            {{ article.title }}
          </nuxt-link>
        </h2>
        <h3 class="mt-3 text-lg text-brown-default">
          {{ article.description }}
        </h3>
        <nuxt-link class="mt-3 text-lg inline-block font-semibold text-brown-dark underline" :to="{name: 'blog-slug', params: {slug: article.slug} }">
          Leggi ora
        </nuxt-link>
      </article>
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
    this.articles = await this.$content('articles').where({ isPublished: true }).limit(3).fetch()
  }
}
</script>
