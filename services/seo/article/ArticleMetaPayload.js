
export class ArticleMetaPayload {
  constructor(article) {
    this.type = 'article'
    this.title = article.title
    this.description = article.description
    this.url = article.url
    this.mainImage = article.image
    this.createdAt = article.createdAt
    this.updatedAt = article.updatedAt
    this.tags = article.tags ? article.tags.toString() : ''
  }
}
