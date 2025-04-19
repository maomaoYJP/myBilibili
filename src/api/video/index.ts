import request from "@/http/request";
import type {
  videoCarouselResponse,
  videoCategoryResponse,
  videoListResponse,
  videoCommentResponse,
} from "./type";
enum API {
  CATEGORY = "/video/category",
  CAROUSEL = "/video/carousel",
  RECOMMEND = "/video/recommend",
  LIST = "/video/list",
  VIDEO_COMMENT = "/video/comment",
}

export const getCategory = () =>
  request.get<any, videoCategoryResponse>(API.CATEGORY);
export const getCarousel = () =>
  request.get<any, videoCarouselResponse>(API.CAROUSEL);

export const getRecommend = () =>
  request.get<any, videoListResponse>(API.RECOMMEND);

export const getList = () => request.get<any, videoListResponse>(API.LIST);

export const getVideoComment = (currentPage: number, pageSize: number) => {
  return request.get<any, videoCommentResponse>(
    API.VIDEO_COMMENT + `?currentPage=${currentPage}&pageSize=${pageSize}`
  );
};
