<template>
  <div class="contain">
    <el-form
      :model="loginInfo"
      :rules="rules"
      ref="ruleForm"
      label-width="0"
      class="demo-ruleForm"
    >
      <h2 class="title f20">机构管理平台</h2>
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
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
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
<style scoped lang="scss">
.contain {
  height: 100%;
  background: url("https://img-blog.csdnimg.cn/20200324200558321.jpg") no-repeat;
  background-size: cover;
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
    .btn-group {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
