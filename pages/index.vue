<template>
  <main class="bg-rose-default flex flex-col">
    <HomeHero />
    <HomeBlog />
    <HomeAboutMe />
    <HomeBanner />
    <HomePortfolio />
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  head () {
    return {
      script: [{ defer: true, async: false, src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.sararedaelli.me' + this.$route.path
        }
      ]
    }
  }
}
</script>
