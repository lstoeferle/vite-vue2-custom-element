import wrap from '@vue/web-component-wrapper'
import Vue from 'vue'
import App from '@/App.vue'

const customElement = wrap(Vue, App)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.customElements.define(import.meta.env.VITE_CUSTOM_ELEMENT_NAME, customElement)
