<template>
  <main class="bg-rose-default flex flex-col">
    <HomeHero />
    <HomeAboutMe />
    <HomePortfolio />
    <HomeBanner />
    <HomeBlog />
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
