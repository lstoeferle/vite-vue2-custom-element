<template>
  <div class="relative w-full h-full overflow-y-auto overflow-x-hidden dark:(bg-gray-800 text-white) text-gray-800 bg-red">
    <hero-section />
    <pinia-section />
    <dx-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import pinia from '@/plugins/pinia'

// TODO: check why ?inline is not working in lib mode
import 'virtual:windi.css?inline'

Vue.config.productionTip = false
Vue.config.devtools = import.meta.env.MODE === 'development'

// This is the entry component, you can add Vue plugins here
// NOTE: if you add them in main.ts, they are only available during local development
export default defineComponent({
  pinia,
})
</script>

<style lang="postcss">
h1 {
  @apply flex text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 sm:(text-5xl) md:(text-6xl);
}

h2 {
  @apply flex text-2xl font-bold sm:(text-3xl) md:(text-4xl);
}

h3 {
  @apply flex text-xl font-bold sm:(text-2xl) md:(text-3xl);
}

h4 {
  @apply flex text-lg font-bold sm:(text-xl) md:(text-2xl);
}

h5 {
  @apply flex text-md font-bold sm:(text-lg) md:(text-xl);
}
</style>
