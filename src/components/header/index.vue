<template>
  <div class="header-container" :class="{ scrolled: scrolled }">
    <div class="left">
      <span class="logo">首页</span>
    </div>
    <div class="center">
      <Search :searchHistory="searchHistory" :searchHot="searchHot" />
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import Search from "@/components/search/index.vue";

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
.header-container {
  color: $text-color-light;
  height: 60px;
  width: 100%;
  background-color: $p-bg-color;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: $m-padding;
  &:hover {
    box-shadow: $p-hover-shadow;
  }
  .logo {
    font-size: 24px;
    font-weight: 400;
  }
}

.scrolled {
  background-color: $p-bg-color;
  box-shadow: $p-shadow;
}
</style>
