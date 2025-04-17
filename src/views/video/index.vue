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
        <div class="video-like"></div>
        <div class="video-tag"></div>
        <div class="comment"></div>
      </div>
    </div>
    <div class="right-aside">
      <div class="user">
        <UserShow :src="avatar"></UserShow>
      </div>
      <div class="danmu-list"></div>
      <div class="recommend-video"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserShow from "@/components/user-show/index.vue";
import Player from "@/components/player/index.vue";
import avatar from "@/assets/images/avatar.jpg";
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.video-container {
  display: flex;
  width: $content-width;
  margin: 0 auto;
  background-color: $p-bg-color-deep;
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
      height: 500px;
      .video {
        width: 100%;
        height: 100%;
      }
    }
  }

  .right-aside {
    flex: 1;
    display: flex;
    height: 500px;
    padding: $l-padding;
    .user {
      height: 100px;
    }
  }
}
</style>
