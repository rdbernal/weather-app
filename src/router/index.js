import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/welcome",
    name: "Welcome",
    component: () => import("../views/WelcomePage.vue"),
  },
  {
    path: "/weather",
    name: "Weather",
    component: () => import("../views/Weather.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
