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
const props = withDefaults(
  defineProps<{ modelValue: string; routeActive?: string }>(),
  { routeActive: "" }
);
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

interface item {
  name: string;
  route: string;
}

const navItems = ref<item[]>([]);

onMounted(() => {
  const children = slots.default?.()?.[0]?.children;
  (Array.isArray(children) ? children : []).forEach((item: any) => {
    if (item.props?.name) {
      navItems.value.push(item.props);
    }
  });
  // slideRouteActive(props.routeActive);
});

const slideIndex = (name: string): number => {
  // 检查是否有默认路径激活
  if (props.routeActive != "") {
    name =
      navItems.value.find((item) => item.route === props.routeActive)?.name ||
      "";
  }
  const temp = navItems.value.map((item) => item.name);
  const index = temp.indexOf(name);

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
