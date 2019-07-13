import Vue from 'vue'
import VueRouter from 'vue-router'
import backstage from './backstage'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('views/About.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('views/User.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('views/Error.vue')
    },
    {
      path: '/login',
      name: 'login',
      props: {
        loginPage: true
      },
      component: () => import('views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      props: {
        loginPage: false
      },
      component: () => import('views/Login.vue')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('views/Article.vue')
    },
    ...backstage
  ]
})
