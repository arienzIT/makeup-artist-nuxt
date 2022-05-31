<template>
  <article class="flex flex-col w-full lg:w-1/2 project" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="project__image-wrapper relative">
      <img
        :src="require('~/assets/images/portfolio/' + project.img)"
        class="project__image w-full h-full object-cover"
      >
      <div ref="projectFrame" class="absolute w-full h-full project__frame border-4 border-page-bg" :class="frameClasses" />
      <div
        ref="projectModel"
        class="project__model w-full overflow-y-hidden absolute max-w-20 right-0 bottom-0 h-16 flex items-center bg-page-bg"
      >
        <a
          ref="projectModelLink"
          class="project__model-link inline-block px-6 font-bold"
          :href="project.modelProfileUrl"
          target="_blank"
        >@{{ project.model }}
        </a>
      </div>
    </div>
    <h4 class="project__title text-brown-dark font-title font-bold text-2xl font-bold mt-8">
      {{ project.title }}
    </h4>
    <p class="text-brown-default text-lg mt-3">
      {{ project.description }}
    </p>
    <ul class="inline-flex">
      <li v-for="category in project.categories" :key="category" class="mt-4 ml-4 project__category">
        <NuxtLink to="/" class="font-bold text-lg">
          #{{ category }}
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    },
    framePosition: {
      type: String,
      required: true,
      default: 'right'
    }
  },

  data: () => ({
    timeline: null
  }),

  computed: {
    frameClasses () {
      return {
        'project__frame--left': this.framePosition === 'left',
        'project__frame--right': this.framePosition === 'right'
      }
    }
  },

  mounted () {
    const props = this.framePosition === 'left' ? { left: 0 } : { right: 0 }
    this.timeline = gsap.timeline({ paused: true })
      .to(this.$refs.projectFrame, {
        duration: 0.5,
        top: 0,
        ...props
      })
      .to(this.$refs.projectModel, {
        duration: 0.3,
        scaleY: 1,
        transformOrigin: 'bottom center'
      })
      .to(this.$refs.projectModelLink, {
        duration: 0.3,
        translateY: 0
      }, '<+=0.15')
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

<style lang="scss">
.project {
  &__image-wrapper {
    height: 700px;
  }

  &__model {
    transform: scaleY(0);
  }

  &__model-link {
    transform: translateY(200%);
  }

  &__frame {
    top: -40px;

    &--right {
      right: -40px;
    }

    &--left {
      left: -40px;
    }
  }

  &__category:first-child {
    @apply ml-0;
  }
}
</style>
