<template>
  <div class="search-container" ref="searchContainer">
    <div class="search-input-container">
      <input
        class="search-input"
        type="text"
        placeholder="搜索"
        @focus="isShow = true"
      />
      <el-button class="search-button">
        <el-icon size="24">
          <Search />
        </el-icon>
      </el-button>
    </div>

    <div class="search-content" v-show="isShow">
      <div class="search-history">
        <div class="search-history-title">
          <span>历史搜索</span>
          <span class="search-history-clear">清空</span>
        </div>
        <div class="search-history-list">
          <el-tag v-for="item in searchHistory" :key="item">{{ item }}</el-tag>
        </div>
      </div>
      <div class="search-hot">
        <div class="search-hot-title">热门搜索</div>
        <div class="search-hot-list">
          <div
            class="search-hot-item"
            v-for="(item, index) in searchHot"
            :key="item"
            :title="item"
          >
            {{ index + 1 }}
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";

defineProps<{
  searchHistory: string[];
  searchHot: string[];
}>();

const isShow = ref(false);
const searchContainer = ref<null | HTMLElement>(null);
const handleClickOutside = (event: MouseEvent) => {
  if (
    searchContainer.value &&
    !searchContainer.value.contains(event.target as Node)
  ) {
    isShow.value = false;
  }
};

// 添加和移除文档点击事件监听器
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped lang="scss">
.search-container {
  background-color: $p-bg-color;
  border-radius: 6px;
  max-width: 360px;
  .search-input-container {
    width: 360px;
    background-color: $p-bg-color;
    border-radius: 6px;
    padding: $s-padding;
    display: flex;
    justify-content: space-between;
    .search-input {
      width: 100%;
      border: none;
      outline: none;
      border-radius: 6px;
      padding: $s-padding;
    }
    .search-input:focus {
      background-color: $p-bg-color-deep;
    }
    .search-button {
      border: none;
      margin-left: $s-margin;
    }
  }
  .search-content {
    position: absolute;
    width: 360px;
    top: 100%;
    background-color: $p-bg-color;
    border-radius: 6px;
    padding: $s-padding;
    color: $text-color-deep;
    .search-history-title {
      .search-history-clear {
        cursor: pointer;
        float: right;
      }
    }
    .search-history-list {
      margin: $m-margin 0;
      display: flex;
      gap: $s-margin;
    }
    .search-hot-list {
      display: flex;
      margin: $m-margin 0;
      gap: $s-margin;
      flex-wrap: wrap;
      .search-hot-item {
        cursor: pointer;
        width: 160px;
        padding: $s-padding;
        border-radius: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:hover {
          background-color: $p-bg-color-deep;
        }
      }
    }
  }
}
</style>
