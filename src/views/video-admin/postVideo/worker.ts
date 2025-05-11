const createChunk = async (file: File, index: number, chunk_size: number) => {
  return new Promise((resolve) => {
    const start = index * chunk_size;
    const end = Math.min(start + chunk_size, file.size);
    const chunk = file.slice(start, end);
    return resolve({
      index,
      chunk,
      start,
      end,
    });
  });
};

onmessage = async (e) => {
  const { file, start, end, chunk_size } = e.data;
  const result = [];
  for (let i = start; i < end; i++) {
    const prom = await createChunk(file, i, chunk_size);
    result.push(prom);
  }
  const chunks = await Promise.all(result);
  postMessage(chunks);
};
