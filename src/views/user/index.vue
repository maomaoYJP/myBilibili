<template>
  <div class="user-container">
    <div class="banner-area">
      <img class="banner" src="@/assets/images/banner.jpg" alt="banner" />
      <div class="user-area">
        <div class="user-info">
          <div class="avatar-area">
            <ImgShow
              class="avatar"
              :height="50"
              :width="50"
              :src="avatar"
            ></ImgShow>
          </div>

          <div class="info">
            <div class="name">毛毛</div>
            <div class="introduce" title="嘻嘻嘻嘻嘻嘻嘻嘻">
              嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻
            </div>
          </div>
        </div>
        <div class="user-operation">
          <el-button class="follow" type="primary" size="default"
            >关注</el-button
          >
          <el-button class="message" size="default">发信息</el-button>
        </div>
      </div>
    </div>
    <div class="main">121</div>
  </div>
</template>

<script setup lang="ts">
import avatar from "@/assets/images/avatar.jpg";

import useSettingStore from "@/stores/modules/setting";
const settingStore = useSettingStore();

onMounted(() => {
  settingStore.header.AutoActive = false;
  settingStore.header.fixTop = true;
});
</script>

<style scoped lang="scss">
.user-container {
  width: 100%;
  .main {
    width: $content-width;
    margin: 0 auto;
    height: 10000px;
  }
  .banner-area {
    position: relative;
    .banner {
      width: 100%;
      height: 280px;
      object-fit: cover;
      position: relative;
      margin-top: -70px;
    }
    .user-area {
      position: absolute;
      display: flex;
      justify-content: space-between;
      bottom: 10px;
      left: 10%;
      right: 10%;
      .user-info {
        display: flex;
        align-items: center;
        .avatar-area {
          display: flex;
          align-items: center;
          .avatar {
            width: 50px;
            border-radius: 50%;
          }
        }
        .info {
          margin-left: $l-margin;
          .name {
            font-size: $m-text-size;
            color: $text-color-light;
          }
          .introduce {
            color: $text-color-light;
            margin-top: $m-margin;
            max-width: 300px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .user-operation {
        display: flex;
        align-items: end;
        gap: 24px;
        .follow {
          width: 150px;
        }
        .message {
          width: 150px;
        }
      }
    }
  }
}
</style>
