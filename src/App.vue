<template>
  <div class="app-container">
    <Header />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/header/index.vue";
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
  box-sizing: border-box;
}
</style>
