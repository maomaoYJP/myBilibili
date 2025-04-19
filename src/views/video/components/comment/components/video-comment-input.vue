<template>
  <div class="video-comment-input-container">
    <div class="avatar-area">
      <ImgShow
        class="avatar"
        :height="avatarHeight"
        :width="avatarHeight"
        :src="avatar"
      ></ImgShow>
    </div>
    <div class="comment-box">
      <AutoHeightInput
        :content="content"
        @update:content="handleInput"
        class="comment-input"
      ></AutoHeightInput>
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
          <el-button
            type="primary"
            size="default"
            style="width: 100px"
            @click="sendComment"
            >发送</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatar from "@/assets/images/avatar.jpg";

defineProps(["content"]);
const emit = defineEmits(["click", "update:content"]);
const handleInput = (value: string) => {
  emit("update:content", value);
};

const sendComment = () => {
  emit("click");
};

const avatarHeight = 50;
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.video-comment-input-container {
  width: 100%;
  display: flex;
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
      .submit {
        display: flex;
        flex: 1;
        justify-content: end;
      }
    }
  }
}
</style>
