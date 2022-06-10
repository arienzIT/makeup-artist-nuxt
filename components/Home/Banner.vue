<template>
  <section class="py-16 lg:py-20 px-6 lg:px-0 bg-page-bg home-banner flex items-center relative overflow-hidden">
    <img
      src="~/assets/images/banner-bg.webp"
      width="1200"
      height="542"
      class="absolute top-0 left-0 object-cover w-full h-full object-left"
      alt="Sfondo astratto con tratti di pennelli"
      loading="lazy"
    >
    <div class="container mx-auto text-center lg:max-w-7xl flex flex-col items-center z-10">
      <h3 class="font-title text-3xl lg:text-5xl font-black text-brown-default">
        Sei interessata a una consulenza sui prodotti più adatti a te?
      </h3>
      <p class="text-md lg:text-2xl mt-4 lg:mt-12 text-brown-light">
        Non tutti i prodotti si adattano ai toni e alle caratteristiche della tua pelle. Concetti come <strong>armocromia</strong>
        e <strong>analisi della pelle</strong> possono aiutarti a esaltare al meglio il tuo volto, valorizzandone le sue
        peculiarità. Vuoi saperne di più?
      </p>
      <a
        href="mailto:sara.kate.redaelli@gmail.com"
        class=" mt-20 border border-brown-default px-6 py-5 text-brown-default hover:bg-brown-lightest"
      >
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
  @media (min-width: 1024px) {
    height: 800px;
  }
}
</style>
