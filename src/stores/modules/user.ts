import { defineStore } from "pinia";

interface UserInfo {
  userId: string;
  username: string;
  avatar: string;
  token?: string;
}

const useUserStore = defineStore("user", () => {
  const userInfo = ref<UserInfo>({
    userId: "",
    username: "",
    avatar: "",
    token: localStorage.getItem("token") || "",
  });

  const setToken = (token: string) => {
    userInfo.value.token = token;
    localStorage.setItem("token", token);
  };

  const clearUserInfo = () => {
    userInfo.value = {
      userId: "",
      username: "",
      avatar: "",
      token: "",
    };
    localStorage.removeItem("token");
  };

  return { userInfo, clearUserInfo, setToken };
});

export default useUserStore;
