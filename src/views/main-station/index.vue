<template>
  <div class="main-station-container">
    <Header />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/header/index.vue";
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
.main-station-container {
  position: relative;
  min-width: $min-width;
  max-width: $max-width;
  margin: 0 auto;
  background-color: $p-bg-color;
}
</style>
