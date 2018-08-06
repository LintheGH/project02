<template>
  <div class="app-register">
    <form @submit.prevent="submit">
      <div class="input-wrap">
        <ui-input
          v-model = "phone"
          type = "number"
          disable="disable"
          placeholder = "请输入您的手机号"
        >
          <div 
          @click="getCode"
          class="codeBtn"
          slot="slot2"
          v-if="!isClick"
          >获取验证码</div>
          <div 
          class="clickedCodeBtn"
          slot="slot2"
          v-else
          >{{countDown + '秒后获重新取'}}</div>
        </ui-input>
        <ui-input
          v-model = "code"
          type = "text"
          placeholder = "请输入您的验证码"
        >
        </ui-input>
        <ui-input
          v-model = "password"
          type = "password"
          placeholder = "请设定您的密码"
        >
        </ui-input>
        <ui-input
          type = "password"
          v-model="passwordt"
          placeholder = "请再次输入您的密码"
        >
        </ui-input>
      </div>
      <div class='submit-wrap'>
        <button type="submit" class="register b-btn">注册</button>
      </div>
      <p>点击注册，即代表同意<a href="//front.yiguo.com/h5/registrationAgreement/RegistrationAgreement.html">《易果服务协议》</a></p>
    </form>
    <div class="logo">
      <em class="yiguo_logo"></em>
    </div>
    <register-code v-if="!isClose" :close="close" :letCodeImgCorrect="letCodeImgCorrect" :phone="phone" :countDown="_countDown"></register-code>
  </div> 
</template>
<script>
import RegisterCode from './Components/RegisterCode'
import { Toast } from 'mint-ui'
export default {
  name: 'app-register',
  data () {
    return {
      phone: '',
      code: '',
      password: '',
      passwordt: '',
      countDown: 60,
      isClick: false,
      isClose: true,
      codeImgCorrect: false
    }
  },
  components: { RegisterCode },
  methods: {
    submit () {
      let codeReg = /\w+/i.test(this.code)
      let passwordReg = /^[a-z0-9_-]{6,18}$/i.test(this.password)
      let passwordtReg = this.passwordt === this.password
      if(!codeReg){
        Toast({
          message: '请输入验证码',
          position: 'middle',
          duration: 2000
        })
        return
      }
      if(!passwordReg){
        Toast({
        message: '密码格式不正确',
        position: 'middle',
        duration: 2000
      })
        return
      }
      if(!passwordtReg){
        Toast({
          message: '密码不一致',
          position: 'middle',
          duration: 2000
        })
          return
      }
      this.$http({// https://b2capigateway.yiguo.com/api/user/User/ResetPassword resetpassword
        method: 'post',
        url: '/gateway/api/user/User/UserRegister',
        headers: {
          'appName': 3000025
        },
        data: {
          Body: {
            ActivityCode: "",
            Password: this.password,
            Source: 5,
            UserName: this.phone,
            VerifyCode: this.code
          },
          Head: {
            CityCode: "512",
            CityId: "c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e",
            DeviceId: "c8cc0154da5193973d9c3d068c6660fd",
            DistrictId: "2252dc4d-0069-4c0f-b60f-21ce5607dd46",
            LoginToken: '',
            Token: ''
          }
        }
      }).then(res => {
        console.log(res)
      })
    },
    getCode () {
      let result = /^1[3-9]\d{9}$/i.test(this.phone)
      if(!result){
        Toast({
          message: '手机号不正确',
          position: 'middle',
          duration: 2000
        })
        return
      }
      this.isClose = false
    },
    close () {
      this.isClose = true
    },
    letCodeImgCorrect () {
      this.codeImgCorrect = true
    },
    _countDown () {
      if (this.codeImgCorrect) {
        this.isClose = true
        this.isClick = true
        let timer = setInterval(() => {
          this.countDown--
          if (this.countDown === 0) {
            clearInterval(timer)
            this.countDown = 60
            this.isClick = false
          }
        },1000)
      }
    }
  },
  created () {
    console.log(this)
  }
}
</script>
<style lang="scss" scoped>
  .app-register{
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
      .codeBtn {
        position: absolute;
        top: .15rem;
        right: .15rem;
        height: .3rem;
        padding: 0 .06rem;
        line-height: .3rem;
        text-align: center;
        color: #fff;
        border-radius: .04rem;
        background: #008842;
      }
      .clickedCodeBtn {
        position: absolute;
        top: .15rem;
        right: .15rem;
        height: .3rem;
        padding: 0 .06rem;
        line-height: .3rem;
        text-align: center;
        color: #fff;
        border-radius: .04rem;
        background: #808080;
      }
      .submit-wrap{
        display:flex;
        margin-top: .3rem;
        justify-content: space-around;
        .register{
          width: 50%;
          height: .4rem;
          border: none;
          border-radius: .04rem;
          font-size: .16rem;
          color: #fff;
          background: #008842;
        }
      }
      p{
        text-align: center;
        margin-top: .1rem;
        a{
          color: #008842;
        }
      }
    }
  }
</style>
