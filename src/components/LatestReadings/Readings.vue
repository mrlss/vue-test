<script setup>
import Item from './Item.vue'
import { getCategories, sortByOption, filterByExpirationDay, formatDate } from '@/utils'

defineProps({
  articles: {
    type: Array,
    required: true
  },
  maxAmountToShow: {
    type: Number,
    default: 5
  },
  expirationDayAmount: {
    type: Number,
    default: 7
  },
  emptyMessage: {
    type: String,
    default: 'Please select at least one category above.'
  }
})
</script>

<template>
  <div class="border-4 border-gray-400 bg-gray-100 text-black text-md mx-auto p-20 max-w-[50rem]">
    <div class="flex justify-center items-center gap-x-20 text-lg capitalize mb-30">
      <label :for="category" v-for="category in categories" :key="category">
        <input
          type="checkbox"
          :value="category"
          :id="category"
          class="custom-checkbox"
          v-model="activeCategories"
        />
        <span class="ml-5">{{ category }}</span>
      </label>
    </div>

    <div v-for="item in filteredAndSortedArticles" :key="item.url">
      <Item
        :title="item.title"
        :url="item.url"
        :category="item.category"
        :publishDate="formatDate(item.publishDate)"
      />
    </div>

    <div
      v-if="!filteredAndSortedArticles.length && emptyMessage"
      class="text-center text-md empty-message"
      v-html="emptyMessage"
    ></div>
  </div>
</template>
<script>
export default {
  components: {
    Item
  },
  data() {
    const categories = getCategories(this.articles)

    return {
      categories,
      activeCategories: categories
    }
  },
  computed: {
    filteredAndSortedArticles() {
      const filteredByCategories = this.articles.filter((item) =>
        this.activeCategories.includes(item.category)
      )
      const filteredByExperationDay = filterByExpirationDay(
        filteredByCategories,
        this.expirationDayAmount
      )
      const sorted = sortByOption(filteredByExperationDay)

      return sorted.splice(0, this.maxAmountToShow)
    }
  }
}
</script>
