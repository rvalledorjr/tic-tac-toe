import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/lobby",
  },
  {
    path: "/lobby",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/play",
    component: () => import("@/views/TicTacToePlayPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
