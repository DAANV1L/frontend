import Vue from 'vue';
import Router from 'vue-router';
import HomeView from "../views/homeModule.vue";
import RegisterView from "../views/registerModule.vue";

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/register',
    component: RegisterView
  }
];

const router = new Router({
  mode: 'history', // Use history mode
  routes
});

export default router;
