<template>
  <div class="register-code">
    <div class="wrap">
      <div class="title">
        <span>{{ title }}</span>
        <i
          class="iconfont icon-guanbi"
          @click="close"
        ></i>
      </div>
      <div class="text-wrap">
        <div class="input-wrap">
          <input type="text" v-model="code" placeholder="请输入验证码">
        </div>
        <img :src="codeImg" @click="getCode" class="img-code">
      </div>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'register-code',
  data () {
    return {
      title: '请输入图片上的验证码',
      code: '',
      codeImg: '',
      codeId: ''
    }
  },
  props: ['close', 'letCodeImgCorrect', 'phone', 'countDown'],
  methods: {
    getCode () {
      this.$http({
        method: 'post',
        url: '/gateway/api/user/User/GetVerificationCode',
        headers: {
          'appName': 3000025
        },
        data: {
          Body: {},
          Head: {
            CityCode: '512',
            CityId: 'c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e',
            DeviceId: 'c8cc0154da5193973d9c3d068c6660fd',
            DistrictId: '2252dc4d-0069-4c0f-b60f-21ce5607dd46',
            LoginToken: '',
            Token: ''
          }
        }
      }).then(res => {
        this.codeImg = res.data.Data.CodeImg
        this.codeId = res.data.Data.CodeId
      }).catch(err => {
        console.log(err)
      })
    },
    submit () {
      let codeReg = /\w+/i.test(this.code)
      if (!codeReg) {
        Toast({
          message: '请输入验证码',
          position: 'middle',
          duration: 2000
        })
        return
      }
      this.$http({
        method: 'post',
        url: '/gateway/api/user/User/SendSmsCode',
        headers: {
          'appName': 3000025
        },
        data: {
          Body: {
            CodeId: this.codeId,
            CodeValue: this.code,
            Mobile: this.phone,
            SmsType: 1
          },
          Head: {
            CityCode: '512',
            CityId: 'c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e',
            DeviceId: 'c8cc0154da5193973d9c3d068c6660fd',
            DistrictId: '2252dc4d-0069-4c0f-b60f-21ce5607dd46',
            LoginToken: '',
            Token: ''
          }
        }
      }).then(res => {
        if (res.data.IsSuccessful) {
          this.letCodeImgCorrect()
          this.countDown()
        } else {
          Toast({
            message: res.data.Message,
            position: 'middle',
            duration: 2000
          })
        }
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
  .register-code {
    background: rgba(0, 0, 0, .7);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    .wrap {
      background: #fff;
      width: 3.32rem;
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius: .03rem;
    }
    .title{
      height: .44rem;
      padding: .12rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
    }
    .text-wrap {
      width: 2rem;
      padding: .15rem 0;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .input-wrap {
      width: 1.2rem;
      height: .3rem;
      padding: .06rem;
      border: .01rem solid #DADADA;
      input {
        border: 0 none;
        height: 100%;
        width: 100%;
        vertical-align: top;
      }
      .img-code{
        height: .3rem;
      }
    }
    button {
      display: block;
      padding: .06rem .3rem;
      background: #008842;
      color: #fff;
      margin: 0 auto .15rem;
      border-radius: .03rem;
      border: none;
    }
  }
</style>
