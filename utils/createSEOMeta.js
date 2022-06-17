const type = 'website'
const url = 'https://sararedaelli.me'
const title = 'Sara Redaelli'
const description = 'Sono una make-up artist e beauty expert della provincia di Monza e Brianza, pronta ad aggiornarti sulle nuove tendenze di bellezza e a consigliarti i prodotti più adatti a te'
const mainImage = ''
const twitterSite = ''
const twitterCard = 'summary_large_image'
export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || type
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || url
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.mainImage) || mainImage
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || url
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.mainImage) || mainImage
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: (meta && meta.twitterSite) || twitterSite
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: (meta && meta.twitterCard) || twitterCard
    },
    {
      property: 'article:published_time',
      content: meta.createdAt
    },
    {
      property: 'article:modified_time',
      content: meta.updatedAt
    },
    {
      property: 'article:tag',
      content: meta.tags ? meta.tags.toString() : ''
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
