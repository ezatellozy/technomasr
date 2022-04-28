import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import OurServices from '../views/OurServices.vue'
import OurWorks from '../views/OurWorks.vue'
import TeamMember from '../views/TeamMember.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUs,
  },
  {
    path: '/services',
    name: 'services',
    component: OurServices,
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: Contact,
  },
  {
    path: '/our-works',
    name: 'our-works',
    component: OurWorks,
  },
  {
    path: '/teamMembers',
    name: 'teamMember',
    component: TeamMember,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
