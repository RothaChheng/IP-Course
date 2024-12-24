import { createRouter, createWebHistory } from 'vue-router'

import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';

import Section1 from '../views/Section1.vue';
import Section2 from '../views/Section2.vue';

const routes = [
  {path: '/' , redirect:'/page1/section1'},
  {path: '/page1', name:'Page1', 
    component: Page1, 
    children:[{
      path: 'section1',
      name: 'Page1Section1',
      component: Section1,
    },
    {
      path: 'section2',
      name: 'Page1Section2',
      component: Section2,
    },
  ],
},
  {path: '/page2', name:'Page2', component: Page2,
    children: [
      {
        path: 'section1',
        name: 'Page2Section1',
        component: Section1,
      },
      {
        path: 'section2',
        name: 'Page2Section2',
        component: Section2,
      },
    ],
  },
  {path: '/page3', name:'Page3', component: Page3},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // [
  //   {
  //     path: '/page1',
  //     name: 'Page1',
  //     component: () => import('../views/Page1.vue'),
  //   },
  //   {
  //     path: '/page2',
  //     name: 'Page2',
  //     component: () => import('../views/Page2.vue'),
  //   },
  //   {
  //     path: '/page3',
  //     name: 'Page3',
  //     component: () => import('../views/Page3.vue'),
  //   },
  // ],
});

export default router
