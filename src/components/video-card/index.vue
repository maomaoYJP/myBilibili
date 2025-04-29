<template>
  <div class="video-card-container">
    <slot name="img">
      <MyImage class="img" :src="videoCard.img" @click="toVideo"> </MyImage>
    </slot>

    <slot name="desc" :video="videoCard">
      <div class="video-card-info">
        <a :href="'/video/123'" class="video-card-title">{{
          videoCard.title
        }}</a>
        <div class="user-info">
          <a :href="'/user/' + videoCard.user.id">
            <span class="user-name">{{ videoCard.user.username }}</span>
            <span class="user-time"> · {{ videoCard.createTime }}</span>
          </a>
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import MyImage from "@/components/my-image/index.vue";
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
  router.push({ path: `/video/${1313}` });
};
</script>

<style scoped lang="scss">
.video-card-container {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  .img {
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
