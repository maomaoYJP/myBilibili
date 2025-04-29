<template>
  <div class="dynamic-container">
    <div class="main">
      <div class="dynamic-card">
        <div class="dynamic-card-container">
          <div class="left">
            <MyImage
              class="avatar"
              :src="userStore.userInfo.avatar"
              :height="avatarHeight"
              :width="avatarHeight"
            ></MyImage>
          </div>
          <div class="main">
            <div class="name"><a href="#">毛毛</a></div>
            <div class="time">2025-04-19</div>
            <div class="introduce">发了一个动态</div>
            <div class="video">
              <VideoCard class="video-card" v-if="list" :videoCard="list">
                <template #img>
                  <MyImage class="img" :src="list.img"> </MyImage>
                </template>
                <template #desc>
                  <div class="video-card-info">
                    <div class="video-card-title">
                      <a :href="'/video/123'">视频标题{{ list.title }}</a>
                    </div>

                    <div class="user-info">
                      <a :href="'/video/123'">
                        <span class="user-name"
                          >视频简介： 简介视频简介： 简介视频简介：
                          简介视频简介： 简介视频简介： 简介视频简介：
                          简介视频简介： 简介视频简介： 简介视频简介：
                          简介视频简介： 简介视频简介： 简介视频简介：
                          简介视频简介： 简介视频简介： 简介</span
                        >
                      </a>
                    </div>
                  </div>
                </template>
              </VideoCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="userinfo">
        <div class="title">个人资料</div>
        <div class="item">{{ userStore.userInfo.username }}</div>
        <div class="item">{{ userStore.userInfo.userId }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyImage from "@/components/my-image/index.vue";
import VideoCard from "@/components/video-card/index.vue";
import useUserStore from "@/stores/modules/user";
const userStore = useUserStore();
const avatarHeight = 50;

import { getList } from "@/api/video";
import type { video } from "@/api/video/type";

const list = ref<video>();

onMounted(async () => {
  const res = await getList(1, 8);
  list.value = res.data.videoList[0];
});
</script>

<style scoped lang="scss">
.dynamic-container {
  width: 100%;
  display: flex;
  margin-top: $l-margin;
  .main {
    flex: 5;
    .dynamic-card {
      margin: 0 $l-margin;
      .dynamic-card-container {
        width: 100%;
        display: flex;
        padding: $s-padding;
        border: 1px solid $p-bg-color-deep;
        border-radius: 4px;
        .left {
          margin: 0 $l-margin;
          .avatar {
            border-radius: 50%;
          }
        }
        .main {
          flex: 1;
          .name {
            font-size: $m-text-size;
            color: $text-color-deep;
          }
          .time {
            color: $text-color-deep;
            margin: $s-margin 0;
          }
          .video {
            margin-top: $s-margin;
            .video-card {
              flex-direction: row;
              height: 100%;
              .img {
                width: 250px;
                height: 150px;
                border-radius: 4px;
              }
              .video-card-info {
                flex: 1;
                font-size: 14px;
                color: $text-color-deep;
                padding: $m-margin;
                .video-card-title {
                  color: $text-color-dark;
                  font-size: $s-text-size;
                }
                .user-info {
                  margin-top: $s-margin;
                }
              }
            }
          }
        }
      }
    }
  }
  .right-side {
    flex: 1;
    .userinfo {
      background-color: $p-bg-color-deep;
      border-radius: 6px;
      padding: $l-padding;
      .title {
        margin-bottom: $m-margin;
      }
      .item {
        color: $text-color-deep;
        margin-bottom: $s-margin;
      }
    }
  }
}
</style>
