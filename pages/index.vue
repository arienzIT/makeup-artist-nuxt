<template>
  <main class="bg-rose-default flex flex-col">
    <HomeHero />
    <HomeAboutMe />
    <HomeBlog />
    <HomeBanner />
    <HomePortfolio />
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  head () {
    return {
      script: [{ defer: true, src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
