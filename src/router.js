import Vue from "vue";
import Router from "vue-router";
import * as firebase from "firebase/app";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "login"
    },
    {
      path: "/",
      redirect: "login"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/todo",
      name: "todo",
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;

  const requiresAuth = to.matched.some(
    routeRecord => routeRecord.meta.requiresAuth
  );

  if (requiresAuth && !currentUser) {
    return next("login");
  }

  if (!requiresAuth && currentUser) {
    return next("todo");
  }

  next();
});

export default router;
