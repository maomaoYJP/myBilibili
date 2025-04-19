<template>
  <div
    class="video-coin-container"
    :class="{ active: isActive }"
    @click="doClick"
  >
    <slot></slot>
    <span v-if="showNumber">{{ count }}</span>
  </div>
</template>

<script setup lang="ts">
const doClick = () => {
  emit("click", props.isActive);
};

const emit = defineEmits(["click"]);

const props = withDefaults(
  defineProps<{ showNumber?: boolean; count?: number; isActive?: boolean }>(),
  {
    showNumber: true,
    count: 0,
    isActive: false,
  }
);
</script>

<style scoped lang="scss">
@use "sass:color";
.video-coin-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: $text-color-deep;
  transition: all 0.2s;
  span {
    margin-left: $s-margin;
  }
  i {
    font-size: 30px;
  }
  &:hover {
    color: color.adjust($text-color-deep, $lightness: -20%);
  }
  &.active {
    color: #fb7299;
  }
}
</style>
