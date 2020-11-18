<template>
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
        <el-submenu v-for="(item,index) in routes" :key="index" :index="item.name">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subIndex">
            <el-menu-item :index="subItem.path">{{subItem.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
</template>
<script>
export default {
    data() {
        return {
        isCollapse: false,
        routes: [{name: '控制台',icon: 'el-icon-menu',children:[{name: '地图', path: '/index'}]},{name: '机构管理',icon: 'el-icon-location',children: [{name: '机构列表',path: '/organizationIndex'}]},{name: '课程管理',icon: 'el-icon-document',children:[{name: '课程列表', path: '/courseIndex'}]},{name: '学员管理',icon: 'el-icon-menu',children:[{name: '用户列表', path: '/userIndex'}]},{name: '评论管理',icon: 'el-icon-menu',children:[{name: '评论列表', path: '/reviewIndex'}]}]
        };
    },
    created() {
      // this.routes = this.$router.options.routes;
    },
}
</script>
<style lang="scss" scoped>
    .el-aside {
        color: $color-dark;
        width: auto !important;
        background: $color-main;
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
</style>