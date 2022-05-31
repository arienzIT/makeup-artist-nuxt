<template>
  <section class="home-portfolio container mx-auto justify-center flex flex-col py-16 lg:py-20 px-6 xl:px-0 lg:max-w-7xl">
    <section-title class="self-center" light text="Articoli" />
    <h4 class="mt-4 text-center font-title text-5xl text-brown-default">
      Scopri tutte le novità
    </h4>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-16 gap-4">
      <article v-for="article in articles" :key="article.title" class="border-2 lg:border-4 border-page-bg">
        <div class="relative">
          <img :src="require('~/assets/images/blog/' + article.image)" class="p-4 lg:p-4 pb-0 h-56 object-cover w-full object-center relative">
        </div>
        <div class="p-4">
          <h2 class="font-title text-2xl text-brown-dark font-bold hover:underline">
            <nuxt-link :to="{name: 'blog-slug', params: {slug: article.slug} }">
              {{ article.title }}
            </nuxt-link>
          </h2>
          <h3 class="mt-3 text-lg text-brown-default<<">
            {{ article.description }}
          </h3>
          <nuxt-link class="mt-3 text-lg inline-block font-semibold text-brown-dark underline" :to="{name: 'blog-slug', params: {slug: article.slug} }">
            Leggi ora
          </nuxt-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import SectionTitle from '../SectionTitle'
export default {
  name: 'HomeBlog',
  components: { SectionTitle },
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
