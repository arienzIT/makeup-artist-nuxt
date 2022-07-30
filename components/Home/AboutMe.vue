<template>
  <section class="about-me">
    <div class="flex flex-col lg:flex-row container mx-auto py-16 lg:py-20 lg:max-w-7xl mx-auto px-6 gap-2 lg:gap-32 lg:items-center">
      <div class="w-full lg:w-1/2 pr-4 lg:pr-0">
        <div class="about-me__image-wrapper relative">
          <picture class="h-full w-full object-cover aspect-square">
            <source
              media="(max-width: 799px)"
              width="480"
              height="480"
              srcset="https://ucarecdn.com/3a1a89cd-bac5-4a10-b58b-f7af2ed59faf/-/resize/480x/-/format/webp/"
            >
            <img
              src="https://ucarecdn.com/3a1a89cd-bac5-4a10-b58b-f7af2ed59faf/-/resize/800x/-/format/webp/"
              width="800"
              height="800"
              alt="Sara Redaelli applica il trucco occhi"
            >
          </picture>
        </div>
      </div>
      <div class="w-full lg:w-1/2 mt-6 lg:mt-0 flex flex-col items-center lg:items-start">
        <section-title text="Chi sono" />
        <h3 class="about-me__title text-center lg:text-left font-title text-3xl lg:text-5xl font-black text-brown-default">
          Il make-up non è solo sinonimo di bellezza, ma pura esaltazione delle forme.
        </h3>
        <p class="text-md lg:text-lg mt-8 text-brown-light">
          Con un background fortemente focalizzato sulle belle arti, dopo il conseguimento del diploma oriento i miei interessi verso l'ambito del beauty, specializzandomi in trucco correttivo presso la <a class="underline" href="https://www.bcm.it/" target="_blank">BCM Beauty Centre of Milan</a>.
          Al termine del corso ho intrapreso la mia carriera come <em>make-up artist</em> e <em>vendeuse</em> presso la storica profumeria <a href="https://www.pinalli.it/" target="_blank" class="underline">Pinalli</a> di Seregno.
          Ho sviluppato negli anni una forte esperienza nella realizzazione di make-up sposa e fashion, oltre ad aver approfondito la cura della pelle, al fine di rendere ottimale la resa del trucco.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeAboutMe'
}
</script>

<style lang="scss">
  .about-me__image-wrapper::after {
    @apply absolute w-full h-full;
    @apply border-4 border-brown-default;
    content: "";
    right: -16px;
    top: -16px;
    z-index: 0;

    @media (min-width: 1024px) {
      right: -40px;
      top: -40px;
    }
  }
</style>
