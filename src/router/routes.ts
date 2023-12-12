import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'page1c', component: () => import('components/ThePage1c.vue') },
      { path: 'page2c', component: () => import('components/ThePage2c.vue') },
      { path: 'page3c', component: () => import('components/ThePage3c.vue') },
      { path: 'page4c', component: () => import('components/ThePage4c.vue') },
      { path: 'page5c', component: () => import('components/ThePage5c.vue') },
      { path: 'page1ö', component: () => import('components/ThePage3ö.vue') },
      { path: 'page2ö', component: () => import('components/ThePage4ö.vue') },
      { path: 'page3ö', component: () => import('components/ThePage5ö.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
