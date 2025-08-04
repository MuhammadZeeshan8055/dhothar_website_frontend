import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Introduction from '../pages/Introduction.vue'
import Industries_details from '../pages/Industries_details.vue'
import Our_services from '../pages/Our_services.vue'
import Mission from '../pages/Mission.vue'
import Vision from '../pages/Vision.vue'
import Values from '../pages/Values.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/introduction', name: 'introduction', component: Introduction },
  { path: '/industries_details', name: 'industries_details', component: Industries_details },
  { path: '/our_services', name: 'our_services', component: Our_services },
  { path: '/mission', name: 'mission', component: Mission },
  { path: '/vision', name: 'vision', component: Vision },
  { path: '/values', name: 'values', component: Values },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
