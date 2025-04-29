<template>
  <div class="ucenter-header-container">
    <div class="left" @click="toHome">
      <i class="iconfont icon-bilibili-line" style="font-size: 42px"></i>
      <span :to="'/'" class="logo">首页</span>
    </div>
    <div class="right">
      <MyImage class="avatar" :src="userStore.userInfo.avatar"></MyImage>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyImage from "@/components/my-image/index.vue";
import { useRouter } from "vue-router";
import useUserStore from "@/stores/modules/user";

const router = useRouter();
const userStore = useUserStore();

const toHome = () => {
  router.push({ path: `/` });
};
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.ucenter-header-container {
  color: $text-color-deep;
  height: 70px;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $m-padding;
  box-shadow: $p-hover-shadow;
  .left {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      margin-left: $s-padding;
      font-size: 24px;
      font-weight: 400;
      cursor: pointer;
    }
  }
  .right {
    .avatar {
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }
  }
}
</style>
