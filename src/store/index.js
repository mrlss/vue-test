import { defineStore } from 'pinia'

export const useStore = defineStore({
  state: () => ({
    articles: []
  }),
  actions: {
    setArticles(articles) {
      this.articles = articles
    }
  }
})
