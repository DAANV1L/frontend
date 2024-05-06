import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Import the router instance

new Vue({
  el: '#app',
  router, // Pass the router instance to Vue
  render: h => h(App)
});
