require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")


import Vue from 'vue'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount('#vue-app')
})