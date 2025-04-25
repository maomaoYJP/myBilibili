<template>
  <div class="category-btn">
    <div class="category-items">
      <slot></slot>
    </div>
    <div
      class="active-line"
      :style="{
        transform: `translateX(calc(${slideIndex(
          activeName
        )} * (100% + 16px)))`,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ modelValue: string }>(), {});
const emit = defineEmits(["update:modelValue", "tab-click"]);

const activeName = ref(props.modelValue);

provide("topHeaderContext", {
  activeName,
  handleItemClick: (name: string) => {
    activeName.value = name;
    emit("update:modelValue", name);
    emit("tab-click", name);
  },
});

const slots = useSlots();

const navItems = ref<string[]>([]);

onMounted(() => {
  if (slots.default) {
    const defaultSlot = slots.default();
    if (defaultSlot.length > 0) {
      const firstChild = defaultSlot[0];
      const children = firstChild.children;
      if (children && Array.isArray(children)) {
        children.forEach((item: any) => {
          if (item.props?.name) {
            navItems.value.push(item.props.name);
          }
        });
      }
    }
  }
});

const slideIndex = (name: string): number => {
  const index = navItems.value.indexOf(name);
  return index === -1 ? 0 : index;
};
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.category-btn {
  position: relative;
  .category-items {
    display: flex;
    .category-item {
      margin: $l-margin 0;
      margin-left: $l-margin;
      position: relative;
      transition: all 0.3s;
      span {
        margin-left: $s-margin;
      }
      &.active {
        color: #00a1d6;
      }

      .icon-zhuye {
        color: #5e9df3;
      }
      .icon-dongtai {
        color: #fb7299;
      }
      .icon-dianshi {
        color: #0092d8;
      }
      .icon-heji {
        color: #23c9ed;
      }
      .icon-a-shoucang-yishoucang {
        color: #feb432;
      }
    }
  }
  .active-line {
    transition: all 0.5s;
    position: absolute;
    height: 2px;
    bottom: 0;
    left: $l-margin;
    width: 56px;
    background-color: #00a1d6;
  }
}
</style>
