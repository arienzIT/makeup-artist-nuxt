<template>
  <div class="layout bg-rose-default flex flex-col h-full">
    <NavBar />
    <main class="main h-full flex flex-col">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  head() {
    return {
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
<style>
.main {
  margin-top: 90px;
}
</style>
