const filterByExpirationDay = (articles, daysToCount = 7) => {
  if (typeof daysToCount !== 'number') {
    throw new Error('Second parameter must be a number')
  }

  return articles.filter((article) => {
    const publishDate = new Date(article.publishDate)
    const daysAgo = new Date()

    daysAgo.setDate(daysAgo.getDate() - daysToCount)

    return publishDate >= daysAgo
  })
}

export default filterByExpirationDay
