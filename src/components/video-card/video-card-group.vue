<template>
  <div class="video-list">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.video-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  overflow: hidden;
  gap: $s-margin;
}
</style>
