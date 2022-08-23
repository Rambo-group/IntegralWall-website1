import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Navigation",
    component: () => import("./components/Navigation.vue"),
    children: [
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
      }
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
