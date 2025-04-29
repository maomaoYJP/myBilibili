<template>
  <div class="home-container">
    <div class="main">
      <div class="video-card">
        <HomeCard
          @sort-btn-click="sortBtnClick"
          :list="list"
          @moreClick="toVideo"
        >
          <template #sortBtn>
            <SortButton @click="sortBtnClick">
              <SortButtonItem :label="'最新发布'" name="new"></SortButtonItem>
              <SortButtonItem :label="'最多播放'" name="most"></SortButtonItem>
              <SortButtonItem :label="'最多收藏'" name="fav"></SortButtonItem>
            </SortButton>
          </template>
        </HomeCard>
        <ElDivider></ElDivider>
      </div>
      <div class="video-card">
        <HomeCard :list="list" @moreClick="toFav"> </HomeCard>
        <ElDivider></ElDivider>
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
import HomeCard from "./components/HomeCard.vue";
import SortButton from "@/components/sort-button/sort-button.vue";
import SortButtonItem from "@/components/sort-button/sort-button-item.vue";
import { getList } from "@/api/video";
import type { video } from "@/api/video/type";
import { useRouter } from "vue-router";
import useUserStore from "@/stores/modules/user";

const userStore = useUserStore();
const router = useRouter();

const list = ref<video[]>([]);

onMounted(async () => {
  const res = await getList(1, 8);
  list.value = res.data.videoList;
});

const sortBtnClick = async (e: string) => {
  // 根据点击标签加载数据
  function shuffleArray(array: video[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  list.value = shuffleArray(list.value);
};

const toVideo = () => {
  router.push("/user/1/upload/video");
};

const toFav = () => {
  router.push("/user/1/favlist");
};
</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  display: flex;
  margin-top: $l-margin;
  .main {
    flex: 5;
    .video-card {
      margin-right: $l-margin;
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
