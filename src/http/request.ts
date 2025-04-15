import axios, { type AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
import { getMessageInfo, ErrorCode } from "./status";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    const code = response.data.code;
    if (code === ErrorCode.SUCCESS) {
      return response.data;
    }
    ElMessage.error(getMessageInfo(code));
    return response.data;
  },
  (error: any) => {
    const { response } = error;
    if (response) {
      ElMessage({
        message: getMessageInfo(response.status),
        type: "error",
      });
      return Promise.reject(response.data);
    }
    ElMessage({
      message: "网络连接异常,请稍后再试!",
      type: "error",
    });
  }
);

export default request;
