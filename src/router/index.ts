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
    name:"write",
    path:"/write",
    component: () => import("@/views/Write/Index.vue")
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/Home/Index.vue"),
  },
  {
    path: "/articles",
    component: () => import("@/views/Articles/Index.vue"),
    children: [
      {
        name: "articles",
        path: "",
        component: () => import("@/views/Articles/Articles.vue"),
      },
      {
        path: "work",
        component: () => import("@/views/Work/Index.vue"),
      },
    ],
  },
  {
    path: "/essays",
    component: () => import("@/views/Essays/Index.vue"),
    children: [
      {
        name: "essays",
        path: "",
        component: () => import("@/views/Essays/Essays.vue"),
      },
      {
        path: "work",
        component: () => import("@/views/Work/Index.vue"),
      },
    ],
  },
  {
    path: "/novels",
    component: () => import("@/views/Novels/Index.vue"),
    children: [
      {
        name: "novels",
        path: "",
        component: () => import("@/views/Novels/Novels.vue"),
      },
      {
        path: "work",
        component: () => import("@/views/Work/Index.vue"),
      },
    ],
  },
  {
    name: "about",
    path: "/about",
    component: () => import("@/views/About/Index.vue"),
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
