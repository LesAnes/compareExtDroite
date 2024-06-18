import { createRouter, createWebHistory } from 'vue-router'
import HomeComponentView from '../views/HomeComponentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponentView
    },
    {
      path: '/salaire-et-retraite',
      name: 'salaire-et-retraite',
      component: () => import('../views/SalaireRetraiteView.vue')
    },
    {
      path: '/prix',
      name: 'prix',
      component: () => import('../views/PrixView.vue')
    },
    {
      path: '/fiscalite',
      name: 'fiscalite',
      component: () => import('../views/FiscaliteView.vue')
    },
    {
      path: '/service-publics',
      name: 'services-publics',
      component: () => import('../views/ServicesPublicsView.vue')
    },
    {
      path: '/travail',
      name: 'travail',
      component: () => import('../views/TravailView.vue')
    },
    {
      path: '/agriculture',
      name: 'agriculture',
      component: () => import('../views/AgricultureView.vue')
    }
  ]
})

router.beforeEach((toRoute, fromRoute, next) => {
  // const routeNames = ['salaire-et-retraite', 'prix', 'fiscalite', 'service-publics', 'travail', 'agriculture']
  // if (toRoute.name === 'home') {
  //   next({ name: routeNames[Math.floor(Math.random() * routeNames.length)] })
  // } else {
  //   next()
  // }

  next()
})

export default router
