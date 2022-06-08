<template>
  <article class="border-2 lg:border-4 border-page-bg">
    <a :href="href" target="_blank" class="cursor-pointer">
      <div class="relative">
        <img :src="image" class="p-4 lg:p-4 pb-0 object-cover w-full object-center relative" :class="`aspect--${imageRatio}`">
      </div>
      <div class="p-4">
        <h2 class="font-title text-2xl lg:text-3xl text-brown-dark font-bold hover:underline">
          {{ title }}
        </h2>
        <h3 v-html="description" class="mt-2 text-md lg:text-lg text-brown-default" />
      </div>
    </a>
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
    },
    href: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss">
.aspect--square {
  aspect-ratio: 1;
}
</style>
