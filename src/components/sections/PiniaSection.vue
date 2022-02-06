<template>
  <my-section
    title=" Pinia 🍍 included"
    description="Because it's awesome!"
    green
  >
    <div class="flex flex-col sm:flex-row items-center space-y-6 sm:(space-x-4 space-y-0)">
      <span class="font-bold sm:mr-4">Count: {{ count }}</span>
      <div class="flex items-center space-x-6">
        <my-button type="secondary" icon @click="increment">
          <mdi-plus />
        </my-button>
        <my-button type="secondary" icon @click="decrement">
          <mdi-minus />
        </my-button>
        <my-button type="secondary" icon @click="reset">
          <mdi-restore />
        </my-button>
      </div>
    </div>
  </my-section>
</template>

<script setup lang="ts">
import { useStore } from '@/stores'

const store = useStore()
const { count } = toRefs(store.$state)
const { increment, decrement, reset } = store
</script>
