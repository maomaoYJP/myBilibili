<template>
  <div class="player-container"></div>
</template>

<script setup lang="ts">
import Artplayer from "artplayer";
import mp4 from "@/assets/video/test.mp4";

onMounted(() => {
  const art = new Artplayer({
    container: ".player-container",
    url: mp4,
  });
});
</script>

<style scoped lang="scss">
.player-container {
  width: 100%;
  height: 100%;
}
</style>
