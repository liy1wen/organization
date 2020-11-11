<template>
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
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters("login", ["getEmail"]),
    },
    methods: {
        handleCommand(command) {
            if (command == "logout") {
                this.$confirm("是否退出登陆?")
                .then(() => { 
                    this.$store.dispatch('login/loginOut').then(()=>{
                    this.$router.push("/");
                    })
                })
                .catch(() => {});
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    .el-header {
        padding: 0 60px;
        color: $color-white;
        font-size: 18px;
        background-color: $bg-header;
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
</style>