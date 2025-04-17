<template>
  <div class="video-container">
    <div class="top">
      <div class="title">
        <h1>落叶归根搞笑场面#赵本山</h1>
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
      <div class="user">
        <UserShow :src="avatar"></UserShow>
      </div>
    </div>
    <div class="main">
      <div class="video-area">
        <div class="video"></div>
        <div class="video-like"></div>
        <div class="video-tag"></div>
        <div class="comment"></div>
      </div>
      <div class="right-aside">
        <div class="danmu-list"></div>
        <div class="recommend-video"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserShow from "@/components/user-show/index.vue";
import avatar from "@/assets/images/avatar.jpg";
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.video-container {
  width: $content-width;
  margin: 0 auto;
  background-color: $p-bg-color-deep;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      margin: $l-margin;
      .video-data {
        display: flex;
        gap: $s-margin;
        color: $text-color-deep;
      }
    }
    .user {
      padding: $l-padding;
    }
  }
}
</style>
