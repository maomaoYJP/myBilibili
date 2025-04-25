<template>
  <div class="sort-button-item-container">
    <button
      class="btn"
      @click="handleItemClick(name)"
      :class="{ active: isActive }"
    >
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ label: string; name: string }>(), {});

const { activeItem, handleItemClick } = inject("sortButtonContext") as {
  activeItem: { value: string[] };
  handleItemClick: (name: string) => void;
};

const isActive = computed(() => {
  return activeItem.value.includes(props.name);
});
</script>

<style scoped lang="scss">
.sort-button-item-container {
  .btn {
    border: none;
    border-radius: 8px;
    width: 120px;
    height: 30px;
    background-color: $p-bg-color-deep;
    color: $text-color-deep;
    cursor: pointer;
    transition: all 0.3s;
    &.active {
      background-color: #00a1d6;
      color: $text-color-light;
      &:hover {
        color: $text-color-light;
      }
    }
    &:hover {
      color: $text-color-hover;
    }
  }
}
</style>
