<template>
  <header class="home-hero w-full flex flex-col lg:flex-row items-center container lg:max-w-7xl mx-auto px-6 py-16 lg:py-20">
    <div class="w-full lg:w-1/2 order-2 lg:order-1">
      <h1 class="text-5xl lg:text-6xl text-white font-bold text-brown-default font-title break-words">
        Sara Readelli,<br />make-up artist,<br /> truccatrice professionale a servizio del tuo corpo
      </h1>
      <h2 class="mt-4 lg:mt-8 text-lg lg:text-2xl text-brown-light">
        Lavorare come truccatrice professionista, un sogno diventato realtà
      </h2>
      <CircularButton
        :radius="70"
        class="text-brown-light mt-6 lg:mt-16"
        text="Contattami per maggiori informazioni"
        href="mailto:sara.kate.redaelli@gmail.com"
        icon-name="arrow-right"
      />
    </div>
    <div class="w-full lg:w-1/2 lg:order-2">
      <picture>
        <source
          media="(max-width: 799px)"
          width="400"
          height="518"
          srcset="https://ucarecdn.com/fd5203e6-13da-4911-8058-d46dc6a80ecf/-/resize/400x/-/format/webp/"
        >
        <img
          src="https://ucarecdn.com/fd5203e6-13da-4911-8058-d46dc6a80ecf/-/resize/800x/-/format/webp/"
          width="624"
          height="808"
          alt="Sara Redaelli in posa con i pennelli da trucco"
        >
      </picture>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HomeHero'
}
</script>
<style>
.button-text {
  word-spacing: 12px;
}

#rounded-btn:hover #inner-circle {
  transform: scale(1.75);
}
</style>
