import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: 'Home' }
      },
      {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
      },
      {
        path: '/403',
        component: () => import('@/views/error-page/403'),
        hidden: true
      },
      {
        path: '/500',
        component: () => import('@/views/error-page/500'),
        hidden: true
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
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
