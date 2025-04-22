<template>
  <div class="video-card-container">
    <el-image
      class="video-card"
      fit="cover"
      :src="videoCard.img"
      alt="carousel"
      :lazy="true"
      @click="toVideo"
    >
      <template #placeholder>
        <div class="video-card-placeholder">
          <div class="loading-animation"></div>
        </div>
      </template>
    </el-image>
    <div class="video-card-info">
      <a :href="'/video/123'" class="video-card-title">{{ videoCard.title }}</a>
      <div class="user-info">
        <a :href="'/user/' + videoCard.user.id">
          <span class="user-name">{{ videoCard.user.username }}</span>
          <span class="user-time"> · {{ videoCard.createTime }}</span>
        </a>
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
import { useRouter } from "vue-router";
const router = useRouter();
const toVideo = () => {
  router.push({ path: `video/${1313}` });
};
</script>

<style scoped lang="scss">
.video-card-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .video-card {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 4px;
    cursor: pointer;
  }
  .video-card-info {
    font-size: 14px;
    color: $text-color-deep;
    .user-info {
      margin-top: $s-margin;
    }
  }
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
