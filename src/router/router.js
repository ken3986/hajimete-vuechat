import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Chat from '../components/Chat/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      const redirect = to.query.redirect
      if(redirect) {
        next({
          path: `/${redirect}`
        });
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/channel/:cname',
    name: 'channel',
    component: Chat
  },

  {
    path: '*',

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
