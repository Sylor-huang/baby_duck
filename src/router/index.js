import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: 'Baby Duck' }
      },
      {
        path: '/white_lists',
        name: 'White Lists',
        component: () => import('@/views/home/WhiteLists'),
        meta: { title: 'White Lists' }
      }
    ]
  }, {
    path: '/languages',
    component: Layout,
    name: 'Language',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'Language'
    },
    children: [
      {
        path: '/chinese',
        name: 'Chinese',
        meta: { title: 'Chinese' }
      },
      {
        path: '/english',
        name: 'English',
        meta: { title: 'English' }
      }
    ]
  }

]

export const asyncRoutes = []

const router = createRouter({
  history: createWebHashHistory('/baby_duck/'),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
