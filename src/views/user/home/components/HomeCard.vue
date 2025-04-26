<template>
  <div class="home-card-container">
    <div class="top">
      <RouterLink class="title" to="#">
        <span>视频</span>
        <span>·10</span>
      </RouterLink>
      <div class="btn">
        <div class="sort-btn">
          <slot name="sortBtn"></slot>
        </div>
        <div class="video-btn">
          <el-button size="default">播放全部</el-button>
          <el-button size="default" @click="moreClick">查看更多</el-button>
        </div>
      </div>
    </div>
    <div class="video-card">
      <VideoCardGroup :video-card-list="list"></VideoCardGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoCardGroup from "@/components/video-card/video-card-group.vue";
import type { video } from "@/api/video/type";
defineProps<{ list: video[] }>();

const emit = defineEmits(["moreClick"]);

const moreClick = () => {
  emit("moreClick");
};
</script>

<style scoped lang="scss">
.home-card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    align-items: center;
    .btn {
      flex: 1;
      display: flex;
      justify-content: space-between;
      margin-left: $l-margin;
    }
    .title {
      font-size: $m-text-size;
    }
  }
  .video-card {
    margin-top: $l-margin;
  }
}
</style>
