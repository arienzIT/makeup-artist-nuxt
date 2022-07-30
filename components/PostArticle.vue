<template>
  <article class="border-2 lg:border border-brown-lighter">
    <component
      :is="componentTag"
      v-bind="linkDynamicProps"
      :target="target"
      class="cursor-pointer"
    >
      <div class="relative p-4">
        <img
          :src="image + '/-/resize/x' + (imageRatio === 'square' ? '500' : '250') + '/-/format/webp/'"
          :alt="imageAlt"
          loading="lazy"
          height="250"
          width="400"
          class="object-cover w-full object-center relative"
          :class="`aspect--${imageRatio} ${imageRatio !== 'square' ? 'h-48' : ''}`"
        >
      </div>
      <div class="p-4 pt-0">
        <h2 class="font-title text-2xl text-brown-dark font-bold hover:underline">
          {{ title }}
        </h2>
        <h3 class="mt-2 text-md text-brown-default" v-html="description" />
      </div>
    </component>
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
    imageAlt: {
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
    },
    target: {
      type: String,
      default: '_self'
    }
  },

  computed: {
    isInternalLink () {
      return this.href.startsWith('/')
    },

    componentTag () {
      return this.isInternalLink ? 'nuxt-link' : 'a'
    },

    linkDynamicProps () {
      return {
        [this.isInternalLink ? 'to' : 'href']: this.href
      }
    }
  }
}
</script>
<style lang="scss">
.aspect--square {
  aspect-ratio: 1;
}
</style>
