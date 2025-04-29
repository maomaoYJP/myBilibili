<template>
  <div class="dynamic-container">
    <div class="main">
      <div class="dynamic-card">
        <div class="dynamic-card-container">
          <div class="left"></div>
          <div class="main">
            <div class="name"><a href="#">毛毛</a></div>
            <div class="time">2025-04-19</div>
            <div class="introduce">嘻嘻</div>
            <div class="video"></div>
          </div>
        </div>
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
import useUserStore from "@/stores/modules/user";

const userStore = useUserStore();
</script>

<style scoped lang="scss">
.dynamic-container {
  width: 100%;
  display: flex;
  margin-top: $l-margin;
  .main {
    flex: 5;
    .dynamic-card {
      .dynamic-card-container {
        width: 100%;
      }
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
