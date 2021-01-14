import VueRouter from 'vue-router'
import Company from '../templete/company.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/dashboard' },
      { path: '/company', component: Company },
      { path: '/talk' }
    ]
  })

export default router