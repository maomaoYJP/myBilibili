<template>
  <div class="top-header-container">
    <div class="category-btn">
      <div class="category-items">
        <div
          @click="activeIndex = 0"
          class="category-item"
          :class="{ active: activeIndex === 0 }"
        >
          <i class="iconfont icon-zhuye"></i>
          <RouterLink to="/user/home">主页</RouterLink>
        </div>
        <div
          @click="activeIndex = 1"
          class="category-item"
          :class="{ active: activeIndex === 1 }"
        >
          <i class="iconfont icon-dongtai"></i>
          <RouterLink>动态</RouterLink>
        </div>
        <div
          @click="activeIndex = 2"
          class="category-item"
          :class="{ active: activeIndex === 2 }"
        >
          <i class="iconfont icon-dianshi"></i>
          <RouterLink>投稿</RouterLink>
        </div>
        <div
          @click="activeIndex = 3"
          class="category-item"
          :class="{ active: activeIndex === 3 }"
        >
          <i class="iconfont icon-heji"></i>
          <RouterLink>合集</RouterLink>
        </div>
        <div
          @click="activeIndex = 4"
          class="category-item"
          :class="{ active: activeIndex === 4 }"
        >
          <i class="iconfont icon-a-shoucang-yishoucang"></i>
          <RouterLink>收藏</RouterLink>
        </div>
      </div>
      <div
        class="active-line"
        :style="{
          transform: `translateX(calc(${activeIndex} * (100% + 16px)))`,
        }"
      ></div>
    </div>
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
const activeIndex = ref(0);
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
        a {
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
