<template>
  <el-container>
    <Nav />
    <el-container class="right-content">
      <Header />
      <Main />
    </el-container>
  </el-container> 
</template>

<script>
import Header from './component/Header'
import Nav from './component/Nav'
import Main from './component/Main'
export default {
  components: {
    Header,Nav,Main
  },
  data() {
    return {

    }
  }
};
</script>

<style scoped lang="scss">
.el-container {
  border: none !important;
  height: 100%;
  .right-content{
    flex-direction: column;
  }
}
</style>
