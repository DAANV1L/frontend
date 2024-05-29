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
    name: 'register',
    component: RegisterView
  },
  {
    path: '/',
    name: 'main',
    component: MainModule
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchModule.vue')
  },
  {
    path: '/location/:id',
    name: 'location',
    component: () => import('../views/LocationModule.vue')
  },
  {
    path: '/BookingConfirmation/:id',
    name: 'BookingConfirmation',
    component: () => import('../views/BookingConfirmationModule.vue')
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: () => import('../views/BookingsModule.vue')
  },
  {
    path: '/profile',
    name: 'account',
    component: () => import('../views/AccountModule.vue')
  },
  {
    path: '/personallocations',
    name: 'personallocations',
    component: () => import('../views/PersonalLocationsModule.vue')
  },
  {
    path: '/personallocationsx/:id',
    name: 'personallocationx',
    component: () => import('../views/PersonalLocationChange.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new Router({
  mode: 'history', // Use history mode
  routes
});

export default router;
