<template>
  <div class="px:4 lg:px-0 lg:pt-20 bg-page-bg">
    <article class="mx-auto flex flex-col px-6 lg:px-0">
      <div class="container mx-auto lg:text-center lg:max-w-7xl flex flex-col items-center order-2 lg:order-1 mt-6 lg:mt-0 max-w-7xl mx-auto">
        <section-title tag="span" class="px-4 py-2 -ml-4 lg:ml-0 self-start lg:self-center" :text="article.tags ? article.tags[0] : 'articolo'" />
        <span class="self-start lg:self-center text-md lg:text-lg text-brown-light font-bold lg:mt-4">{{ date }}</span>
        <h1 class=" font-title text-3xl lg:text-5xl font-medium text-brown-dark mt-6 lg:mt-8">
          {{ article.title }}
        </h1>
        <h2 class="mt-4 lg:mt-14 text-xl lg:text-2xl font-semibold text-brown-default" v-html="article.description" />
      </div>
      <div class="image-wrapper relative order-1 -mx-6 lg:mx-auto lg:order-2 max-w-7xl">
        <div class="container mx-auto relative z-10">
          <picture class="w-full w-full">
            <source media="(max-width: 799px)" width="480" height="300" :srcset="`${article.image}/-/resize/480x/-/format/webp/`">
            <source media="(max-width: 1300px)" width="1000" height="400" :srcset="`${article.image}/-/resize/1000x/-/format/webp/`">
            <img
              :src="`${article.image}/-/resize/1500x/`"
              width="1500"
              height="600"
              :alt="article.imageAlt"
              class="w-full lg:mt-20 object-cover object-center"
            >
          </picture>
          <div class="hidden lg:block border-4 absolute -top-8 -right-8 z-20 w-full h-full z-20 image-border" />
        </div>
      </div>
      <div class="py-8 lg:py-20 max-w-7xl mx-auto order-3">
        <div class="container mx-auto flex lg:gap-24">
          <div class="hidden lg:block sticky self-start flex-1 social-container flex flex-col gap-4">
            <share-network
              class="w-16 h-16 p-4 flex items-center justify-center border border-brown-light hover:bg-brown-lightest mb-4"
              network="facebook"
              :url="url"
              :title="article.title"
              :description="article.description"
              :hashtags="article.tags.toString()"
            >
              <facebook-icon />
            </share-network>
            <share-network
              class="w-16 h-16 p-4 flex items-center justify-center border border-brown-light hover:bg-brown-lightest"
              network="twitter"
              :url="url"
              :title="article.title"
              :description="article.description"
              :hashtags="article.tags.toString()"
            >
              <twitter-icon />
            </share-network>
          </div>
          <nuxt-content class="w-full" :document="article" />
          <!-- @TODO uncomment after google ads approval -->
          <div v-if="false" class="w-1/3 hidden lg:block">
            <adsbygoogle ad-format="auto" />
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { ArticleSEO } from '../../services/seo/article/ArticleSEO'
import FacebookIcon from '~/assets/icons/facebook.svg'
import TwitterIcon from '~/assets/icons/twitter.svg'

export default {
  components: { FacebookIcon, TwitterIcon },
  async asyncData ({
    $content,
    params
  }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  head () {
    return new ArticleSEO(this.article, this.$route).head
  },

  computed: {
    url () {
      return `${process.env.HOST_NAME}/blog/${this.article.slug}`
    },

    date () {
      const date = new Date(this.article.createdAt)
      return date.toLocaleDateString('it-IT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style lang="scss">
.nuxt-content h1 {
  @apply text-4xl font-bold;
}
.nuxt-content h2 {
  @apply text-3xl font-title font-bold mb-4;
}

.nuxt-content h3 {
  @apply text-3xl font-title font-bold mb-4;
}

.nuxt-content h4 {
  @apply text-2xl font-title font-bold mb-3;
}

.nuxt-content p {
  @apply text-lg text-brown-dark;
  @apply mb-8;
}

.nuxt-content a {
  text-decoration: underline;
}

.image-wrapper:after {
  @media(min-width: 1024px) {
    content: '';
    @apply absolute;
    @apply left-0 top-1/2 bottom-0;
    @apply w-full;
    @apply bg-page-bg;
  }
}

.social-container {
  top: 110px;
}

.image-border {
  border-image: linear-gradient(to bottom, #886F6F calc(50% - 8px), #C1A3A3 calc(50% - 8px)) 1;
}

.nuxt-content-container {
  width: 100%;
}
</style>
