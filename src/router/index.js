import Vue from 'vue';
import Router from 'vue-router';
import LoginView from "../views/LoginModule.vue";
import RegisterView from "../views/registerModule.vue";
import MainModule from "../views/MainModule.vue";

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
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
