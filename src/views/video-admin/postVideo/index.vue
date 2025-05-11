<template>
  <div class="postvideo-container">
    <div
      class="upload-container"
      @click="handleClick"
      @dragover.prevent
      @drop.prevent="handleDrop"
    >
      <div class="icon">
        <el-icon><Upload /></el-icon>
      </div>
      <div class="desc">拖拽到此处也可上传</div>
      <el-button type="primary" size="large">上传视频</el-button>
      <input
        ref="fileInputRef"
        type="file"
        multiple
        class="input"
        @change="handleFileChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const fileInputRef = ref<HTMLInputElement | null>(null);

const handleClick = () => {
  fileInputRef.value?.click();
};

const handleFileChange = (e: Event) => {
  const inputElement = e.target as HTMLInputElement;
  //获取文件
  const files = inputElement.files;
};

const handleDrop = (e: DragEvent) => {
  const dragFile = e.dataTransfer?.items;

  // 处理文件夹上传
  if (dragFile) {
    const items = e.dataTransfer.items;
    getFiles(items).then((res) => {
      console.log(res);
    });
  }
};

const getFiles = async (items: any) => {
  const allFiles: File[] = [];

  const processEntries = async () => {
    // 递归处理文件和文件夹
    const processEntry = async (entry: any): Promise<File[]> => {
      return new Promise((resolve) => {
        if (entry.isFile) {
          // 如果是文件，直接添加到结果中
          entry.file((file: File) => resolve([file]));
        } else if (entry.isDirectory) {
          // 如果是文件夹，读取其中的内容并递归处理
          const dirReader = entry.createReader();
          dirReader.readEntries(async (entries: any[]) => {
            const filesPromises = entries.map((e) => processEntry(e));
            const fileGroups = await Promise.all(filesPromises);
            resolve(fileGroups.flat());
          });
        } else {
          resolve([]);
        }
      });
    };

    // 处理所有拖拽的项目
    for (let i = 0; i < items.length; i++) {
      const entry = items[i].webkitGetAsEntry?.();
      if (entry) {
        const files = await processEntry(entry);
        allFiles.push(...files);
      }
    }
  };
  await processEntries();
  return allFiles;
};
</script>

<style scoped lang="scss">
.postvideo-container {
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  .upload-container {
    cursor: pointer;
    width: 600px;
    height: 300px;
    border: 2px dashed $p-bg-color-deep;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: border 0.3s;
    .input {
      display: none;
    }
    .icon {
      font-size: $l-text-size;
      color: $text-color-deep;
    }
    .desc {
      color: $text-color-deep;
    }
    &:hover {
      border-color: $text-color-hover;
    }
  }
}
</style>
