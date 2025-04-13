<template>
  <div class="video-card-container">
    <el-image
      class="video-card"
      fit="cover"
      :src="videoCard.img"
      alt="carousel"
    />
    <div class="video-card-info">
      <span class="video-card-title">{{ videoCard.title }}</span>
      <div class="user-info">
        <span class="user-name">{{ videoCard.user.username }}</span>
        <span class="user-time"> · {{ videoCard.createTime }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  videoCard: {
    img: string;
    title: string;
    createTime: string;
    user: {
      id: string;
      username: string;
    };
  };
}>();
</script>

<style scoped lang="scss">
.video-card-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .video-card {
    border-radius: 4px;
  }
  .video-card-info {
    font-size: 14px;
    color: $text-color-deep;
    .user-info {
      margin-top: $s-margin;
    }
  }
}
</style>
