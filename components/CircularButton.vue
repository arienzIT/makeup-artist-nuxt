<template>
  <a :href="href" :style="buttonStyle" class="flex items-center justify-center relative">
    <svg id="rounded-btn" viewBox="0 0 200 200" class="absolute" aria-labelledby="circularBtn">
      <title id="circularBtn">{{ text }}</title>
      <defs>
        <path
          id="circlePath"
          :d="textCirclePath"
        >
          <animateTransform v-bind="textAnimationConfig" />
        </path>
      </defs>
      <path
        id="inner-circle"
        transform=""
        fill="white"
        :d="buttonCirclePath"
      />
      <text dy="20" textLength="400" class="circular-button__text fill-current uppercase font-bold button-text">
        <textPath xlink:href="#circlePath">
          {{ text }}
        </textPath>
      </text>
    </svg>
    <component :is="icon" class="h-6 w-6 z-10 fill-current" />
  </a>
</template>

<script>
import { SvgHelper } from '../helpers/Svg'

export default {
  name: 'CircularButton',

  props: {
    text: {
      type: String,
      required: true
    },
    center: {
      type: Number,
      default: 100
    },
    radius: {
      type: Number,
      default: 75
    },
    animationDuration: {
      type: Number,
      default: 8
    },
    iconName: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  },

  computed: {
    textCirclePath () {
      return SvgHelper.getCirclePath(this.center, this.radius)
    },

    buttonCirclePath () {
      return SvgHelper.getCirclePath(this.center, this.radius / 2)
    },

    textAnimationConfig () {
      return {
        attributeName: 'transform',
        begin: '0s',
        dur: `${this.animationDuration}s`,
        from: `0 ${this.center} ${this.center}`,
        to: `360 ${this.center} ${this.center}`,
        repeatCount: 'indefinite',
        type: 'rotate'
      }
    },

    buttonStyle () {
      return {
        width: `${this.radius * 2}px`,
        height: `${this.radius * 2}px`
      }
    },

    icon () {
      return () => import('~/assets/icons/' + this.iconName + '.svg')
    }
  }
}
</script>
<style>
.circular-button__text {
  word-spacing: 12px;
}

#inner-circle {
  transition: transform .4s ease-in-out;
  transform-origin: center center;
}
</style>
