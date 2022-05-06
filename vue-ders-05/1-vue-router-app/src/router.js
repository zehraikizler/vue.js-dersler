import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomePage"),
  },
  {
    name: "NewBookMark",
    path: "/newbook",
    component: () => import("@/views/NewBookMark"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
