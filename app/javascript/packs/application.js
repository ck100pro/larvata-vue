require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")


import Vue from 'vue'
import App from '../app.vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount('#vue-app')
})