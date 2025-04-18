<template>
  <el-image
    :style="{ width: `${height}px`, height: `${height}px` }"
    fit="cover"
    :lazy="lazy"
    :src="src"
  ></el-image>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    height?: number;
    width?: number;
    src: string;
    lazy?: boolean;
  }>(),
  {
    height: 50,
    width: 50,
    lazy: true,
  }
);
</script>

<style scoped lang="scss"></style>
