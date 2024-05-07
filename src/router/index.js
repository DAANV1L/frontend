import Vue from 'vue';
import Router from 'vue-router';
import HomeView from "../views/homeModule.vue";
import RegisterView from "../views/registerModule.vue";
import MainModule from "../views/MainModule.vue";

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: HomeView
  },
  {
    path: '/register',
    component: RegisterView
  },
  {
    path: '/',
    name: 'main',
    component: MainModule
  }
];

const router = new Router({
  mode: 'history', // Use history mode
  routes
});

export default router;
