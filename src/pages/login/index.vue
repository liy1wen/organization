<template>
  <div class="contain">
    <el-card class="box-card">
      <el-form
        :model="loginInfo"
        :rules="rules"
        ref="ruleForm"
        label-width="0"
        class="demo-ruleForm"
      >
        <h1 class="title f36">机构管理平台</h1>
        <el-form-item label="" prop="email">
          <el-input
            prefix-icon="iconfont icon-icon"
            type="text" 
            v-model="loginInfo.email"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            prefix-icon="iconfont icon-mima"
            type="password"
            v-model="loginInfo.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-group">
          <el-button type="primary" class="f20" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button class="f20" @click="resetForm('ruleForm')">清空</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginInfo: {
        email: "",
        password: "",
      },
      rules: {
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch("login/login", this.loginInfo).then((res) => {
            this.$router.push("home");
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss">
.contain {
  height: 100vh;
  // background: url("https://img-blog.csdnimg.cn/20200324200558321.jpg") no-repeat;
  // background-size: cover;
  background: $color-main;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 480px;
    background: $color-white;
    color: $color-dark;
    border-radius: 5px;
    padding: 50px;
    .title {
      text-align: center;
      padding-bottom: 30px;
    }
    .btn-group {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      margin-bottom: 0;
    }
    .el-form-item{
      .el-input{
        font-size: 16px;
          .el-input__inner{
            height: 50px;
          }
      }
    }
  }
}
</style>
