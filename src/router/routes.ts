import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'page1', component: () => import('components/ThePage1.vue') },
      { path: 'page2', component: () => import('components/ThePage2.vue') },
      { path: 'page3', component: () => import('components/ThePage3.vue') },
      { path: 'page4', component: () => import('components/ThePage4.vue') },
      { path: 'page5', component: () => import('components/ThePage5.vue') },
      { path: 'ThePage1-ö', component: () => import('components/ThePage1-ö.vue') },
      { path: 'ThePage2-ö', component: () => import('components/ThePage2-ö.vue') },
      { path: 'ThePage5-ö', component: () => import('components/ThePage5-ö.vue') },
      { path: 'ThePage6-ö', component: () => import('components/ThePage6-ö.vue') }
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
