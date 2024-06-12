import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/smic',
      name: 'smic',
      component: () => import('../views/SmicView.vue')
    },
    {
      path: '/retraite',
      name: 'retraite',
      component: () => import('../views/RetraiteView.vue')
    },
    {
      path: '/agriculture',
      name: 'agriculture',
      component: () => import('../views/AgricultureView.vue')
    },
    {
      path: '/santé',
      name: 'santé',
      component: () => import('../views/SanteView.vue')
    },
    {
      path: '/taxer',
      name: 'taxer',
      component: () => import('../views/TaxerView.vue')
    },
    {
      path: '/gel',
      name: 'gel',
      component: () => import('../views/GelView.vue')
    },
    {
      path: '/extreme-gauche',
      name: 'extreme-gauche',
      component: () => import('../views/ExtremeGaucheView.vue')
    }
  ]
})

export default router
