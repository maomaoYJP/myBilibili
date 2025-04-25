<template>
  <div class="top-header-container">
    <TopHeaderNav v-model="activeName">
      <TopHeaderNavItem
        :name="item.name"
        v-for="item in navItems"
        :key="item.name"
      >
        <template #link>
          <RouterLink :to="item.link">
            <i class="iconfont" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </RouterLink>
        </template>
      </TopHeaderNavItem>
    </TopHeaderNav>
    <div class="user-data">
      <div class="user-data-item">
        <div class="title">关注数</div>
        <div>1212</div>
      </div>
      <div class="user-data-item">
        <div class="title">粉丝数</div>
        <div>12</div>
      </div>
      <div class="user-data-item">
        <div class="title">获赞数</div>
        <div>1</div>
      </div>
      <div class="user-data-item">
        <div class="title">播放数</div>
        <div>0</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeName = ref("");
import TopHeaderNav from "./TopHeaderNav.vue";
import TopHeaderNavItem from "./TopHeaderNavItem.vue";

import useUserStore from "@/stores/modules/user";
const userStore = useUserStore();

interface items {
  name: string;
  link: string;
  icon: string;
}
const navItems = ref<items[]>([
  {
    name: "主页",
    link: `/user/${userStore.userInfo.userId}/home`,
    icon: "icon-zhuye",
  },
  {
    name: "动态",
    link: `/user/${userStore.userInfo.userId}/dynamic`,
    icon: "icon-dongtai",
  },
  {
    name: "投稿",
    link: `/user/${userStore.userInfo.userId}/upload/video`,
    icon: "icon-dianshi",
  },
  {
    name: "合集",
    link: `/user/${userStore.userInfo.userId}/lists`,
    icon: "icon-heji",
  },
  {
    name: "收藏",
    link: `/user/${userStore.userInfo.userId}/favlist`,
    icon: "icon-a-shoucang-yishoucang",
  },
]);
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.top-header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .category-btn {
    position: relative;
    .category-items {
      display: flex;
      .category-item {
        margin: $l-margin 0;
        margin-left: $l-margin;
        position: relative;
        transition: all 0.3s;
        span {
          margin-left: $s-margin;
        }
        &.active {
          color: #00a1d6;
        }

        .icon-zhuye {
          color: #5e9df3;
        }
        .icon-dongtai {
          color: #fb7299;
        }
        .icon-dianshi {
          color: #0092d8;
        }
        .icon-heji {
          color: #23c9ed;
        }
        .icon-a-shoucang-yishoucang {
          color: #feb432;
        }
      }
    }
    .active-line {
      transition: all 0.5s;
      position: absolute;
      height: 2px;
      bottom: 0;
      left: $l-margin;
      width: 56px;
      background-color: #00a1d6;
    }
  }

  .user-data {
    display: flex;
    .user-data-item {
      text-align: center;
      margin: 0 $l-margin;
      .title {
        color: $text-color-deep;
      }
    }
  }
}
</style>
