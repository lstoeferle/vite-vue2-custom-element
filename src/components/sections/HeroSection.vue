<template>
  <section class="container mx-auto flex px-6 py-24 items-center justify-center flex-col">
    <img class="w-3/4 md:w-full max-w-[400px]" alt="hero" src="@/assets/vue-logo.svg">
    <div class="text-center mt-12">
      <h1>
        Vue2 &lt;custom-element &sol;&gt;
      </h1>
      <p class="mt-2 md:(mt-4)">
        powered by Vite ⚡️
      </p>
      <div class="flex flex-col justify-center items-center space-y-4 mt-8 sm:(space-y-0 space-x-4 flex-row mt-12)">
        <a href="https://github.com/lstoeferle/vite-vue2-custom-element" target="_blank">
          <my-button>
            Source Code
            <mdi-github class="ml-2" />
          </my-button>
        </a>
        <my-button type="secondary" @click="toggleDark">
          Toggle Theme
          <mdi-theme-light-dark class="ml-2" />
        </my-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
