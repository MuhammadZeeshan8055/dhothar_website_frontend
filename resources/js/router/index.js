import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Introduction from '../pages/Introduction.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/introduction', name: 'introduction', component: Introduction }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
