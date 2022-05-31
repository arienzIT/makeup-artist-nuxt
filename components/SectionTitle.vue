<template>
  <h3 :style="backgroundStyle" class="text-xl font-bold uppercase mb-4 text-brown-default p-8 inline-flex section-title">
    {{ text }}
  </h3>
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
    }
  },

  computed: {
    imageUrl () {
      return this.light ? 'pastel-decoration-light' : 'pastel-decoration'
    },

    backgroundStyle () {
      return {
        backgroundImage: `url(${require('~/assets/images/' + this.imageUrl + '.png')})`
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
