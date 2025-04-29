<template>
  <div class="ucenter-container">
    <UcenterHeader />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import UcenterHeader from "@/components/header/ucenter-header.vue";
</script>

<style scoped lang="scss">
.ucenter-container {
  position: relative;
  min-width: $min-width;
  max-width: $max-width;
  margin: 0 auto;
  background-color: $p-bg-color;
}
</style>
