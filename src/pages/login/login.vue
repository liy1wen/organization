<template>
  <div class="contain">
    <el-form :model="loginInfo" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
      <h2 class="title f20">admin管理平台</h2>
      <el-form-item label="" prop="username">
        <el-input prefix-icon="iconfont icon-icon" type="text" v-model="loginInfo.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input prefix-icon="iconfont icon-mima" type="password" v-model="loginInfo.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 5, max: 5, message: "账号长度应该是5", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "账号长度应该是6", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "校验中",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          this.$store.dispatch('changeInfo',this.loginInfo)
          window.localStorage.setItem('token','Ejgdfglgrkkdfgkdf_dskjfdlfgkfdngdfmgnkd_djkgjdgjdfjgjf')
          setTimeout(() => {
            this.$message({
              message: "登录成功",
              type: "success",
              duration: "1000"
            });
            loading.close();
            this.$router.push('/home');
          }, 1000);
        } else {
          this.$message({
            message: "请输入账号或密码",
            type: "error"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped lang="scss">
.contain {
  height: 100%;
  background: url('https://img-blog.csdnimg.cn/20200324200558321.jpg');
  // background: #545c64;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 340px;
    background: #ffffff;
    color: #333;
    border-radius: 5px;
    padding: 30px 40px 10px 30px;
    .title {
      text-align: center;
      padding-bottom: 30px;
    }
  }
}
// .el-form-item__label:before {
//   content: none !important;
// }
</style>