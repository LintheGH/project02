<template>
  <div class="app-login">
    <form @submit.prevent="submit">
      <div class="input-wrap">
        <ui-input
          v-model = "username"
          type = "text"
          placeholder = "请输入您的用户名"
        >
          <i class="iconfont icon-my1" slot="slot1"></i>
        </ui-input>
        <ui-input
          v-model = "password"
          type = "password"
          placeholder = "请输入您的密码"
        >
          <i class="iconfont icon-yuechi-" slot="slot1"></i>
        </ui-input>
        <ui-input
          v-model = "code"
          type = "text"
          placeholder = "请输入验证码"
        >
          <i class="iconfont" slot="slot1"></i>
          <img :src="codeImg" alt="" slot="slot2" class="img-code" @click="getCode">
        </ui-input>
      </div>
      <router-link :to="{ name: 'forgotpw'}" class="forgotpw">忘记密码？</router-link>
      <div class='submit-wrap'>
        <button type="submit" class="login b-btn">登录</button>
        <router-link tag="button" :to="{ name: 'register' }" class="register b-btn">注册</router-link>
      </div>
    </form>
    <div class="logo">
      <em class="yiguo_logo"></em>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-login',
  data () {
    return {
      username: '',
      password: '',
      code: '',
      codeImg: ''
    }
  },
  methods: {
    getCode () {
      this.$http({
        method: 'post',
        url: '/loginregister/api/user/User/GetVerificationCode',
        headers: {
          'appName': ''
        },
        data: {
          Body: {},
          Head: {
            CityCode:"512",
            CityId:"c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e",
            DeviceId:"c8cc0154da5193973d9c3d068c6660fd",
            DistrictId:"2252dc4d-0069-4c0f-b60f-21ce5607dd46",
            LoginToken:"",
            Token:""
          }
        }
      }).then(res => {
        this.codeImg = res.data.Data.CodeImg
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getCode()
  }
}
</script>
<style lang="scss" scoped>
  .app-login{
    height: 100%;
    width: 100%;
    background: #F8F8F8;
    overflow: hidden;
    form{
      height: 100%;
      width: 100%;
      border-top: .01rem solid #EBEEE9;
      border-bottom: .01rem solid #EBEEE9;
      .input-wrap{
        background: #fff;
        margin-top: .3rem;
        padding-left: .2rem;
      }
      .submit-wrap{
        display:flex;
        justify-content: space-around;
        .b-btn{
          width: 40%;
          height: .4rem;
          border: none;
          border-radius: .04rem;
          font-size: .16rem;
        }
        .login{
          color: #fff;
          background: #008842;
        }
        .register{
          border: 1px solid #008842;
          color: #008842;
          background: #fff;
        }
      }
      .img-code{
        position: absolute;
        top: .15rem;
        right: .15rem;
        height: .3rem;
      }
      .iconfont{
        font-size:.20rem;
        color: #008842;
        width: .2rem;
        height: .23rem;
        margin-right: .1rem;
      }
      .forgotpw{
        display: inline-block;
        color: #008842;
        margin:.15rem .2rem;
        font-size: .15rem;
      }
    }
    .logo{
      width: 100%;
      text-align: center;
      bottom: 15px;
      left: 0;
      padding: 10px;
      position: absolute;
      box-sizing: border-box;
      .yiguo_logo {
        width: 104px;
        height: 34px;
        background-image: url(//img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png);
        background-size: 100% 100%;
        margin: 0 auto;
        display: block;
      }
    }
  }
  
</style>
