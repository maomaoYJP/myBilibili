import axios from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    const { code, message } = response.data;
    if (code === "200") {
      return response.data;
    }
    ElMessage.error(message || "请求失败");
    return Promise.reject(new Error(message || "error"));
  },
  (error) => {
    if (error.response.data) {
      const { code, message } = error.response.data;
      if (code === "401") {
        ElMessageBox.confirm("登录过期，请重新登录", "提示", {
          confirmButtonText: "确定",
          type: "warning",
        }).then(() => {
          localStorage.clear();
          window.location.href = "/";
        });
      } else {
        ElMessage.error(message || "请求失败");
      }
    }
    return Promise.reject(error.message);
  }
);

export default request;
