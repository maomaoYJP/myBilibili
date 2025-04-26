<template>
  <div class="lists-container">
    <div class="title">合集列表</div>
    <div class="lists">
      <VideoCardGroup>
        <VideoCard v-for="item in list" :video-card="item">
          <template #img>
            <MyImage :src="item.img" @click="listClick"></MyImage>
          </template>
          <template #desc>
            <div class="create-time">创建于：{{ item.createTime }}</div>
          </template>
        </VideoCard>
      </VideoCardGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyImage from "@/components/my-image/index.vue";
import { getList } from "@/api/video";
import type { video } from "@/api/video/type";
const list = ref<video[]>([]);

onMounted(async () => {
  const res = await getList(1, 8);
  list.value = res.data.videoList;
});

const listClick = () => {};
</script>

<style scoped lang="scss">
.lists-container {
  width: 100%;
  .title {
    margin-top: $l-margin;
    font-size: $m-text-size;
  }
  .lists {
    margin-top: $l-margin;
    .video-card {
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 4px;
      cursor: pointer;
    }
    .create-time {
      margin-top: $l-margin;
      color: $text-color-deep;
    }
  }
}
</style>
