import { createRouter, createWebHashHistory } from 'vue-router';

import ZooView from './views/ZooView.vue';
import HomeView from './views/HomeView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ZooView,
      path: '/zooanimals',
    },
    {
      component: HomeView,
      path: '/',
    },
  ],
});
