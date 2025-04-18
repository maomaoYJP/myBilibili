<template>
  <div class="comment-box-container">
    <div class="avatar-area">
      <ImgShow
        class="avatar"
        :height="avatarHeight"
        :width="avatarHeight"
        :src="avatar"
      ></ImgShow>
    </div>
    <div class="comment-box">
      <AutoHeightInput class="comment-input"></AutoHeightInput>
      <div class="btn">
        <div class="input-operation">
          <el-button size="default">
            <i class="iconfont icon-emojilight"></i>
          </el-button>
          <el-button size="default">
            <i class="iconfont icon-tupian"></i>
          </el-button>
        </div>
        <div class="submit">
          <el-button type="primary" size="default" style="width: 100px"
            >发送</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImgShow from "@/components/img-show/index.vue";
import AutoHeightInput from "./auto-height-input.vue";
import avatar from "@/assets/images/avatar.jpg";

const avatarHeight = 50;
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.comment-box-container {
  width: 100%;
  display: flex;
  margin-top: $l-margin;
  .avatar-area {
    .avatar {
      border-radius: 50%;
    }
  }
  .comment-box {
    width: 100%;
    margin-left: $l-margin;
    .comment-input {
      width: 100%;
    }
    .btn {
      display: flex;
      margin-top: $s-margin;
      gap: 6px;
      .input-operation {
      }
      .submit {
        display: flex;
        flex: 1;
        justify-content: end;
      }
    }
  }
}
</style>
