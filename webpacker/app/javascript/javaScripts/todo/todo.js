import Vue from 'vue';
import sample from './sample.vue';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    render: h => h(sample),
  });
});