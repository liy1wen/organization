<template>
    <el-main>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </el-main>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .el-main {
        background: $bg-page;
        box-sizing: border-box;
    }
</style>