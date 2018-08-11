<template>
  <div class="app-my">
    <user-info :userInfo="userInfo" :checkInfo="CheckInfo"></user-info>
    <account :balanceAndCoupons="BalanceAndCoupons"></account>
    <order :orderIcons="OrderIcons"></order>
    <service :iconList="IconList" class="service"></service>
    <app-nav></app-nav>
  </div>
</template>
<script>
import UserInfo from './Components/UserInfo'
import Account from './Components/Account'
import Order from './Components/Order'
import Service from './Components/Service'
export default {
  name: 'app-my',
  data () {
    return {
      BalanceAndCoupons: [], // 账户余额。。。
      CheckInfo: {}, // 签到送好礼
      userInfo: {
        userid: '',
        username: '',
        userphoto: '',
        userleveltext: '',
        userlevel: 0
      },
      IconList: [], // 收货地址、充值卡
      OrderIcons: [], // 代支付、待收货
      OrderTips: {},
      useLevelInfo: {},
      DisplayName: '',
      HeadBigBgUrl: '',
      HeadSmallBgUrl: ''
    }
  },
  computed: {
    token () {
      let cookie_token = this.$cookies.get('ygm_user')
      if (cookie_token) {
        return cookie_token
      } else {
        return ''
      }
    }
  },
  components: {
    UserInfo,
    Account,
    Order,
    Service
  },
  created () {
    this.$http({
      url: '/gateway/api/user/User/GetUserInfo',
      method: 'post',
      headers: {
        'appName': 3000025
      },
      data: {
        Body: '',
        Head:{
          City: '512',
          CityId: 'c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e',
          DeviceId: '36f57175b36bb3b8c5ae1c378c8ad38b',
          DistrictId: '2252dc4d-0069-4c0f-b60f-21ce5607dd46',
          LoginToken: this.token,
          Token: this.token
        }
      }
    }).then(res => {
      this.BalanceAndCoupons = res.data.Data.UserInfo.BalanceAndCoupons
      this.CheckInfo = res.data.Data.UserInfo.CheckInfo
      this.IconList = res.data.Data.UserInfo.IconList
      this.OrderIcons = res.data.Data.UserInfo.OrderIcons
      this.OrderTips = res.data.Data.UserInfo.OrderTips
      this.useLevelInfo = res.data.Data.UserInfo.useLevelInfo
      this.DisplayName = res.data.Data.UserInfo.DisplayName
      this.HeadBigBgUrl = res.data.Data.UserInfo.HeadBigBgUrl
      this.HeadSmallBgUrl = res.data.Data.UserInfo.HeadSmallBgUrl
      this.userInfo.userid = res.data.Data.UserInfo.UserId
      this.userInfo.username = res.data.Data.UserInfo.UserName
      this.userInfo.userphoto = res.data.Data.UserInfo.UserPhoto
      this.userInfo.userleveltext = res.data.Data.UserInfo.UserLevelText
      this.userInfo.userlevel = res.data.Data.UserInfo.UserLevel
    })
  }
}
</script>
<style lang="scss" scoped>
  .app-my {
    width: 100%;
    height: 100%;
    background: #F4F4F4;
    .service {
      margin-top: .2rem;
    }
  }
</style>
