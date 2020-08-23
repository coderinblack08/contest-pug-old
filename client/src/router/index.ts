import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const redirectOnAuth = async (_from: any, _to: any, next: any) => {
  try {
    await store.dispatch('auth/authenticate');
    next('/dashboard');
  } catch (error) {
    next();
  }
};

const redirectOnNotAuth = async (_from: any, _to: any, next: any) => {
  try {
    await store.dispatch('auth/authenticate');
    next();
  } catch (error) {
    next('/login');
  }
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: redirectOnAuth,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: redirectOnAuth,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    beforeEnter: redirectOnAuth,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: redirectOnNotAuth,
  },
  {
    path: '/contests',
    name: 'Contests',
    component: () => import('../views/Contests.vue'),
    beforeEnter: redirectOnNotAuth,
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    beforeEnter: redirectOnNotAuth,
  },
  {
    path: '/actions/create',
    name: 'Create',
    component: () => import('../views/actions/Create.vue'),
    beforeEnter: redirectOnNotAuth,
  },
  {
    path: '/contest/:id',
    name: 'Contest',
    component: () => import('../views/contest/Contest.vue'),
    beforeEnter: redirectOnNotAuth,
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
