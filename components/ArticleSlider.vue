<template>
  <div class="article-carousel mt-32">
    <h3 v-if="title" class="text-2xl text-brown-dark font-title font-semibold">{{ title }}</h3>
    <client-only>
      <carousel pagination-active-color="#694E4E" pagination-color="#f5e5e5" :per-page="1" :per-page-custom="perPageCustom" class="bg-white border border-brown-default pt-12">
        <slide v-for="image in images" :key="image.url">
          <figure>
            <img class="article-carousel__image w-full object-contain object-center" :src="require('~/assets/images/blog' + image.url)" :alt="image.alt">
            <figcaption class="mt-4 font-semibold text-brown-default text-lg text-center">
              {{ image.alt }}
            </figcaption>
          </figure>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ArticleSlider',

  props: {
    title: {
      type: String,
      default: null
    },
    images: {
      type: Array,
      required: true
    }
  },

  computed: {
    perPageCustom () {
      return [
        [768, 2],
        [1024, 3]
      ]
    }
  }
}
</script>

<style lang="scss">
  .article-carousel__image {
    height: 350px;
  }
</style>
