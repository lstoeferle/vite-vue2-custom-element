<template>
  <button
    class="inline-flex items-center py-2 px-6 rounded border-2 focus:outline-none transition-colors"
    :class="[typeBasedClasses, {'px-6': !icon, 'px-2': icon}]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
const props = defineProps({
  type: { type: String, required: false, default: 'primary', validator: (value: string) => ['primary', 'secondary'].includes(value) },
  icon: { type: Boolean, required: false, default: false },
})

const typeBasedClasses = computed<string>(() =>
  props.type === 'secondary'
    ? 'border-green-500 bg-white text-green-500 dark:(border-green-900 bg-gray-800 text-white) hover:(bg-green-400 border-green-400 text-white)'
    : 'border-green-500 bg-green-500 text-white hover:(bg-green-400 border-green-400)',
)
</script>
