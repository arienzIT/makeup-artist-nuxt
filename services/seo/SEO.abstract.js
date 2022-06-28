export class SEOAbstract {
  getSEOMeta(payload) {
    return [
      {
        hid: 'description',
        name: 'description',
        content: payload.description
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: payload.type
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: payload.url
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: payload.title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: payload.description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: payload.mainImage
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: payload.url
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: payload.title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: payload.description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: payload.mainImage
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: payload.twitterSite
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: payload.twitterCard
      },
      {
        property: 'article:published_time',
        content: payload.createdAt
      },
      {
        property: 'article:modified_time',
        content: payload.updatedAt
      },
      {
        property: 'article:tag',
        content: payload.tags
      },
      {
        name: 'twitter:label1',
        content: 'Written by'
      },
      {
        name: 'twitter:data1',
        content: 'Sara Redaelli'
      }
    ]
  }
}
