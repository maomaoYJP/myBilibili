<template>
  <div>
    <img class="banner" src="@/assets/images/banner.jpg" alt="banner" />
    <div class="content">
      <div class="category">
        <div class="hot">
          <i
            class="iconfont icon-remen"
            style="font-size: 42px; color: #f74343"
          ></i>
          <div>热门</div>
        </div>
        <div class="category-list">
          <el-popover
            placement="top"
            :show-arrow="false"
            v-for="category in categoryList"
            :key="category.name"
            popper-style="padding: 6px;"
            :width="200"
            :disabled="category.list.length === 0"
          >
            <template #reference>
              <el-button style="width: 100px; margin: 8px">{{
                category.name
              }}</el-button>
            </template>
            <template #default>
              <div style="display: grid; grid-template-columns: 1fr 1fr">
                <div
                  class="category-list-item"
                  v-for="item in category.list"
                  :key="item"
                >
                  {{ item }}
                </div>
              </div>
            </template>
          </el-popover>
        </div>
      </div>
      <div class="carousel-video">
        <div class="carousel">
          <el-carousel height="400px" style="border-radius: 4px">
            <el-carousel-item
              v-for="(item, index) in carouselList"
              :key="index"
            >
              <el-image
                style="width: 100%; height: 100%"
                fit="cover"
                :src="item.img"
                alt="carousel"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="video-group-container">
          <VideoCardGroup class="video-group">
            <VideoCard
              v-for="item in recommendList"
              :video-card="item"
            ></VideoCard>
          </VideoCardGroup>
        </div>
      </div>
      <VideoCardGroup>
        <VideoCard v-for="item in list" :video-card="item"></VideoCard>
      </VideoCardGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoCardGroup from "@/components/video-card/video-card-group.vue";
import { getCategory, getCarousel, getRecommend, getList } from "@/api/video";
import type {
  videoCarouselResponse,
  videoCategoryResponse,
  video,
} from "@/api/video/type";
import useSettingStore from "@/stores/modules/setting";
const settingStore = useSettingStore();

const categoryList = ref<videoCategoryResponse["data"]>([]);
const carouselList = ref<videoCarouselResponse["data"]>([]);
const recommendList = ref<video[]>([]);
const list = ref<video[]>([]);

const currentPage = ref(1);
const pageSize = ref(20);

onMounted(async () => {
  settingStore.homeSetting();
  const res = await getCategory();
  categoryList.value = res.data;
  const res2 = await getCarousel();
  carouselList.value = res2.data;
  const res3 = await getRecommend();
  recommendList.value = res3.data;
  const res4 = await getList(currentPage.value, pageSize.value);
  list.value = res4.data.videoList;
});
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.banner {
  width: 100%;
  height: 180px;
  object-fit: cover;
  position: relative;
  margin-top: -70px;
}

.content {
  width: 80%;
  margin: 0 auto;
  .category {
    padding: $l-padding;
    position: sticky;
    top: 70px;
    display: flex;
    align-items: center;
    z-index: 100;
    background-color: $p-bg-color;
    .hot {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: $l-margin;
    }
  }

  .carousel-video {
    display: flex;
    .carousel {
      flex: 1;
    }
    .video-group-container {
      flex: 1.4;
      overflow: hidden;
      margin-left: 6px;
      .video-group {
        margin: 0;
        grid-template-rows: auto auto;
        grid-auto-rows: 0;
        overflow: hidden;
      }
    }
  }
  .video-list {
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
    .video-list-item {
      width: 250px;
      height: 200px;

      margin-bottom: 16px;
    }
  }
}

.category-list-item {
  width: 88px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  padding: 0 $s-padding;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background-color: $p-bg-color-deep;
  }
}
</style>
