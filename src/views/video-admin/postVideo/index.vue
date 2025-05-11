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

const handleFileChange = async (e: Event) => {
  const inputElement = e.target as HTMLInputElement;
  const file = inputElement.files?.[0];
  if (file) {
    const chunks = await cutFile(file);
    console.log(chunks);
  }
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

const cutFile = async (file: File) => {
  return new Promise((resolve) => {
    const chunk_size = 1024 * 1024 * 10; // 10MB
    const thread_size = navigator.hardwareConcurrency || 4; // 线程数

    const chunk_num = Math.ceil(file.size / chunk_size); // 切片数量
    const thread_chunk_num = Math.ceil(chunk_num / thread_size); // 每个线程处理的切片数量

    type chunk = {
      index: number;
      chunk: Blob;
      start: number;
      end: number;
    };

    // 对文件分片
    const chunks: chunk[] = [];
    let finishedCount = 0;
    for (let i = 0; i < thread_size; i++) {
      const start = i * thread_chunk_num;
      const end = Math.min((i + 1) * thread_chunk_num, chunk_num);
      // 使用webworker
      const worker = new Worker(new URL("./worker.ts", import.meta.url), {
        type: "module",
      });
      worker.postMessage({
        file,
        start,
        end,
        chunk_size,
      });
      worker.onmessage = (e) => {
        chunks[i] = e.data;
        finishedCount++;
        if (finishedCount === thread_size) {
          // 所有线程完成
          resolve(chunks.flat());
        }
      };
    }
  });
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
