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

export interface video {
  img: string;
  title: string;
  createTime: string;
  user: {
    id: string;
    username: string;
  };
}

export interface videoRecommendListResponse extends baseResponse {
  data: video[];
}

export interface videoListResponse extends baseResponse {
  data: {
    totalRecords: number;
    currentPage: number;
    pageSize: number;
    videoList: video[];
  };
}

export interface commentReply {
  id: string;
  replyId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  likeCount: number;
  createTime: string;
  isActive: boolean;
  img?: string;
}

export interface comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  likeCount: number;
  replyCount: number;
  createTime: string;
  isActive: boolean;
  img?: string;
  replies: commentReply[];
}

export interface videoCommentResponse extends baseResponse {
  data: {
    totalRecords: number;
    currentPage: number;
    pageSize: number;
    comments: comment[];
  };
}
