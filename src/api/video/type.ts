import type { baseResponse } from "../type";

export interface videoCategoryResponse extends baseResponse {
  data: {
    name: string;
    list: string[];
  }[];
}

export interface videoCarouselResponse extends baseResponse {
  data: {
    img: string;
  }[];
}

export interface videoListResponse extends baseResponse {
  data: {
    img: string;
    title: string;
    createTime: string;
    user: {
      id: string;
      username: string;
    };
  }[];
}
