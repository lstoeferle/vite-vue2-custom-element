import Vue from 'vue'
import VueCompositionApi, { createApp, h } from '@vue/composition-api'
import App from '@/App.vue'
import pinia from '@/plugins/pinia'

Vue.use(VueCompositionApi)

createApp({
  pinia, // required for dev-tools to work locally
  render: () => h(App),
}).mount('#app')
