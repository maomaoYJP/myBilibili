import { defineStore } from "pinia";

const useSettingStore = defineStore("setting", () => {
  const header = reactive({
    active: false,
    AutoActive: true,
  });

  const banAutoActive = () => {
    header.AutoActive = false;
    header.active = true;
  };

  return {
    header,
    banAutoActive,
  };
});

export default useSettingStore;
