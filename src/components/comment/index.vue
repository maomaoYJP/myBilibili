import Header from '@/components/header/index.vue';
<template>
  <div class="comment-container">
    <div class="head">
      <div class="title">
        <span class="title-name">评论</span>
        <span class="comment-count">10</span>
      </div>
      <div class="category">
        <RouterLink :to="'#'">最热</RouterLink>
        <div class="divider"></div>
        <RouterLink :to="'#'">最新</RouterLink>
      </div>
    </div>
    <div class="comment-box">
      <CommentBox></CommentBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommentBox from "./comment-box.vue";
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
}
</style>
