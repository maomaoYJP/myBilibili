<template>
  <div class="video-container">
    <div class="left-main">
      <div class="title">
        <span class="head-title">落叶归根搞笑场面#赵本山</span>
        <div class="video-data">
          <div class="play-count">
            <i class="iconfont icon-bofang"></i>
            <span>123</span>
          </div>
          <div class="danmu-count">
            <i class="iconfont icon-danmushu"></i>
            <span style="margin-left: 4px">456</span>
          </div>
          <span class="video-time">2024-08-03 20:33:12</span>
        </div>
      </div>
      <div class="video-area">
        <div class="video">
          <Player></Player>
        </div>
        <div class="video-operation">
          <Operation><i class="iconfont icon-good"></i></Operation>
          <Operation>
            <i class="iconfont icon-yingbi"></i>
          </Operation>
          <Operation><i class="iconfont icon-shoucang"></i></Operation>
        </div>
        <el-divider />
        <div class="video-tag">
          <el-tag type="info">Tag 3</el-tag>
          <el-tag type="info">Tag 3</el-tag>
          <el-tag type="info">Tag 3</el-tag>
        </div>
        <el-divider />
        <div class="comment">
          <Comment :commentPages="videoComments"></Comment>
          <div class="load-more-container" ref="loadMore">
            <div class="load-more"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-aside">
      <div class="user">
        <UserShow :src="avatar"></UserShow>
      </div>
      <div class="danmu-list">
        <DanMuList></DanMuList>
      </div>
      <div class="recommend-video">
        <VideoCard
          v-for="video in recommendList"
          :key="video.title"
          :videoCard="video"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserShow from "@/components/user-show/index.vue";
import Player from "@/components/player/index.vue";
import DanMuList from "./components/DanMuList.vue";
import avatar from "@/assets/images/avatar.jpg";
import Operation from "@/components/operation/index.vue";
import Comment from "./components/comment/comment.vue";

import { getRecommend, getVideoComment } from "@/api/video";
import type { videoCommentResponse, video } from "@/api/video/type";
import VideoCard from "@/components/video-card/card-recommend.vue";

const recommendList = ref<video[]>([]);
const videoComments = ref<videoCommentResponse["data"]>();
const loadMore = ref<HTMLDivElement | null>(null);
const currentPage = ref(1);

import useSettingStore from "@/stores/modules/setting";
const settingStore = useSettingStore();

onMounted(async () => {
  settingStore.videoSetting();
  const res3 = await getRecommend();
  recommendList.value = res3.data;
  const result = await getVideoComment(currentPage.value, 10);
  videoComments.value = result.data;
  if (loadMore.value) {
    observer.observe(loadMore.value);
  }
});

//配置加载更多
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const callback = (entries: any, observer: any) => {
  entries.forEach(async (entry: any) => {
    if (entry.isIntersecting) {
      // 加载更多
      currentPage.value += 1;
      const result = await getVideoComment(currentPage.value, 10);
      const { pageSize, totalRecords, comments } = result.data;
      videoComments.value!.currentPage = result.data.currentPage;
      videoComments.value!.pageSize = pageSize;
      videoComments.value!.totalRecords = totalRecords;
      videoComments.value!.comments =
        videoComments.value!.comments.concat(comments);
    }
  });
};

const observer = new IntersectionObserver(callback, options);
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.video-container {
  display: flex;
  width: $content-width;
  margin: 0 auto;
  .left-main {
    flex: 2;
    margin: $l-margin;
    .title {
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .head-title {
        font-size: $l-text-size;
      }
      .video-data {
        display: flex;
        gap: $s-margin;
        margin-top: $l-margin;
        color: $text-color-deep;
      }
    }
    .video-area {
      .video {
        width: 100%;
        height: 500px;
      }
      .video-operation {
        margin-top: $l-margin;
        display: flex;
        align-items: center;
        gap: 48px;
        i {
          font-size: 30px;
        }
      }
      .video-tag {
        display: flex;
        gap: 8px;
      }
      .comment {
        width: 100%;
        .load-more-container {
          width: 100%;
          height: 50px;
          position: relative;
          .load-more {
            position: absolute;
            width: 30px;
            height: 30px;
            left: 50%;
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
        }
      }
    }
  }

  .right-aside {
    display: flex;
    width: 400px;
    flex-direction: column;
    padding: $l-padding;
    .user {
      height: 100px;
    }
    .danmu-list {
      height: 500px;
    }
    .recommend-video {
      width: 100%;
      height: 120px;
    }
  }
}
</style>
