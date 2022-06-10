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
  name: 'LayoutDefault'
}
</script>
<style>
.main {
  margin-top: 90px;
}
</style>
