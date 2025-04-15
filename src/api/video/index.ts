import request from "@/http/request";
import type {
  videoCarouselResponse,
  videoCategoryResponse,
  videoListResponse,
} from "./type";
enum API {
  CATEGORY = "/video/category",
  CAROUSEL = "/video/carousel",
  RECOMMEND = "/video/recommend",
  LIST = "/video/list",
}

export const getCategory = () =>
  request.get<any, videoCategoryResponse>(API.CATEGORY);
export const getCarousel = () =>
  request.get<any, videoCarouselResponse>(API.CAROUSEL);

export const getRecommend = () =>
  request.get<any, videoListResponse>(API.RECOMMEND);

export const getList = () => request.get<any, videoListResponse>(API.LIST);
