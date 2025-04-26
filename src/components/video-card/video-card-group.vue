<template>
  <div class="video-list">
    <div class="video-card-item" v-for="(item, index) in videoCardList">
      <VideoCard :key="index" :videoCard="item">
        <template #desc>
          <div class="video-card-info">
            <a :href="'/video/123'" class="video-card-title">{{
              item.title
            }}</a>
            <div class="user-info">
              <a :href="'/user/' + item.user.id">
                <span class="user-name">{{ item.user.username }}</span>
                <span class="user-time"> · {{ item.createTime }}</span>
              </a>
            </div>
          </div>
        </template>
      </VideoCard>
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
    .video-card-info {
      font-size: 14px;
      color: $text-color-deep;
      .user-info {
        margin-top: $s-margin;
      }
    }
  }
}
</style>
