<template>
  <div class="login">
    <div class="login_box">
      <el-form ref="form" :model="form" label-width="0px">
        <p class='login_title'>欢迎登录—MMALL管理系统</p>
        <el-form-item >
          <el-input placeholder="请输入账号" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { Request } from "@/until/request";
import { login } from "@/request/http";
export default {
  name: 'Login',
  data() { 
    return {
      form: {
          username: '',
          password: '',
        }
    }
  },
  methods: {
    onSubmit() {
      // Request.getData({
      //   url:`/api/user/login.do?username=${this.form.username}&password=${this.form.password}`,
      //   method:'post'
      // })
      login(this.form).then((data)=>{
        console.log(data);
        if (data.data.status==0) {
          this.$message(data.data.msg);
          localStorage.setItem('admin',this.form.username);
          this.$router.push('/home');
        } else {
          this.$message(data.data.msg);
        }
      })
    }
  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
@import '@/Scss/index.scss';
.login{
  @include SizeBack(100%,100%,0px,#f3f3f3);
  padding-top:100px;
  box-sizing: border-box;
}
.login_box{
  @include SizeBack(30%,30%,0px,white);
  @include Pd(10px 15px 20px);
  margin:0 auto;
}
.login_title{
  @include FontOnly(16px);
  margin-bottom:10px;
}
.el-button{
  width:100%;
  background: #337ab7;
  @include FontOnly(20px);
}
</style>