import Header from '@/components/header/index.vue';
<template>
  <div class="comment-container">
    <div class="head">
      <div class="title">
        <span class="title-name">评论</span>
        <span class="comment-count">{{ props.commentPages.totalRecords }}</span>
      </div>
      <div class="category">
        <RouterLink :to="'#'">最热</RouterLink>
        <div class="divider"></div>
        <RouterLink :to="'#'">最新</RouterLink>
      </div>
    </div>
    <div class="comment-box">
      <div class="video-comment-input">
        <VideoCommentInput></VideoCommentInput>
      </div>
      <div class="comment-show">
        <CommentShow :comments="props.commentPages.comments"></CommentShow>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoCommentInput from "./components/video-comment-input.vue";
import CommentShow from "./components/comment-show.vue";
import type { videoCommentResponse } from "@/api/video/type";

const props = withDefaults(
  defineProps<{ commentPages?: videoCommentResponse["data"] }>(),
  {
    commentPages: () => ({
      totalRecords: 0,
      currentPage: 1,
      pageSize: 10,
      comments: [],
    }),
  }
);
</script>

<style scoped lang="scss">
.comment-container {
  width: 100%;
  .head {
    display: flex;
    align-items: center;
    .title {
      display: flex;
      align-items: center;
      .title-name {
        font-size: $m-text-size;
      }
      .comment-count {
        margin-left: $s-margin;
        color: $text-color-deep;
      }
    }
    .category {
      margin-left: 40px;
      .divider {
        display: inline-block;
        height: 11px;
        border-left: 1px solid $text-color-deep;
        margin: 0 $m-margin;
      }
    }
  }
  .comment-box {
    width: 100%;
    .video-comment-input {
      margin-top: $l-margin;
    }
    .comment-show {
      margin-top: $l-margin;
    }
  }
}
</style>
