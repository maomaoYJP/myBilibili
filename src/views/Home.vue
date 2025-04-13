<template>
  <div style="height: 10000px">
    <img class="banner" src="@/assets/images/banner.jpg" alt="banner" />
    <div class="category">
      <div class="hot">
        <i
          class="iconfont icon-remen"
          style="font-size: 42px; color: #f74343"
        ></i>
        <div>热门</div>
      </div>
      <div class="category-list">
        <el-popover
          placement="top"
          :show-arrow="false"
          v-for="category in categoryList"
          :key="category.name"
          popper-style="padding: 0;"
          :width="200"
          :disabled="category.list.length === 0"
        >
          <template #reference>
            <el-button style="width: 100px; margin: 8px">{{
              category.name
            }}</el-button>
          </template>
          <template #default>
            <div
              style="display: flex; flex-wrap: wrap; justify-content: center"
            >
              <div
                class="category-list-item"
                v-for="item in category.list"
                :key="item"
              >
                {{ item }}
              </div>
            </div>
          </template>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categoryList = [
  {
    name: "编程",
    list: ["java", "python", "c++", "c#", "php", "javascript", "go", "rust"],
  },
  {
    name: "设计",
    list: ["ps", "ai", "ae", "pr", "3dmax", "c4d", "maya", "zbrush"],
  },
  {
    name: "摄影",
    list: [],
  },
  {
    name: "音乐",
    list: [],
  },
  {
    name: "影视",
    list: [],
  },
  {
    name: "游戏",
    list: [],
  },
  {
    name: "动漫",
    list: [],
  },
  {
    name: "体育",
    list: [],
  },
  {
    name: "科技",
    list: [],
  },
  {
    name: "生活",
    list: [],
  },
  {
    name: "学习",
    list: [],
  },
  {
    name: "其他",
    list: [],
  },
];
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.banner {
  width: 100%;
  height: 180px;
  object-fit: cover;
  position: relative;
  margin-top: -70px;
}
.category {
  width: 80%;
  padding: $l-padding;
  position: sticky;
  top: 70px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  .hot {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: $l-margin;
  }
}

.category-list-item {
  width: 80px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: $p-bg-color-deep;
  }
}
</style>
