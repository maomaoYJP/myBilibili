import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/video/:id",
      name: "video",
      component: () => import("@/views/video/index.vue"),
    },
  ],
});

export default router;
