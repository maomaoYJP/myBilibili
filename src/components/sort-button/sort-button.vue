<template>
  <div class="sort-button-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
let activeItem = ref<string[]>([]);

const props = withDefaults(defineProps<{ multi?: boolean }>(), {
  multi: false,
});

const slot = useSlots();

onMounted(() => {
  const name = slot.default?.()?.[0]?.props?.name;
  if (name) {
    activeItem.value.push(name);
  }
});

const emit = defineEmits(["click"]);

provide("sortButtonContext", {
  activeItem,
  handleItemClick(name: string) {
    props.multi ? multiFilter(name) : singleFilter(name);
    emit("click", activeItem.value);
  },
});

const multiFilter = (name: string) => {
  if (activeItem.value.includes(name)) {
    activeItem.value = activeItem.value.filter((item) => item != name);
  } else {
    activeItem.value.push(name);
  }
};

const singleFilter = (name: string) => {
  activeItem.value = [];
  activeItem.value.push(name);
};
</script>

<style scoped lang="scss">
.sort-button-container {
  width: 100%;
  display: flex;
  gap: $s-margin;
}
</style>
