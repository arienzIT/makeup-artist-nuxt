<template>
  <section class="py-32 bg-page-bg home-banner flex items-center relative overflow-hidden">
    <img src="~/assets/images/banner-bg.png" class="absolute top-0 left-0 object-cover w-full" />
    <div class="container mx-auto text-center lg:max-w-5xl flex flex-col items-center z-10">
      <h3 class="font-title text-6xl text-brown-default font-black">
        Sei interessata a una consulenza sui prodotti più adatti a te?
      </h3>
      <h4 class="text-2xl mt-12 text-brown-light">
        Scopri come valorizzare al meglio il tuo volto in base alle tue caratteristiche
      </h4>
      <a href="mailto:sara.kate.redaelli@gmail.com" class=" mt-20 border border-brown-default px-6 py-5 text-brown-default hover:bg-brown-lightest">
        Contattami
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<style lang="scss">
.home-banner {
  height: 800px;
}
</style>
