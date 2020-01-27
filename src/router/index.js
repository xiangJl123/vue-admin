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
    redirect: "index",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Layout/index"),
      children: [{
        path: "/index",
        name: "index",
        component: () =>
                      import("../views/console/index")
        // meta: { title: "病种", icon: "table" }
      }]
  }
];

const router = new VueRouter({
  routes
});

export default router;
