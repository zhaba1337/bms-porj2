import { createRouter, createWebHistory } from 'vue-router'
import MyLayout from '../views/MyLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MyLayout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
