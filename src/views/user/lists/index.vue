<template>
  <div class="lists-container">
    <div class="list-cover" v-if="!showContent">
      <div class="title">合集列表</div>
      <div class="lists">
        <VideoCardGroup>
          <VideoCard
            v-for="(item, index) in list"
            :video-card="item"
            :key="item.title"
            :class="{ move: dragIndex === index }"
            @dragover.prevent
            @dragenter="handleEnter(index)"
            @dragstart="handleDragStart(item, index, $event)"
            @dragend="handleEnd"
            ref="videoCardRef"
          >
            <template #img>
              <MyImage
                draggable="false"
                :src="item.img"
                :lazy="false"
                @click="coverClick"
              ></MyImage>
            </template>
            <template #desc>
              <div class="desc">
                <div class="create-time">创建于：{{ item.createTime }}</div>
                <el-icon draggable="true"><Menu /></el-icon>
              </div>
            </template>
          </VideoCard>
        </VideoCardGroup>
      </div>
    </div>

    <div class="list-content" v-else>
      <div class="title">
        <el-button size="default" @click="showContent = false">返回</el-button>
        合集列表
      </div>
      <div class="video-card">
        <VideoCardGroup>
          <VideoCard v-for="item in list" :video-card="item"></VideoCard>
        </VideoCardGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyImage from "@/components/my-image/index.vue";
import { getList } from "@/api/video";
import type { video } from "@/api/video/type";

const showContent = ref<boolean>(false);
const coverClick = () => {
  showContent.value = true;
};

const list = ref<video[]>([]);

onMounted(async () => {
  const res = await getList(1, 8);
  list.value = res.data.videoList;
});

const videoCardRef = ref();
const dragIndex = ref(-1);

const handleDragStart = (item: video, index: number, event: DragEvent) => {
  const card = videoCardRef.value[index].$el;
  const { offsetWidth: width, offsetHeight: height } = card;
  event.dataTransfer!.effectAllowed = "move";
  event.dataTransfer?.setDragImage(card, width, height);
  setTimeout(() => {
    dragIndex.value = index;
  }, 0);
};

const exchangeIndex: { [key: number]: boolean } = {};
const handleEnter = (index: number) => {
  // 判断元素是否在交换中 排除拖动到自身
  if (index === dragIndex.value || exchangeIndex[index]) {
    return;
  }
  [list.value[index], list.value[dragIndex.value]] = [
    list.value[dragIndex.value],
    list.value[index],
  ];
  // 标记为已交换，一段时间后取消
  const changedIndex = dragIndex.value;
  exchangeIndex[changedIndex] = true;
  setTimeout(() => {
    exchangeIndex[changedIndex] = false;
  }, 300);
  dragIndex.value = index;
};
const handleEnd = () => {
  dragIndex.value = -1;
};
</script>

<style scoped lang="scss">
.lists-container {
  width: 100%;
  .list-cover {
    .title {
      margin-top: $l-margin;
      font-size: $m-text-size;
    }
    .lists {
      margin-top: $l-margin;
      .move {
        position: relative;
      }
      .move::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: $p-bg-color-deep;
        border-radius: 3px;
      }
      .video-card {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 4px;
        cursor: pointer;
      }
      .desc {
        margin-top: $l-margin;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $text-color-deep;
        .create-time {
          color: $text-color-deep;
        }
        i {
          cursor: move;
        }
      }
    }
  }
  .list-content {
    .title {
      margin-top: $l-margin;
      font-size: $m-text-size;
    }
    .video-card {
      margin-top: $l-margin;
    }
  }
}
</style>
