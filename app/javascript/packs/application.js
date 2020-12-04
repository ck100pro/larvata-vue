require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")


import Vue from 'vue'
import App from '../app.vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
Vue.use(VueAxios, axios)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    vuetify: new Vuetify({ icons: { iconfont: 'mdi' }}),
    render: h => h(App)
  }).$mount('#vue-app')
})