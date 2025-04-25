<template>
  <div class="upload-video-container">
    <div class="header">
      <div class="title">Ta的视频</div>
      <div class="sort">
        <SortButton @click="sortBtnClick">
          <SortButtonItem :label="'最新发布'" name="new"></SortButtonItem>
          <SortButtonItem :label="'最多播放'" name="most"></SortButtonItem>
          <SortButtonItem :label="'最多收藏'" name="fav"></SortButtonItem>
        </SortButton>
      </div>
    </div>
    <div class="video-list"></div>
    <div class="page"></div>
  </div>
</template>

<script setup lang="ts">
import SortButton from "@/components/sort-button/sort-button.vue";
import SortButtonItem from "@/components/sort-button/sort-button-item.vue";

const sortBtnClick = (e: any) => {
  // console.log(e);
};
</script>

<style scoped lang="scss">
.upload-video-container {
  width: 100%;
}
</style>
