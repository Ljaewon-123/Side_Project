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
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
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