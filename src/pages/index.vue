<template>
  <el-container>
    <el-aside>
      <h5 class="title">
        <i class="el-icon-s-unfold" @click="isCollapse = !isCollapse">
          <span v-if="!isCollapse" class="name">中医管理平台</span>
        </i>
      </h5>
      <el-menu :default-openeds="['0']" router background-color="#545c64" :collapse="isCollapse" text-color="#fff" class="el-menu-vertical-demo">
        <el-menu-item index="home">
          <i class="el-icon-menu"></i>
          <span>主页</span>
        </el-menu-item>

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">账号管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="deleteAccount"><i class="el-icon-location"></i>删除账号</el-menu-item>
            <el-menu-item index="addAccount"><i class="el-icon-location"></i>添加账号</el-menu-item>
            <el-menu-item index="editAccount"><i class="el-icon-location"></i>编辑账号</el-menu-item>
            <el-menu-item index="accountList"><i class="el-icon-location"></i>账号列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">账号注册</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="deleteAccount">Option 1</el-menu-item>
            <el-menu-item index="accountList">账号列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">账号查询</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="fail">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right;">
        <el-dropdown>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            class="head-img"
          ></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="username">{{ info.username }}</span>
      </el-header>
      <el-main>
        <router-view></router-view>
        <button @click="logout">退出</button>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    computed: {
      ...mapState({
        // 'info'
        info: state => state.info
      })
    },
    methods: {
      logout() {
        window.localStorage.clear()
        this.$router.push('/')
      }
    }
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
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
  }
  .el-header {
    color: #ffffff;
    font-size: 18px;
    background-color: #b3c0d1;
    line-height: 60px;
    .head-img {
      display: inline-block;
      position: relative;
      top: 10px;
      right: 15px;
    }
    .username {
      position: relative;
      bottom: 3px;
    }
  }
}
</style>

