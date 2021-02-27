import { createRouter, createWebHistory } from '@ionic/vue-router';

import Landing from '../pages/Landing.vue'

const routes = [
  {
    path: '/',
    redirect: '/landing'
  },
  {
    path: '/landing',
    component: Landing
  },
  {
    path: '/details/:id',
    component: () => import('../pages/Details.vue')
  },
  {
    path: '/traimolo',
    component: () => import('../pages/TraimoloLanding.vue')
  },
  {
    path: '/traimogo',
    component: () => import('../pages/TraimogoLanding.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
