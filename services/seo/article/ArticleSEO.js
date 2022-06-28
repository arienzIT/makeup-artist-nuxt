import {SEOAbstract} from "../SEO.abstract";
import {ArticleMetaPayload} from "./ArticleMetaPayload";

export class ArticleSEO extends SEOAbstract {
  type = 'article'

  constructor (article, route) {
    super ()
    this.article = article
    this.route = route
  }

  get head () {
    return {
      title: this.article.title,
      description: this.article.description,
      script: [{ type: 'application/ld+json', json: this.structuredData }],
      meta: [
        ...this.meta
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://sararedaelli.me/${this.article.slug}`
        }
      ]
    }
  }

  get structuredData () {
    return {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': this.route.fullPath
      },
      headline: this.article.title,
      image: [this.article.image],
      datePublished: this.article.createdAt,
      dateModified: this.article.updatedAt,
      author: {
        '@type': 'Person',
        name: 'Sara Redaelli',
        url: 'https://sararedaelli.me'
      },
      publisher: {
        '@type': 'Person',
        name: 'Sara Redaelli',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ucarecdn.com/d5b5d014-9fdd-434f-80b2-7d5c553399dc/'
        }
      }
    }
  }

  get meta () {
    const payload = new ArticleMetaPayload(this.article)
    return this.getSEOMeta(payload)
  }
}
