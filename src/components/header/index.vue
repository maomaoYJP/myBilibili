<template>
  <div class="header-container" :class="{ scrolled: scrolled }">
    <div class="left">
      <i class="iconfont icon-bilibili-line" style="font-size: 42px"></i>
      <span class="logo">首页</span>
    </div>
    <div class="center">
      <Search
        :searchHistory="searchHistory"
        :searchHot="searchHot"
        :class="{ scrolled: scrolled }"
      />
    </div>
    <div class="right">
      <div class="top-item">
        <el-avatar :size="40" :src="avatar" />
      </div>
      <div class="top-item">
        <el-icon size="30"><Message /></el-icon>
        <span>消息</span>
      </div>
      <div class="top-item">
        <el-icon size="30"><Star /></el-icon>
        <span>收藏</span>
      </div>
      <div class="top-item">
        <el-icon size="30"><Clock /></el-icon>
        <span>历史</span>
      </div>
      <div class="top-item">
        <el-icon size="30"><Edit /></el-icon>
        <span>创作中心</span>
      </div>
      <div class="top-item">
        <el-button class="upload-btn" size="large" icon="upload"
          >投稿</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from "@/components/search/index.vue";
import avatar from "@/assets/images/avatar.jpg";

const scrolled = ref(false);

const searchHistory = ref<string[]>(["1", "2", "3"]);
const searchHot = ref<string[]>([
  "十九日覅是否黑文化",
  "的房价肯定会咖啡馆和尼克",
  "3",
]);

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  });
});
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;

.header-container {
  color: $text-color-light;
  height: 70px;
  width: 100%;
  background-color: $p-bg-color;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $m-padding;
  &:hover {
    box-shadow: $p-hover-shadow;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    margin-left: $s-padding;
    font-size: 24px;
    font-weight: 400;
  }
  .center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .right {
    display: flex;
    .top-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 16px;
      cursor: pointer;
    }
    .upload-btn {
      background-color: #fb7299;
      border: none;
      color: $text-color-light;
    }
  }
}

.scrolled {
  background-color: $p-bg-color;
  box-shadow: $p-shadow;
  color: $text-color-dark;
}
</style>
