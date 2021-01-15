import VueRouter from 'vue-router'
import Company from '../templete/company.vue'
import CompanyShow from '../compents/companyShow'

const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/dashboard' },
      { path: '/company', component: Company },
      { path: '/company/:id', component: CompanyShow },
      { path: '/talk' }
    ]
  })

export default router