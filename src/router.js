import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  if(requiresAuth && !currentUser) {
    next('login');
  } else {
    next();
  }
});

export default router;