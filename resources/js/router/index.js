import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Introduction from '../pages/Introduction.vue'
import Industries_details from '../pages/Industries_details.vue'
import Our_services from '../pages/Our_services.vue'
import Mission from '../pages/Mission.vue'
import Vision from '../pages/Vision.vue'
import Values from '../pages/Values.vue'
import Why_dhothar from '../pages/Why_dhothar.vue'
import Company_organizational_chart from '../pages/Company_organizational_chart.vue'
import Company_offices from '../pages/Company_offices.vue'
import Europe_process from '../pages/Europe_process.vue'
import Kingdom_saudi from '../pages/Kingdom_saudi.vue'
import Uae_qatar_etc from '../pages/Uae_qatar_etc.vue'
import Sourcing_matrix from '../pages/Sourcing_matrix.vue'
import Terms_conditions from '../pages/Terms_conditions.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/introduction', name: 'introduction', component: Introduction },
  { path: '/industries_details', name: 'industries_details', component: Industries_details },
  { path: '/our_services', name: 'our_services', component: Our_services },
  { path: '/mission', name: 'mission', component: Mission },
  { path: '/vision', name: 'vision', component: Vision },
  { path: '/values', name: 'values', component: Values },
  { path: '/why_dhothar', name: 'why_dhothar', component: Why_dhothar },
  { path: '/company_organizational_chart', name: 'company_organizational_chart', component: Company_organizational_chart },
  { path: '/company_offices', name: 'company_offices', component: Company_offices },
  { path: '/europe_process', name: 'europe_process', component: Europe_process },
  { path: '/kingdom_saudi', name: 'kingdom_saudi', component: Kingdom_saudi },
  { path: '/uae_qatar_etc', name: 'uae_qatar_etc', component: Uae_qatar_etc },
  { path: '/sourcing_matrix', name: 'sourcing_matrix', component: Sourcing_matrix },
  { path: '/terms_conditions', name: 'terms_conditions', component: Terms_conditions },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
