import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Import the router instance
import vueconf from '../vue.config.js';

new Vue({
  el: '#app',
  router, // Pass the router instance to Vue,
  vueconf,
  render: h => h(App)
});
