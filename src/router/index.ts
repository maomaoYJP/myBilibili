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
    {
      path: "/user/:id",
      name: "user",
      component: () => import("@/views/user/index.vue"),
      redirect: (to) => {
        const { id } = to.params;
        return `/user/${id}/home`;
      },
      children: [
        {
          path: "/user/:id/home",
          name: "userHome",
          component: () => import("@/views/user/home/index.vue"),
        },
        {
          path: "/user/:id/dynamic",
          name: "userDynamic",
          component: () => import("@/views/user/dynamic/index.vue"),
        },
        {
          path: "/user/:id/upload/video",
          name: "userUploadVideo",
          component: () => import("@/views/user/upload-video/index.vue"),
        },
        {
          path: "/user/:id/lists",
          name: "userLists",
          component: () => import("@/views/user/lists/index.vue"),
        },
        {
          path: "/user/:id/favlist",
          name: "userFavlist",
          component: () => import("@/views/user/favlist/index.vue"),
        },
      ],
    },
  ],
});

export default router;
