export default (article, route) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': route.fullPath
  },
  headline: article.title,
  image: [article.image],
  datePublished: article.createdAt,
  dateModified: article.updatedAt,
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
})
