import VueRouter from 'vue-router';
import Home from '@/components/Home';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '*', component: Home },
  ],
});
