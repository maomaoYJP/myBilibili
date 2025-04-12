<template>
  <div style="height: 10000px">
    <img class="banner" src="@/assets/images/banner.jpg" alt="banner" />
    <el-button type="primary" size="default" @click="handleClick">
      测试
    </el-button>
  </div>
</template>

<script setup lang="ts">
import request from "@/utils/request";

const handleClick = () => {
  request.get("/api/login").then((res) => {
    console.log(res);
  });
};
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 180px;
  object-fit: cover;
  position: absolute;
  top: 0;
  z-index: -1;
}
</style>
