import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    redirect: '/about',
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/TestView.vue'),
  },
  
  {
    path: '/:path(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router