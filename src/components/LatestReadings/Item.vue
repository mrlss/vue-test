<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  publishDate: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href="url" class="flex items-center gap-x-20 my-10 group readings__item">
    <div class="flex-grow overflow-hidden flex">
      <h3 class="link readings__title inline-block text-md mb-0 font-bold truncate">{{ title }}</h3>
    </div>
    <div class="flex-shrink-0 min-w-80 text-right readings__date">{{ publishDate }}</div>
  </a>
</template>
