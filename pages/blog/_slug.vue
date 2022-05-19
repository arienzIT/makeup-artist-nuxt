<template>
  <div>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <article>
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <img :src="article.img" :alt="article.alt">
      <p>Article last updated: {{ article.updatedAt }}</p>

      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>

<style>
.nuxt-content h1 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
