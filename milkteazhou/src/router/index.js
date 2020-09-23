import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/shoppcar',
    name: 'Shoppcar',
    component: () => import('../views/Shoppcar.vue')
  },
  {
    path: '/choiceness',
    name: 'Choiceness',
    component: () => import('../views/Choiceness.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
