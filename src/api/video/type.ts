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

export interface commentReply {
  replyId: string;
  replyUserId: string;
  replyUserName: string;
  replyUserAvatar: string;
  replyContent: string;
  replyLikeCount: number;
  replyCreateTime: string;
}

export interface comment {
  commentId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  likeCount: number;
  replyCount: number;
  createTime: string;
  reples: commentReply[];
}

export interface videoCommentResponse extends baseResponse {
  data: {
    totalRecords: number;
    currentPage: number;
    pageSize: number;
    comments: comment[];
  };
}
