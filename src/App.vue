<script setup>
import Readings from '@/components/LatestReadings/Readings.vue'
import { useStore } from '@/store'
import { mockData } from '@/utils'

window.LATEST_ARTICLES = mockData

const store = useStore()
store.setArticles(window.LATEST_ARTICLES)
</script>

<template>
  <div class="container py-50">
    <Readings :articles="store.articles" />
  </div>
</template>
