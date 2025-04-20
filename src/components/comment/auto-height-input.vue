<template>
  <textarea
    rows="1"
    :value="content"
    maxlength="512"
    class="text-area"
    placeholder="善语结善缘"
    @input="adjustHeight"
    ref="textareaRef"
  ></textarea>
</template>

<script setup lang="ts">
const textareaRef = ref<HTMLTextAreaElement | null>(null);

defineProps(["content"]);

const emit = defineEmits(["update:content"]);

const adjustHeight = () => {
  textareaRef.value!.style.height = "auto";
  textareaRef.value!.style.height = textareaRef.value!.scrollHeight + "px";
  emit("update:content", textareaRef.value?.value);
};
const focus = () => {
  if (textareaRef.value) {
    textareaRef.value.focus();
  }
};

defineExpose({
  focus,
});

onMounted(() => {
  adjustHeight();
});
</script>

<style scoped lang="scss">
.text-area {
  width: 100%;
  height: auto;
  padding: $l-padding;
  border: 1px solid $p-bg-color-deep;
  background-color: $p-bg-color-deep;
  border-radius: 4px;
  resize: none;
  outline: none;
  overflow: hidden;
  transition: background-color 0.3s;
  &:hover {
    outline: none;
    background-color: $p-bg-color;
  }
}
</style>
