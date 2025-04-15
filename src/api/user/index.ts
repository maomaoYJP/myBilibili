import request from "@/http/request";
import type {
  loginRequest,
  loginResponse,
  userInfoResponse,
  logoutResponse,
} from "./type";
enum API {
  LOGIN = "/login",
  USER_INFO = "/userinfo",
  LOGOUT = "/logout",
}

export const login = (data: loginRequest) =>
  request.post<any, loginResponse>(API.LOGIN, data);

export const getUserInfo = () =>
  request.get<any, userInfoResponse>(API.USER_INFO);

export const logout = () => request.get<any, logoutResponse>(API.LOGOUT);
