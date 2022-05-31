<template>
  <div class="contact py-16 lg:py-20 flex flex-1 items-center relative">
    <div class="absolute bottom-0 left-0 w-full h-1/2 bg-brown-lighter z-10" />
    <form name="contact" netlify class="border-4 border-brown-lightest bg-page-bg p-16 container mx-auto lg:max-w-7xl relative z-50 form">
      <div class="flex flex-col">
        <label for="name" class="text-brown-default">
          Nome completo
        </label>
        <input id="name" type="text" placeholder="Inserisci il tuo nome" name="name" class="bg-transparent border-b border-brown-default mt-2 placeholder-brown-lighter pb-2 focus:outline-none focus:border-brown-light text-brown-dark text-lg">
      </div>

      <div class="flex flex-col mt-8">
        <label for="email" class="text-brown-default">
          Email
        </label>
        <input id="email" type="email" placeholder="Inserisci il tuo indirizzo email" name="email" class="bg-transparent border-b border-brown-default mt-2 placeholder-brown-lighter pb-2 focus:outline-none focus:border-brown-light text-brown-dark text-lg">
      </div>

      <div class="flex flex-col mt-8">
        <label for="email" class="text-brown-default">
          Telefono
        </label>
        <input id="phone" type="tel" placeholder="Inserisci il tuo numero di telefono" name="phone" class="bg-transparent border-b border-brown-default mt-2 placeholder-brown-lighter pb-2 focus:outline-none focus:border-brown-light text-brown-dark text-lg">
      </div>

      <div class="flex flex-col mt-8">
        <label for="message" class="text-brown-default">
          Messaggio
        </label>
        <textarea id="message" rows="10" placeholder="Scrivi qui la tua richiesta" name="message" class="bg-transparent border p-4 border-brown-default mt-2 placeholder-brown-lighter pb-2 focus:outline-none focus:border-brown-light text-brown-dark text-lg" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ContactsPage'
}
</script>
