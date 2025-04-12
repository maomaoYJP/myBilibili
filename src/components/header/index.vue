<template>
  <div class="header-container" :class="{ scrolled: scrolled }">212</div>
</template>

<script setup lang="ts">
const scrolled = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  });
});
</script>

<style scoped lang="scss">
.header-container {
  height: 60px;
  width: 100%;
  background-color: $p-bg-color;
  box-shadow: $p-shadow;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
  &:hover {
    box-shadow: $p-hover-shadow;
  }
}

.scrolled {
  background-color: $p-bg-color;
}
</style>
