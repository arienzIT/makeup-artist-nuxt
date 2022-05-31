<template>
  <article class="border-2 lg:border-4 border-page-bg">
    <nuxt-link :to="{name: 'blog-slug', params: { slug } }">
      <div class="relative">
        <img :src="image" class="p-4 lg:p-4 pb-0 object-cover w-full object-center relative" :class="`aspect--${imageRatio}`">
      </div>
      <div class="p-4">
        <h2 class="font-title text-2xl lg:text-3xl text-brown-dark font-bold hover:underline">
          {{ title }}
        </h2>
        <h3 class="mt-2 text-md lg:text-lg text-brown-default">
          {{ description }}
        </h3>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'PostArticle',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    imageClass: {
      type: String,
      default: ''
    },
    imageRatio: {
      type: String,
      default: 'auto'
    }
  }
}
</script>
<style lang="scss">
.aspect--square {
  aspect-ratio: 1;
}
</style>
