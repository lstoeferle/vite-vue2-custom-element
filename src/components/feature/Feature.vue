<template>
  <div class="flex flex-col border-2 border-gray-300 rounded px-4 py-6 dark:(border-green-900)">
    <h5>{{ title }}</h5>
    <p class="flex-1 mt-2 mb-4">
      {{ description }}
    </p>
    <a :href="url" target="_blank">
      <my-button type="secondary">
        Read more…
      </my-button>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
})
</script>
