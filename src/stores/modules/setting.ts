import { defineStore } from "pinia";

const useSettingStore = defineStore("setting", () => {
  const header = reactive({
    active: false,
    AutoActive: true,
    fixTop: false,
  });

  const homeSetting = () => {
    header.AutoActive = true;
    header.active = false;
    header.fixTop = false;
  };

  const personalSetting = () => {
    header.AutoActive = false;
    header.active = false;
    header.fixTop = true;
  };

  const videoSetting = () => {
    header.AutoActive = false;
    header.active = true;
    header.fixTop = false;
  };

  return {
    header,
    homeSetting,
    personalSetting,
    videoSetting,
  };
});

export default useSettingStore;
