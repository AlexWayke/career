import { createRouter, createWebHistory } from 'vue-router'
import AboutCompany from '../views/AboutCompany.vue'

const routes = [
  {
    path: '/',
    name:'AboutCompany',
    component: AboutCompany
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
