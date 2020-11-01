import Vue from 'vue';
import sample from './sample.vue';
import router from './router';

const app = new Vue({
  router,
  el: '#app',
  render: h => h(sample),
});