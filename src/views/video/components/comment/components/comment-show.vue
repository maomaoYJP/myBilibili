<template>
  <div class="comment-show-container">
    <div class="avatar-area">
      <ImgShow
        class="avatar"
        :height="avatarHeight"
        :width="avatarHeight"
        :src="avatar"
      ></ImgShow>
    </div>
    <div class="comment-area">
      <div class="main-comment">
        <span class="username">maomao</span>
        <p class="comment-content">
          嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻
        </p>
        <div class="comment-operation">
          <span class="date">2025-03-25 13:19</span>
          <span class="like"
            ><Operation
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
          <a class="reply-btn">回复</a>
        </div>
      </div>
      <div class="reply-area">
        <div class="reply">
          <div class="reply-avatar">
            <ImgShow
              class="avatar"
              :height="replyAvatarHeight"
              :width="replyAvatarHeight"
              :src="avatar"
            ></ImgShow>
          </div>
          <div class="reply-content">
            <span class="reply-username">maomao</span>
            <span class="reply-content"
              >嘻嘻一一二二嘻嘻一一二二嘻嘻一一二二嘻嘻一一二二嘻嘻一一二二</span
            >
            <div class="comment-operation">
              <span class="date">2025-03-25 13:19</span>
              <span class="like"
                ><Operation
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
              <a class="reply-btn">回复</a>
            </div>
          </div>
        </div>
        <div class="video-comment-input">
          <VideoCommentInput></VideoCommentInput>
        </div>
        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImgShow from "@/components/img-show/index.vue";
import avatar from "@/assets/images/avatar.jpg";
import Operation from "@/components/operation/index.vue";
import VideoCommentInput from "@/views/video/components/comment/components/video-comment-input.vue";

const avatarHeight = 50;
const replyAvatarHeight = 30;
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;
.comment-show-container {
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
</style>
