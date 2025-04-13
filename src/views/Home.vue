<template>
  <div style="height: 10000px">
    <img class="banner" src="@/assets/images/banner.jpg" alt="banner" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 180px;
  object-fit: cover;
  position: absolute;
  top: 0px;
}
.content {
  position: relative;
  z-index: 2;
}
</style>
