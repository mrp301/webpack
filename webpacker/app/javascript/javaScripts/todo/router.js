import Vue from 'vue';
import VueRouter from 'vue-router';
import hoge from './components/hoge.vue';
import fuga from './components/fuga.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/todo', component: hoge },
    { path: '/todo/fuga', component: fuga },
  ],
});

export default router;