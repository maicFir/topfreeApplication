import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import(/* webpackChunkName: "home.index" */ '@/pages/home/Index.vue');

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});
export default router;
