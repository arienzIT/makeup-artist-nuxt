<template>
  <a
    ref="buttonWrapper"
    :href="href"
    class="flex items-center justify-center border-2 w-24 h-24 relative"
    :class="`bg-${color} border-${borderColor}`"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <p
      ref="buttonText"
      class="text-xl py-2 px-6 -ml-12 text-brown-dark absolute left-full whitespace-nowrap"
      :class="`bg-${color}`"
    >
      {{ text }}
    </p>
  </a>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'SquaredLink',

  props: {
    text: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'rose-default'
    },
    borderColor: {
      type: String,
      default: 'brown-default'
    }
  },

  mounted () {
    this.timeline = gsap.timeline({ paused: true })
      .to(this.$refs.buttonText, {
        left: 48
      })
      .to(this.$refs.buttonWrapper, {
        width: this.$refs.buttonText.clientWidth + 6
      }, '<')
      .set(this.$refs.buttonText, {
        backgroundColor: 'transparent'
      })
      .to(this.$refs.buttonWrapper, {
        backgroundColor: '#fffaf8',
        duration: 0.5
      })
  },

  methods: {
    onMouseEnter () {
      this.timeline.play()
    },

    onMouseLeave () {
      this.timeline.reverse()
    }
  }
}
</script>
