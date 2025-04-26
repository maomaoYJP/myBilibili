<template>
  <div class="home-card-container">
    <div class="top">
      <span class="title">我的收藏</span>
    </div>
    <div class="video-card">
      <VideoCardGroup>
        <VideoCard v-for="item in list" :video-card="item" :key="item.title">
          <template #desc>
            <div class="video-card-info">
              <a :href="'/video/123'" class="video-card-title">{{
                item.title
              }}</a>
              <div class="fav-info">
                <div class="fav-time">收藏于： {{ item.createTime }}</div>
                <el-dropdown placement="bottom">
                  <span class="more"
                    ><el-icon><More /></el-icon
                  ></span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="deletaFav(item)"
                        >取消收藏</el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
          </template>
        </VideoCard>
      </VideoCardGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoCardGroup from "@/components/video-card/video-card-group.vue";
import VideoCard from "@/components/video-card/index.vue";
import { getList } from "@/api/video";
import type { video } from "@/api/video/type";

const list = ref<video[]>([]);

onMounted(async () => {
  const res = await getList(1, 8);
  list.value = res.data.videoList;
});

const deletaFav = (item: video) => {
  list.value = list.value.filter((video) => video.title != item.title);
};
</script>

<style scoped lang="scss">
.home-card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: $l-margin;
  .top {
    .title {
      font-size: $m-text-size;
    }
  }
  .video-card {
    margin-top: $l-margin;
    .video-card-info {
      font-size: 14px;
      color: $text-color-deep;
      .fav-info {
        margin-top: $s-margin;
        display: flex;
        justify-content: space-between;
        .more {
          cursor: pointer;
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
