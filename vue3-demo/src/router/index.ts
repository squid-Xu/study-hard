import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('../views/form.vue')
    },
    {
      path: '/lifecyc',
      name: 'Lifecyc',
      component: () => import('../views/lifecyc.vue')
    },
    {
      path: '/20240322',
      name: '20240322',
      component: () => import('../views/20240322.vue')
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: () => import('../views/provide-inject/list.vue')
    },
    {
      path: '/composables',
      name: 'composables',
      component: () => import('../views/composables/list.vue')
    }
  ]
})

export default router
