import { defineStore } from "pinia";

const useSettingStore = defineStore("setting", () => {
  const header = reactive({
    active: false,
    AutoActive: true,
    fixTop: false,
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
