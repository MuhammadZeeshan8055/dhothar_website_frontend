import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Introduction from '../pages/Introduction.vue'
import Industries_details from '../pages/Industries_details.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/introduction', name: 'introduction', component: Introduction },
  { path: '/industries_details', name: 'industries_details', component: Industries_details },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
