<template>
  <div
    class="header-container"
    :class="{ scrolled: settingStore.header.active }"
  >
    <div class="left" @click="toHome">
      <i class="iconfont icon-bilibili-line" style="font-size: 42px"></i>
      <span :to="'/'" class="logo">首页</span>
    </div>
    <div class="center">
      <Search
        :searchHistory="searchHistory"
        :searchHot="searchHot"
        :class="{ scrolled: settingStore.header.active }"
      />
    </div>
    <div class="right">
      <div class="top-item">
        <div class="avatar-box">
          <el-avatar
            class="avatar"
            :size="40"
            :src="userStore.userInfo.avatar"
            @click="handleAvatarClick"
          />
          <div class="avatar-popover">
            <div style="text-align: center; margin-top: 32px">
              {{ userStore.userInfo.username }}
            </div>
            <div class="user-info">
              <div class="user-info-item">
                <span>10</span>
                <span>关注</span>
              </div>
              <div class="user-info-item">
                <span>10</span>
                <span>粉丝</span>
              </div>
              <div class="user-info-item">
                <span>10</span>
                <span>硬币</span>
              </div>
            </div>
            <div class="user-setting">
              <div class="user-setting-item">
                <div>
                  <el-icon><User /></el-icon>
                  <span>个人中心</span>
                </div>
                <el-icon><ArrowRight /></el-icon>
              </div>
              <div class="user-setting-item">
                <div>
                  <el-icon><VideoPlay /></el-icon>
                  <span>投稿管理</span>
                </div>
                <el-icon><ArrowRight /></el-icon>
              </div>
              <el-divider />
              <div class="user-setting-item" @click="handleLogout">
                <div>
                  <el-icon><CircleClose /></el-icon>
                  <span>退出登录</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-item">
        <el-icon size="30"><Message /></el-icon>
        <span>消息</span>
      </div>
      <div class="top-item">
        <el-icon size="30"><Star /></el-icon>
        <span>收藏</span>
      </div>
      <div class="top-item">
        <el-icon size="30"><Clock /></el-icon>
        <span>历史</span>
      </div>
      <div class="top-item">
        <el-icon size="30"><Edit /></el-icon>
        <span>创作中心</span>
      </div>
      <div class="top-item">
        <el-button class="upload-btn" size="large" icon="upload"
          >投稿</el-button
        >
      </div>
    </div>
  </div>

  <el-dialog v-model="dialogVisible" width="400px">
    <div class="login-box">
      <h1 style="text-align: center">登 录</h1>
      <el-form :model="form" label-width="auto">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input
            v-model="form.password"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin">
          登录
        </el-button>
      </el-form>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import Search from "@/components/search/index.vue";

import { ElMessage } from "element-plus";

const searchHistory = ref<string[]>(["1", "2", "3"]);
const searchHot = ref<string[]>([
  "十九日覅是否黑文化",
  "的房价肯定会咖啡馆和尼克",
  "3",
]);

const dialogVisible = ref(false);
const form = ref({
  username: "",
  password: "",
});

const handleAvatarClick = () => {
  const username = userStore.userInfo.username;
  if (username) {
    ElMessage.error("用户已登录");
    return;
  }
  dialogVisible.value = true;
};

const handleScroll = () => {
  if (window.scrollY > 60) {
    settingStore.header.active = true;
  } else {
    settingStore.header.active = false;
  }
};

import useSettingStore from "@/stores/modules/setting";
const settingStore = useSettingStore();

watch(
  () => settingStore.header.AutoActive,
  (value) => {
    if (value) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
  },
  {
    immediate: true,
  }
);

import useUserStore from "@/stores/modules/user";
import { login, getUserInfo, logout } from "@/api/user";
const userStore = useUserStore();

const handleLogin = async () => {
  const res = await login(form.value);
  if (res.code === 200) {
    userStore.setToken(res.data.token);
    const userInfo = await getUserInfo();
    if (userInfo.code === 200) {
      userStore.userInfo = userInfo.data;
      dialogVisible.value = false;
      ElMessage.success("登录成功");
    }
  }
};

const handleLogout = async () => {
  const res = await logout();
  if (res.code === 200) {
    userStore.clearUserInfo();
    ElMessage.success("退出登录成功");
    window.location.reload();
  }
};

import { useRouter } from "vue-router";

const router = useRouter();

const toHome = () => {
  router.push({ path: `/` });
};
</script>

<style scoped lang="scss">
@use "@/assets/iconfont/iconfont.css" as *;

.header-container {
  color: $text-color-light;
  height: 70px;
  width: 100%;
  background-color: $p-bg-color;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $m-padding;
  &:hover {
    box-shadow: $p-hover-shadow;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    margin-left: $s-padding;
    font-size: 24px;
    font-weight: 400;
    cursor: pointer;
  }
  .center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .right {
    display: flex;
    .top-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 16px;
      cursor: pointer;
    }
    .upload-btn {
      background-color: #fb7299;
      border: none;
      color: $text-color-light;
    }
  }
}

.scrolled {
  background-color: $p-bg-color;
  box-shadow: $p-shadow;
  color: $text-color-dark;
}

.login-box {
  display: flex;
  flex-direction: column;
  padding: $l-padding;
  .login-btn {
    width: 100%;
  }
}

.avatar-box {
  position: relative;

  .avatar-popover {
    box-shadow: $p-shadow;
    color: $text-color-deep;
    position: absolute;
    z-index: 1;
    top: 120%;
    width: 300px;
    background-color: $p-bg-color;
    border-radius: 4px;
    left: -150px;
    transform: scale(0);
    transition: all 0.3s ease-in-out;
    .user-info {
      display: flex;
      justify-content: space-around;
      margin-top: $m-margin;
      .user-info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    .user-setting {
      margin-top: $m-margin;
      padding: $l-padding;
      .user-setting-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 48px;
        border-radius: 4px;
        div {
          display: flex;
          align-items: center;
          margin-left: $l-margin;
        }
        i {
          margin-right: $l-margin;
        }
        &:hover {
          background-color: $p-bg-color-deep;
        }
      }
    }
  }
  &:hover {
    .avatar {
      transform: scale(2) translate(-10px, 10px);
    }
    .avatar-popover {
      transform: scale(1);
    }
  }

  .avatar {
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 2;
  }
}
</style>
