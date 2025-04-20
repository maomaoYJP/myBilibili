import Header from '@/components/header/index.vue';
<template>
  <div class="comment-container">
    <div class="head">
      <div class="title">
        <span class="title-name">评论</span>
        <span class="comment-count">{{ props.commentPages.totalRecords }}</span>
      </div>
      <div class="category">
        <RouterLink :to="'#'">最热</RouterLink>
        <div class="divider"></div>
        <RouterLink :to="'#'">最新</RouterLink>
      </div>
    </div>
    <div class="comment-box">
      <div class="video-comment-input">
        <VideoCommentInput
          v-model:content="topCommentData.content"
          @click="sendTopComment"
        ></VideoCommentInput>
      </div>
      <div class="comment-show">
        <div
          class="container"
          v-for="(comment, index) in commentList"
          :key="comment.id"
        >
          <div class="avatar-area">
            <ImgShow
              class="avatar"
              :height="avatarHeight"
              :width="avatarHeight"
              :src="comment.userAvatar"
            ></ImgShow>
          </div>
          <div class="comment-area">
            <div class="main-comment">
              <span class="username">{{ comment.userName }}</span>
              <p class="comment-content">
                {{ comment.content }}
              </p>
              <div class="comment-operation">
                <span class="date">{{ comment.createTime }}</span>
                <span class="like"
                  ><Operation
                    :count="comment.likeCount"
                    :isActive="comment.isActive"
                    @click="commentLike($event, comment)"
                    ><i
                      class="iconfont icon-good"
                      style="font-size: 15px"
                    ></i></Operation
                ></span>
                <span class="dislike"
                  ><Operation :show-number="false"
                    ><i
                      class="iconfont icon-cai"
                      style="font-size: 14px"
                    ></i></Operation
                ></span>
                <a
                  class="reply-btn"
                  @click="showReply(index, comment.id, comment.userName)"
                  >回复</a
                >
              </div>
            </div>
            <div class="reply-area">
              <div
                class="reply"
                v-for="reply in comment.replies"
                :key="reply.id"
              >
                <div class="reply-avatar">
                  <ImgShow
                    class="avatar"
                    :height="replyAvatarHeight"
                    :width="replyAvatarHeight"
                    :src="reply.userAvatar"
                  ></ImgShow>
                </div>
                <div class="reply-content">
                  <span class="reply-username">{{ reply.userName }}</span>
                  <span
                    class="reply-parent-username"
                    v-if="reply.replyUsername && reply.replyUsername !== ''"
                  >
                    <span> 回复 </span>
                    <span class="username">{{ reply.replyUsername }}</span>
                  </span>
                  <span class="reply-content">{{ reply.content }}</span>
                  <div class="comment-operation">
                    <span class="date">{{ reply.createTime }}</span>
                    <span class="like"
                      ><Operation
                        :count="reply.likeCount"
                        @click="commentLike($event, reply)"
                        :isActive="reply.isActive"
                        ><i
                          class="iconfont icon-good"
                          style="font-size: 15px"
                        ></i></Operation
                    ></span>
                    <span class="dislike"
                      ><Operation :show-number="false"
                        ><i
                          class="iconfont icon-cai"
                          style="font-size: 14px"
                        ></i></Operation
                    ></span>
                    <a
                      class="reply-btn"
                      @click="showReply(index, reply.id, reply.userName)"
                      >回复</a
                    >
                  </div>
                </div>
              </div>
              <div class="video-comment-input" v-if="comment.showReply">
                <VideoCommentInput
                  v-model:content="sendCommentData.content"
                  @click="sendComment(comment)"
                  ref="textareaRef"
                ></VideoCommentInput>
              </div>
              <el-divider></el-divider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoCommentInput from "./components/video-comment-input.vue";
import type { videoCommentResponse } from "@/api/video/type";
import ImgShow from "@/components/img-show/index.vue";
import Operation from "@/components/operation/index.vue";
import type { comment, commentReply } from "@/api/video/type";
import { ElMessage } from "element-plus";

const props = withDefaults(
  defineProps<{ commentPages?: videoCommentResponse["data"] }>(),
  {
    commentPages: () => ({
      totalRecords: 0,
      currentPage: 1,
      pageSize: 10,
      comments: [],
    }),
  }
);

const avatarHeight = 50;
const replyAvatarHeight = 30;
const commentList = ref<comments[]>([]);
const textareaRef = ref<textareaRefInstance[] | null>(null);
const sendCommentData = ref<reply>({
  id: RandomNumberSequence(16),
  replyId: "",
  userId: "",
  userName: "",
  userAvatar: "",
  content: "",
  likeCount: 0,
  createTime: getCurrentTime(),
  isActive: false,
  replyUsername: "",
});
const topCommentData = ref<comment>({
  id: RandomNumberSequence(16),
  userId: "",
  userName: "",
  userAvatar: "",
  content: "",
  likeCount: 0,
  replyCount: 0,
  createTime: getCurrentTime(),
  isActive: false,
  replies: [],
});

