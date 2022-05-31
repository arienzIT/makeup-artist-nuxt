<template>
  <nav class="navbar z-50 fixed top-0 left-0 w-full flex justify-between">
    <div class="navbar__content flex flex-1 justify-between text-brown-default border-b border-brown-default">
      <!-- @TODO add 'border-r border-brown-default' when uncommenting menu -->
      <div class="py-8 px-4 flex justify-between items-center flex-1">
        <a href="/">
          <h1 class="navbar__logo text-xl lg:text-3xl font-body font-light">
            Sara Redaelli
          </h1>
        </a>
        <ul>
          <li>
            <a target="_blank" href="https://www.instagram.com/sara.redaelli/" alt="Sara Redaelli profilo instagram">
              <InstagramIcon class="h-8" />
            </a>
          </li>
        </ul>
      </div>
      <!--      <button
        class="
      navbar__menu-btn
      z-50
      px-10 flex justify-center items-center w-40 text-xl text-inherit
      hover:bg-white hover:bg-brown-lightest hover:text-brown-default"
        @click="toggleMenu"
      >
        Menu
      </button>
    </div>
    <div ref="menu" class="menu flex items-center justify-center absolute right-0 top-0 bg-page-bg bg-opacity-95 z-1 flex-col">
      <nuxt-link ref="menuLink" to="/" class="menu__link text-5xl mb-24">
        Home page
      </nuxt-link>
      <nuxt-link ref="menuLink" to="/contacts" class="menu__link text-5xl mb-24">
        Contatti
      </nuxt-link>-->
      <!-- @TODO uncomment once blog list page implemented
      <nuxt-link ref="menuLink" class="menu__link text-5xl mb-24" to="/">
        Blog
      </nuxt-link>
      -->
    </div>
  </nav>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InstagramIcon from '~/assets/icons/instagram.svg'

export default {
  name: 'NavBar',
  components: {
    InstagramIcon
  },

  data () {
    return {
      isMenuOpen: false,
      timeline: null
    }
  },

  mounted () {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      start: 'top -90px',
      end: 99999,
      toggleClass: {
        className: 'navbar--active',
        targets: 'nav'
      }
    })

    this.timeline = gsap.timeline({ paused: true })
      .to(this.$refs.menu, {
        scale: 1,
        duration: 0.75
      })
      .to('.menu__link', {
        duration: 0.3,
        opacity: 1,
        y: 0,
        stagger: 0.2
      })
      .set('body', {
        overflow: 'hidden'
      })
  },

  methods: {
    openMenu () {
      gsap.timeline()
        .to(this.$refs.menu, {
          scaleY: 1,
          duration: 0.75
        })
        .to('.menu__link', {
          duration: 0.3,
          opacity: 1,
          y: 0,
          stagger: 0.2
        })
        .set('body', {
          overflow: 'hidden'
        })
    },

    toggleMenu () {
      this.isMenuOpen ? this.timeline.reverse() : this.timeline.play()
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style lang="scss">
.navbar {
  height: 90px;

  &__content {
    transition: all .5s ease;
    @apply relative;

    &:after {
      content: '';
      @apply bg-page-bg;
      @apply absolute;
      width: 100%;
      height: 100%;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform .5s ease;
      z-index: -1;
    }
  }

  &--active {
    .navbar__content {
      &:after {
        transform: scaleY(1);
      }
    }
  }
}

.menu {
  @apply w-full h-screen;
  transform: scaleY(0);
  transform-origin: right top;

  &__link {
    opacity: 0;
    transform: translateY(50px);
  }
}
</style>
