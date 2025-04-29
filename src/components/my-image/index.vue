<template>
  <el-image
    class="video-card"
    fit="cover"
    :src="src"
    alt="carousel"
    :lazy="lazy"
    @click="hendleClick"
    :style="{ width: `${height}px`, height: `${height}px` }"
  >
    <template #placeholder>
      <div class="video-card-placeholder">
        <div class="loading-animation"></div>
      </div>
    </template>
  </el-image>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
    lazy?: boolean;
    height?: number;
    width?: number;
  }>(),
  {
    lazy: true,
  }
);
const emit = defineEmits(["click"]);
const hendleClick = (e: any) => {
  emit("click", e);
};
</script>

<style scoped lang="scss">
.video-card {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
}
.video-card-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $p-bg-color-deep;
}

.loading-animation {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #409eff;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
