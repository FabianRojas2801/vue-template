import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// createWebHashHistory instead of createWebHistory: the wails asset server
// only serves "/" (no SPA fallback for other paths - confirmed 404 on
// direct GET /about). Hash mode never sends the route path to the server,
// so reload, deep links and window.SetURL to a route all keep working.
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
