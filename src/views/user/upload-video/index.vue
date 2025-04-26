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
    <VideoCardGroup :video-card-list="list" />
    <div class="page">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[20, 25, 30, 40]"
        :background="true"
        layout="prev, pager, next, total, sizes, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SortButton from "@/components/sort-button/sort-button.vue";
import SortButtonItem from "@/components/sort-button/sort-button-item.vue";
import VideoCard from "@/components/video-card/index.vue";
import VideoCardGroup from "@/components/video-card/video-card-group.vue";
import { getList } from "@/api/video";
import type { video } from "@/api/video/type";

const list = ref<video[]>([]);

const currentPage = ref(1);
const pageSize = ref(20);
const total = ref(0);

const getPage = async (cur?: number, size?: number) => {
  if (cur) {
    currentPage.value = cur;
  }
  if (size) {
    pageSize.value = size;
  }
  window.scroll({
    top: 0,
  });
  const res = await getList(currentPage.value, pageSize.value);
  list.value = res.data.videoList;
  total.value = res.data.totalRecords;
  return res;
};

onMounted(() => {
  getPage(currentPage.value, pageSize.value);
});

const handleSizeChange = (size: number) => {
  list.value = [];
  getPage(1, size);
};

const handleCurrentChange = () => {
  getPage();
};

const sortBtnClick = (e: any) => {
  // console.log(e);
};
</script>

<style scoped lang="scss">
.upload-video-container {
  width: 100%;
  .header {
    .title {
      font-size: $m-text-size;
      margin: $l-margin 0;
    }
    .sort {
      margin-bottom: $l-margin;
    }
  }
  .video-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    overflow: hidden;
    gap: $s-margin;
    .video-card-item {
      height: 200px;
    }
  }
  .page {
    display: flex;
    justify-content: center;
    margin: $l-margin 0;
  }
}
</style>
