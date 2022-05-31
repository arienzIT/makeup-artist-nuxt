<template>
  <div>
    <article class="mx-auto px:4 lg:px-0 pt-20 block">
      <div class="container mx-auto text-center lg:max-w-7xl flex flex-col items-center">
        <section-title class="px-4 py-2" :text="article.tags ? article.tags[0] : 'articolo'" />
        <span class="text-center text-lg text-brown-default font-bold mt-4">{{ date }}</span>
        <h1 class="text-center text-5xl text-brown-dark font-bold font-title mt-8">
          {{ article.title }}
        </h1>
        <h2 class="mt-14 text-2xl text-brown-default">
          {{ article.description }}
        </h2>
      </div>
      <div class="image-wrapper relative">
        <div class="container mx-auto relative z-10">
          <img :src="require('~/assets/images/blog/' + article.image)" class="mt-20 object-cover w-full object-center">
          <div class="border-4 absolute -top-8 -right-8 z-20 w-full h-full z-20 image-border" />
        </div>
      </div>
      <div class="py-16 lg:py-20 bg-page-bg">
        <div class="container mx-auto flex gap-24">
          <div class="sticky self-start flex-1 social-container flex flex-col gap-4">
            <share-network
              class="w-16 h-16 p-4 flex items-center justify-center border border-brown-light hover:bg-brown-lightest"
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
          <nuxt-content :document="article" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import createSEOMeta from '../../utils/createSEOMeta'
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
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : ''
        },
        {
          name: 'twitter:label1',
          content: 'Written by'
        },
        {
          name: 'twitter:data1',
          content: 'David Parks'
        },
        {
          name: 'twitter:label2',
          content: 'Filed under'
        },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : ''
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://davidparks.dev/blog/${this.article.slug}`
        }
      ]
    }
  },

  computed: {
    meta () {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: this.url,
        mainImage: this.article.image
      }
      return createSEOMeta(metaData)
    },

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

<style>
.nuxt-content h1 {
  @apply text-4xl font-bold;
}
.nuxt-content h2 {
  @apply text-3xl font-title font-bold mb-4;
}
.nuxt-content p {
  @apply text-lg text-brown-dark;
  @apply mb-8;
}

.image-wrapper:after {
  content: '';
  @apply absolute;
  @apply left-0 top-1/2 bottom-0;
  @apply w-full;
  @apply bg-page-bg;
}

.social-container {
  top: 110px;
}

.image-border {
  border-image: linear-gradient(to bottom, #fffaf8 calc(50% + 32px), #f7e6df calc(50% + 32px)) 1;
}
</style>
