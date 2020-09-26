import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/menu',
		name: 'Menu',
		component: () => import('../views/Menu.vue')
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
	},
	{
		path: '/payment',
		name: 'Payment',
		component: () => import('../views/Payment.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes
})

export default router
