<template>
  <ElConfigProvider :locale="zhCn">
    <div class="app-container">
      <Header />
      <RouterView />
    </div>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/header/index.vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import useUserStore from "@/stores/modules/user";

const userStore = useUserStore();
import { getUserInfo } from "@/api/user";

onMounted(async () => {
  const token = localStorage.getItem("token");
  if (token) {
    userStore.setToken(token);
    const userInfo = await getUserInfo();
    if (userInfo.code === 200) {
      userStore.userInfo = userInfo.data;
    }
  }
});
</script>

<style scoped lang="scss">
.app-container {
  position: relative;
  min-width: $min-width;
  max-width: $max-width;
  margin: 0 auto;
  background-color: $p-bg-color;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>
