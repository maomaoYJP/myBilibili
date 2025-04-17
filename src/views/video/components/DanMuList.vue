<template>
  <div class="danmulist-container">
    <div class="danmu-btn" @click="showList">弹幕列表</div>
    <div class="danmu-list" :style="{ height: show ? 0 : 'calc(100% - 50px)' }">
      <el-table :data="damuList" style="width: 100%">
        <el-table-column prop="time" label="时间" />
        <el-table-column prop="danmu" label="弹幕" />
        <el-table-column prop="date" label="发送时间" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const show = ref(false);

const damuList = ref([
  { time: "00:01", danmu: "xixi", date: "2025-01-22 23:06:37" },
  { time: "00:01", danmu: "xixi", date: "2025-01-22 23:06:37" },
  { time: "00:01", danmu: "xixi", date: "2025-01-22 23:06:37" },
  { time: "00:01", danmu: "xixi", date: "2025-01-22 23:06:37" },
  { time: "00:01", danmu: "xixi", date: "2025-01-22 23:06:37" },
  { time: "00:01", danmu: "xixi", date: "2025-01-22 23:06:37" },
  { time: "00:01", danmu: "xixi", date: "2025-01-22 23:06:37" },
  { time: "00:01", danmu: "xixi", date: "2025-01-22 23:06:37" },
  { time: "00:01", danmu: "xixi", date: "2025-01-22 23:06:37" },
]);

const showList = () => {
  show.value = !show.value;
};
</script>

<style scoped lang="scss">
.danmulist-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
  .danmu-btn {
    height: 50px;
    background-color: $p-bg-color-deep;
    padding: $l-padding;
    border-radius: 6px;
  }
  .danmu-list {
    transition: all 0.3s ease-in-out;
    height: calc(100% - 50px);
    overflow: auto;
  }
}
</style>
