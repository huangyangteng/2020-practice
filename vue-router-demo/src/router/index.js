import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // 路由懒加载
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/topic/:id",
    name: "Topic",
    component: () => import("../views/Topic.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue"),
    children: [
      {
        path: "/news/today",
        name: "TodaysNews",
        component: () => import("../views/News/Today.vue"),
      },
      {
        path: "/news/history",
        name: "HistoryNews",
        component: () => import("../views/News/History.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
