<template>
  <component :is="tag" :style="backgroundStyle" class="text-sm p-4 lg:text-xl font-bold uppercase mb-4 text-brown-default lg:p-8 inline-flex section-title">
    {{ text }}
  </component>
</template>
<script>
export default {
  name: 'SectionTitle',
  props: {
    text: {
      type: String,
      required: true
    },
    light: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'h2'
    }
  },

  computed: {
    imageUrl () {
      return this.light ? 'pastel-decoration-light' : 'pastel-decoration'
    },

    backgroundStyle () {
      return {
        backgroundImage: `url(${require('~/assets/images/' + this.imageUrl + '.webp')})`
      }
    }
  }
}
</script>
<style>
.section-title {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
