<template>
  <div
    class="video-coin-container"
    :class="{ active: isActive }"
    @click="doClick"
  >
    <i class="iconfont icon-yingbi"></i>
    <span>56</span>
  </div>
</template>

<script setup lang="ts">
const isActive = ref(false);
const doClick = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
@use "sass:color";
.video-coin-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: $text-color-deep;
  transition: all 0.2s;
  span {
    margin-left: $s-margin;
  }
  i {
    font-size: 30px;
  }
  &:hover {
    color: color.adjust($text-color-deep, $lightness: -20%);
  }
  &.active {
    color: #fb7299;
  }
}
</style>
