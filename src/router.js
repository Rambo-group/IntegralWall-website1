import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/download",
    name: "download",
    component: () => import("./views/Download.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("./views/Blog.vue"),
  },
  {
    path: "/question-answer",
    name: "question-answer",
    component: () => import("./views/question-answer.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  base: process.env.BASE_URL,
  routes,
});

export default router;
