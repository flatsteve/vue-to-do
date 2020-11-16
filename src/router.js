import Vue from "vue";
import Router from "vue-router";

import store from "@/store/store";
import Todos from "@/views/Todos.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "login",
    },
    {
      path: "/",
      redirect: "login",
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/todos",
      name: "todos",
      component: Todos,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = store.state.user;

  const requiresAuth = to.matched.some(
    (routeRecord) => routeRecord.meta.requiresAuth
  );

  if (requiresAuth && !currentUser) {
    return next("login");
  }

  if (!requiresAuth && currentUser) {
    return next("todos");
  }

  next();
});

export default router;
