<template>
  <div class="video-list">
    <div class="video-card-item" v-for="(item, index) in videoCardList">
      <VideoCard :key="index" :videoCard="item"> </VideoCard>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  videoCardList: {
    img: string;
    title: string;
    createTime: string;
    user: {
      id: string;
      username: string;
    };
  }[];
}>();
</script>

<style scoped lang="scss">
.video-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  overflow: hidden;
  gap: $s-margin;
  .video-card-item {
    height: 200px;
  }
}
</style>
