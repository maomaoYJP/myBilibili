<template>
  <div
    class="category-item"
    :class="{ active: isActive }"
    @click="handleItemClick(name)"
  >
    <slot name="link"> </slot>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ name: string }>(), {});

const { activeName, handleItemClick } = inject("topHeaderContext") as {
  activeName: { value: string };
  handleItemClick: (name: string) => void;
};

const isActive = computed(() => activeName.value === props.name);
</script>

<style scoped></style>
