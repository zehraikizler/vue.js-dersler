import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "@/views/HomeComp"
// import About from "@/views/AboutComp"

const routes = [
  {
    name: "HomePage",
    path: "/",
    // component : Home
    component: () => import("@/views/HomeComp"),
  },
  {
    name: "AboutPage",
    path: "/hakkimda",
    // component : About
    component: () => import("@/views/AboutComp"),
  },
  {
    name: "DetailPage",
    path: "/detay/:userID",
    component: () => import("@/views/DetailsComp"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
