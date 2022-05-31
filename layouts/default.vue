<template>
  <div class="layout bg-rose-default flex flex-col">
    <NavBar />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>
<style>
.main {
  margin-top: 90px;
}
</style>
