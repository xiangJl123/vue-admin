import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  // 重定向到login
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index")
  },
  {
    path: "/console",
    name: "Console",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/console/index")
  },
];

const router = new VueRouter({
  routes
});

export default router;
