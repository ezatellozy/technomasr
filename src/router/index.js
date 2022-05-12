import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import OurServices from '../views/OurServices.vue'
import Service from '../views/Service.vue'
import OurWorks from '../views/OurWorks.vue'
import TeamMember from '../views/TeamMember.vue'
import Contact from '../views/Contact.vue'
import Offers from '../views/Offers.vue'
import Work from '../views/Work.vue'
import TeamWork from '@/components/OurTeam.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/work',
    name: 'work',
    component: Work,
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
    path: '/service',
    name: 'service',
    component: Service,
  },
  {
    path: '/offers',
    name: 'offers',
    component: Offers,
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
  {
    path: '/teamWork',
    name: 'teamWork',
    component: TeamWork,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
