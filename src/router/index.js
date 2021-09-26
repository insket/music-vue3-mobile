import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend'

const routes = [
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: () => import('@/views/singer')
  },
  {
    path: '/top-list',
    component: () => import('@/views/topList')
  },
  {
    path: '/search',
    component: () => import('@/views/search')
  },
  {
    path: '/',
    redirect: '/recommend'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
