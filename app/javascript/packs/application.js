require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")


import Vue from 'vue/dist/vue.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
// import Vuetify from 'vuetify'
// import vuetify from './vuetify'
// import App from '../app.vue'

import '@mdi/font/css/materialdesignicons.css'
import router from '../router/index'


import Vuetify, { VCard, VRating, VToolbar, VBtn, VApp, VListItem, VListItemContent, VListItemTitle, VListGroup, VListItemAction, VList, VListItemSubtitle, VListItemAvatar, VCardActions } from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

const vuetify = new Vuetify();
Vue.use(VueAxios, axios)
Vue.use(VueRouter)


document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    components: { VCard, VRating, VToolbar, VBtn, VApp, VListItem, VListItemContent, VListItemTitle, VListGroup, VListItemAction, VList, VListItemSubtitle, VListItemAvatar, VCardActions },
    vuetify,
    directives: {
      Ripple,
    },
    router
  }).$mount('#vue-app')
})