<template>
  <my-section
    title="Next Level Developer Experience"
    description="thanks to the Vite ecosystem 🚀️"
  >
    <div class="grid grid-cols-1 gap-4 md:(grid-cols-2) xl:(grid-cols-3)">
      <feature
        v-for="({title, description,url}, index) in features"
        :key="index"
        class="w-full"
        :title="title"
        :description="description"
        :url="url"
      />
    </div>
  </my-section>
</template>

<script setup lang="ts">
const features: { title: string; description: string; url: string }[] = [
  {
    title: '⚡️ vite-plugin-vue2',
    description: 'Vue 2 support for Vite',
    url: 'https://github.com/underfin/vite-plugin-vue2',
  },
  {
    title: '🔥 unplugin-vue2-script-setup',
    description: 'Syntax support for the new script setup',
    url: 'https://github.com/antfu/unplugin-vue2-script-setup',
  },
  {
    title: '📦 unplugin-components',
    description: 'Importing Vue components on-demand',
    url: 'https://github.com/antfu/unplugin-vue-components',
  },
  {
    title: '📥 unplugin-auto-import',
    description: 'Importing APIs like CompositionAPI on-demand',
    url: 'https://github.com/antfu/unplugin-auto-import',
  },
  {
    title: '🎨 vite-plugin-windicss',
    description: 'Easy WindiCSS integration',
    url: 'https://github.com/windicss/vite-plugin-windicss',
  },
  {
    title: '😃 unplugin-icons',
    description: 'Importing icons as Vue components on-demand',
    url: 'https://github.com/antfu/unplugin-icons',
  },
]
</script>
