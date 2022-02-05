import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      if (this.count > 0)
        this.count--
    },
    reset() {
      this.count = 0
    },
  },
})
