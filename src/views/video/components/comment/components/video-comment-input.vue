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
        ref="textareaRef"
      ></AutoHeightInput>
      <div class="btn">
        <div class="input-operation">
          <el-popover placement="bottom" width="400">
            <template #reference>
              <el-button size="default">
                <i class="iconfont icon-emojilight"></i>
              </el-button>
            </template>
            <el-tabs>
              <el-tab-pane
                v-for="emojis in emojiList"
                :key="emojis.name"
                :label="emojis.name"
                class="emoji-container"
              >
                <div
                  class="emoji"
                  v-for="emoji in emojis.list"
                  @click="emojiClick(emoji)"
                >
                  {{ emoji }}
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-popover>

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
import emojiList from "@/assets/emoji";
import AutoHeightInput from "@/components/comment/auto-height-input.vue";
import avatar from "@/assets/images/avatar.jpg";

const props = defineProps(["content"]);
const emit = defineEmits(["click", "update:content", "emojiClick"]);
const handleInput = (value: string) => {
  emit("update:content", value);
};

const sendComment = () => {
  emit("click");
};

const emojiClick = (emoji: string) => {
  emit("update:content", props.content + emoji);
};

const avatarHeight = 50;

interface textareaRefInstance {
  focus: () => void;
}

const textareaRef = ref<textareaRefInstance | null>(null);
const focus = () => {
  if (textareaRef.value) {
    textareaRef.value.focus();
  }
};

defineExpose({
  focus,
});
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

.emoji-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  gap: $m-margin;
  .emoji {
    font-size: $m-text-size;
    cursor: pointer;
  }
}
</style>
