<template>
  <div class="video-card-container">
    <el-image
      class="video-card"
      fit="cover"
      :src="videoCard.img"
      alt="carousel"
      :lazy="true"
    >
      <template #placeholder>
        <div class="video-card-placeholder">
          <div class="loading-animation"></div>
        </div>
      </template>
    </el-image>
    <div class="video-card-info">
      <span class="video-card-title">{{ videoCard.title }}</span>
      <div class="user-info">
        <span class="user-name">{{ videoCard.user.username }}</span>
        <span class="user-time"> · {{ videoCard.createTime }}</span>
      </div>
      <div class="video-data">
        <div class="play-count">
          <i class="iconfont icon-bofang"></i>
          <span>123</span>
        </div>
        <div class="danmu-count">
          <i class="iconfont icon-danmushu"></i>
          <span style="margin-left: 4px">456</span>
        </div>
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
@use "@/assets/iconfont/iconfont.css" as *;
.video-card-container {
  width: 100%;
  height: 100%;
  display: flex;
  margin: $l-margin 0;
  .video-card {
    width: 50%;
    height: 100%;
    position: relative;
    border-radius: 4px;
  }
  .video-card-info {
    margin-left: $m-margin;
    font-size: 14px;
    color: $text-color-deep;
    .user-info {
      margin-top: $s-margin;
    }
    .video-data {
      margin-top: $s-margin;
      display: flex;
      .danmu-count {
        margin-left: $s-margin;
      }
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
