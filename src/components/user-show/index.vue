<template>
  <div class="user-container">
    <div>
      <el-image
        class="avatar"
        :style="{ width: `${height}px`, height: `${height}px` }"
        fit="cover"
        :lazy="true"
        :src="src"
      ></el-image>
    </div>
    <div class="user-content">
      <span>maomao</span>
      <div class="user-intro">
        嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻
      </div>
      <div class="btn">
        <el-button style="width: 30%" size="default">私信</el-button>
        <el-button style="width: 70%" type="primary" size="default"
          >关注</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatar from "@/assets/images/avatar.jpg";

withDefaults(defineProps<{ height?: number; src: string }>(), {
  height: 50,
  src: avatar,
});
</script>

<style scoped lang="scss">
.user-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  .avatar {
    width: 50px;
    border-radius: 50%;
  }
  .user-content {
    margin-left: $m-margin;
    display: flex;
    flex-direction: column;
    row-gap: $s-margin;
    overflow: hidden;
    .user-intro {
      color: $text-color-deep;
      font-size: $s-text-size;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .btn {
      display: flex;
    }
  }
}
</style>
