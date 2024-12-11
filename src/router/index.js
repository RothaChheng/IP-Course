import { createRouter, createWebHistory } from 'vue-router'

import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';

const routes = [
  {path: '/' , redirect:'/page1'},
  {path: '/page1', name:'Page1', component: Page1},
  {path: '/page2', name:'Page2', component: Page2},
  {path: '/page3', name:'Page3', component: Page3},

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page1',
      name: 'Page1',
      component: () => import('../views/Page1.vue'),
    },
    {
      path: '/page2',
      name: 'Page2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page2.vue'),
    },
    {
      path: '/page3',
      name: 'Page3',
      component: () => import('../views/Page3.vue'),
    },
  ],
})

export default router