interface textareaRefInstance {
  focus: () => void;
}

interface reply extends commentReply {
  replyUsername?: string;
}

interface comments extends comment {
  showReply: boolean;
  replies: reply[];
}

watch(
  () => props.commentPages.comments,
  (newComments) => {
    commentList.value = newComments.map((item) => {
      return { ...item, showReply: false };
    });
  },
  { immediate: true }
);

const showReply = (index: number, id: string, username: string) => {
  sendCommentData.value.replyId = id;
  if (commentList.value[index].id !== id) {
    sendCommentData.value.replyUsername = username;
  } else {
    sendCommentData.value.replyUsername = "";
  }
  commentList.value.forEach((item) => (item.showReply = false));
  commentList.value[index].showReply = true;
  nextTick(() => {
    textareaRef.value![0].focus();
  });
};

const commentLike = (state: boolean, reply: commentReply | comment) => {
  reply.isActive = !state;
  reply.isActive ? reply.likeCount++ : reply.likeCount--;
};

import useUserStore from "@/stores/modules/user";
const userStore = useUserStore();

const sendTopComment = () => {
  topCommentData.value.userName = userStore.userInfo.username;
  topCommentData.value.userAvatar = userStore.userInfo.avatar;
  if (topCommentData.value.content.length !== 0) {
    commentList.value.unshift(topCommentData.value as comments);
    clearTopCommentData();
  } else {
    ElMessage({
      message: "请输入内容",
      type: "error",
    });
  }
};

const sendComment = (comment: comment) => {
  sendCommentData.value.userName = userStore.userInfo.username;
  sendCommentData.value.userAvatar = userStore.userInfo.avatar;
  if (sendCommentData.value.content.length !== 0) {
    comment.replies.push(sendCommentData.value);
    clearSendCommentData();
  } else {
    ElMessage({
      message: "请输入内容",
      type: "error",
    });
  }
};

function clearSendCommentData() {
  sendCommentData.value = {
    id: RandomNumberSequence(16),
    replyId: "",
    userId: "",
    userName: "",
    userAvatar: "",
    content: "",
    likeCount: 0,
    createTime: getCurrentTime(),
    isActive: false,
    replyUsername: sendCommentData.value.replyUsername,
  };
}

function clearTopCommentData() {
  topCommentData.value = {
    id: RandomNumberSequence(16),
    userId: "",
    userName: "",
    userAvatar: "",
    content: "",
    likeCount: 0,
    replyCount: 0,
    createTime: getCurrentTime(),
    isActive: false,
    replies: [],
  };
}

function RandomNumberSequence(len: number = 16) {
  let result = "";
  for (let i = 0; i < len; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

function getCurrentTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // 月份从 0 开始计数，所以要加 1
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.comment-container {
  width: 100%;
  .head {
    display: flex;
    align-items: center;
    .title {
      display: flex;
      align-items: center;
      .title-name {
        font-size: $m-text-size;
      }
      .comment-count {
        margin-left: $s-margin;
        color: $text-color-deep;
      }
    }
    .category {
      margin-left: 40px;
      .divider {
        display: inline-block;
        height: 11px;
        border-left: 1px solid $text-color-deep;
        margin: 0 $m-margin;
      }
    }
  }
  .comment-box {
    width: 100%;
    .video-comment-input {
      margin-top: $l-margin;
    }
    .comment-show {
      margin-top: $l-margin;
      width: 100%;
      .container {
        width: 100%;
        display: flex;
        .avatar-area {
          .avatar {
            border-radius: 50%;
          }
        }
        .comment-area {
          width: 100%;
          margin-left: $l-margin;
          .main-comment {
            width: 100%;
            .comment-operation {
              display: flex;
              align-items: center;
              color: $text-color-deep;
              font-size: $xs-text-size;
              .like {
                margin-left: $l-margin;
              }
              .dislike {
                margin-left: $l-margin;
              }
              .reply-btn {
                margin-left: $l-margin;
              }
            }
            .username {
              color: $text-color-deep;
            }
          }
          .reply-area {
            width: 100%;
            display: flex;
            flex-direction: column;
            .reply {
              display: flex;
              margin-top: $l-margin;
              .reply-avatar {
                .avatar {
                  border-radius: 50%;
                }
              }
              .reply-content {
                margin-left: $s-margin;
                .reply-username {
                  color: $text-color-deep;
                }
                .reply-parent-username {
                  .username {
                    color: $text-color-deep;
                  }
                }
                .comment-operation {
                  display: flex;
                  align-items: center;
                  color: $text-color-deep;
                  font-size: $xs-text-size;
                  margin-top: $m-margin;
                  .like {
                    margin-left: $l-margin;
                  }
                  .dislike {
                    margin-left: $l-margin;
                  }
                  .reply-btn {
                    margin-left: $l-margin;
                  }
                }
              }
            }
            .video-comment-input {
              margin-top: $l-margin;
            }
          }
        }
      }
    }
  }
}
</style>
