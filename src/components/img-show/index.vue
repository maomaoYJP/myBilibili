<template>
  <el-image
    :style="{ width: `${height}px`, height: `${height}px` }"
    fit="cover"
    :lazy="lazy"
    :src="src"
    :preview-src-list="previewSrcList"
  ></el-image>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    height?: number;
    width?: number;
    src: string;
    lazy?: boolean;
    preview?: boolean;
  }>(),
  {
    height: 50,
    width: 50,
    lazy: true,
  }
);

const previewSrcList = ref();

onMounted(() => {
  if (props.preview) {
    previewSrcList.value = [props.src];
  }
});
</script>

<style scoped lang="scss"></style>
