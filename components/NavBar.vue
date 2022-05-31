<template>
  <nav class="navbar z-50 fixed top-0 left-0 w-full flex justify-between">
    <div class="navbar__content flex flex-1 justify-between text-brown-default border-b border-brown-default">
      <div class="py-8 px-4 flex justify-between items-center flex-1">
        <a href="/">
          <h1 class="navbar__logo text-3xl font-body font-light">
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
      <button
        class="
      navbar__menu-btn
      px-10 border-l border-brown-default flex justify-center items-center w-40 text-xl text-inherit
      hover:bg-white hover:bg-brown-lightest hover:text-brown-default"
      >
        Menu
      </button>
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
</style>
