import { createRouter, createWebHistory } from "vue-router";
import type { RouteLocationRaw } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: (to: RouteLocationRaw) => {
      return {
        path: "/home",
      };
    },
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/Home.vue"),
  },
  {
    name: "articles",
    path: "/articles",
    component: () => import("@/views/Articles.vue"),
  },
  {
    path: "/articles/work",
    component: () => import("@/views/Work/Index.vue"),
  },
  {
    name: "essays",
    path: "/essays",
    component: () => import("@/views/Essays.vue"),
  },
  {
    path: "/essays/work",
    component: () => import("@/views/Work/Index.vue"),
  },
  {
    name: "novels",
    path: "/novels",
    component: () => import("@/views/Novels.vue"),
  },
  {
    path: "/novels/work",
    component: () => import("@/views/Work/Index.vue"),
  },
  {
    name: "about",
    path: "/about",
    component: () => import("@/views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
