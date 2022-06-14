<template>
  <div class="article-carousel">
    <h3 v-if="title" class="text-2xl text-brown-dark font-title font-semibold">
      {{ title }}
    </h3>
    <client-only>
      <carousel
        pagination-active-color="#694E4E"
        pagination-color="#f5e5e5"
        :per-page="1"
        :per-page-custom="perPageCustom"
        class="bg-white p-6"
        :class="{
          'border': hasBorder,
          'border-brown-default': hasBorder
        }"
      >
        <slide v-for="image in images" :key="image.url">
          <figure>
            <img class="article-carousel__image w-full object-contain object-center" :src="`${image.url}/-/resize/x300/`" :alt="image.alt">
            <figcaption class="mt-4 font-semibold text-brown-default text-lg text-center">
              <a v-if="image.link" :href="image.link" target="_blank">{{ image.alt }}</a>
              <span v-else>{{ image.alt }}</span>
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
    },
    hasBorder: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    perPageCustom () {
      const perPageMobile = this.images.length > 1 ? 2 : this.images.length
      const perPageDesktop = this.images.length > 2 ? 3 : this.images.length
      return [
        [768, perPageMobile],
        [1024, perPageDesktop]
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
