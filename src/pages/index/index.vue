<template>
  <el-container>
    <el-aside>
      <h5 class="title">
        <i class="el-icon-s-unfold" @click="isCollapse = !isCollapse">
          <span v-if="!isCollapse" class="name">机构管理平台</span>
        </i>
      </h5>
      <el-menu
        router
        background-color="#545c64"
        :collapse="isCollapse"
        text-color="#fff"
        class="el-menu-vertical-demo"
        unique-opened
      >
        <el-menu-item index="home">
          <i class="el-icon-menu"></i>
          <span>主页</span>
        </el-menu-item>

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">机构管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/organization">机构列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">课程管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/course">课程列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">学员管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/user">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">评论管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/review">评论列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right">
        <el-dropdown @command="handleCommand">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            class="head-img"
          ></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personInfo">个人中心</el-dropdown-item>
            <el-dropdown-item command="set">设置</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="username">{{ getEmail }}</span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    ...mapGetters("login", ["getEmail"]),
  },
  methods: {
    handleCommand(command) {
      if (command == "logout") {
        this.$confirm("是否退出登陆?")
          .then(() => {
            window.localStorage.clear();
            this.$router.push("/");
          })
          .catch(() => {});
      }
    },
  },
};
</script>

<style scoped lang="scss">
.el-container {
  border: none !important;
  height: 100%;
  .el-aside {
    color: #333;
    width: auto !important;
    background: #545c64;
    .title {
      text-align: center;
      padding: 20px 0;
      color: #ffffff;
      font-size: 18px;
      .name {
        display: inline;
        margin-left: 10px;
      }
    }
    .el-menu {
      border-right: none;
      .el-menu-item-group__title {
        display: none;
      }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
  }
  .el-header {
    padding: 0 60px;
    color: #ffffff;
    font-size: 18px;
    background-color: #b3c0d1;
    line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .el-dropdown {
      display: flex;
      .head-img {
        margin-right: 10px;
      }
    }
  }
  .el-main {
    background: #e4e4e4;
    box-sizing: border-box;
  }
}
</style>
