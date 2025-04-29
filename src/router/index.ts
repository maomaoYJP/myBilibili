import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/main-station/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/main-station/index.vue"),
      redirect: "/",
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/main-station/Home.vue"),
        },
        {
          path: "/video/:id",
          name: "video",
          component: () => import("@/views/main-station/video/index.vue"),
        },
        {
          path: "/user/:id",
          name: "user",
          component: () => import("@/views/main-station/user/index.vue"),
          redirect: (to) => {
            const { id } = to.params;
            return `/user/${id}/home`;
          },
          children: [
            {
              path: "/user/:id/home",
              name: "userHome",
              component: () =>
                import("@/views/main-station/user/home/index.vue"),
            },
            {
              path: "/user/:id/dynamic",
              name: "userDynamic",
              component: () =>
                import("@/views/main-station/user/dynamic/index.vue"),
            },
            {
              path: "/user/:id/upload/video",
              name: "userUploadVideo",
              component: () =>
                import("@/views/main-station/user/upload-video/index.vue"),
            },
            {
              path: "/user/:id/lists",
              name: "userLists",
              component: () =>
                import("@/views/main-station/user/lists/index.vue"),
            },
            {
              path: "/user/:id/favlist",
              name: "userFavlist",
              component: () =>
                import("@/views/main-station/user/favlist/index.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/ucenter",
      name: "ucenter",
      component: () => import("@/views/video-admin/index.vue"),
    },
  ],
});

export default router;
