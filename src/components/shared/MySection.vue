<template>
  <section
    class="dark:(bg-none bg-gray-800 border-t-2 border-green-900)"
    :class="{'bg-gradient-to-r from-green-100 to-blue-100': green, 'bg-white': !green}"
  >
    <div class="container mx-auto flex flex-col items-center justify-center px-6 py-12">
      <h2>{{ title }}</h2>
      <p class="mt-2 mb-8 text-center md:(mt-4)">
        {{ description }}
      </p>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: false },
  green: { type: Boolean, required: false, default: false },
})
</script>
