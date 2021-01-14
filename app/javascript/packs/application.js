require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")


import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from '../app.vue'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import router from '../router/index'


Vue.use(Vuetify)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)


document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    vuetify: new Vuetify({ icons: { iconfont: 'mdi' }}),
    router,
    render: h => h(App)
  }).$mount('#vue-app')
})