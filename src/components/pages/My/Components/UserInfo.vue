<template>
  <div class="user-info">
    <router-link to="/setting" :class="'setting iconfont icon-' + icons.setting"></router-link>
    <div class="info">
      <div class="img-wrap">
        <img :src="userInfo.userphoto">
      </div>
      <div class="user" v-if="userInfo.username">
        <p>{{ userInfo.username }}</p>
        <p><i class="pticon"></i><span v-if="userInfo.userleveltext">{{ userInfo.userleveltext }}</span></p>
      </div>
      <router-link exact :to="{ name: 'login' }" v-else class="show-login">登录/注册</router-link>
      <router-link tag="div" v-if="userInfo.username" :to="checkInfo.CheckInUrl" class="sign" >
        <i :class="'iconfont icon-' + icons.sign"></i>
        <span>{{ checkInfo.CheckInText }}</span>
        <i :class="'iconfont icon-' + icons.jiantouyou"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-info',
  data () {
    return {
      icons: {
        setting: 'shezhi',
        jiantouyou: 'jiantouyou',
        sign: 'qiandao'
      }
    }
  },
  props: ['userInfo', 'checkInfo']
}
</script>
<style lang="scss" scoped>
  .user-info {
    width: 100%;
    height: 1.24rem;
    background: url('../../../../assets/my_bgimg.jpg');
    background-size: 100% 100%;
    overflow: hidden;
    position: relative;
    .info {
      margin-top: .27rem;
      height: .68rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .user {
      width: 1.5rem;
      height: 100%;
      color: #fff;
      position: relative;
      .pticon {
        display: inline-block;
        width: .15rem;
        height: .15rem;
        background: url('../../../../assets/pticon.png') no-repeat center;
        background-size: 100% 100%;
        border-radius: 50%;
        vertical-align: top;
      }
      p:first-child {
        margin-top: .075rem;
        font-size: .16rem;
      }
      p:nth-child(2) {
        position: absolute;
        left: 0;
        bottom: 0;
        border: 1px solid #000;
        height: .17rem;
        font-size: .12rem;
        line-height: .15rem;
        border-radius: .085rem / .085rem;
        background: rgba(3, 3, 3, .3);
        span {
          padding: .03rem;
          vertical-align: top;
        }
      }
    }
    .img-wrap {
      width: .68rem;
      height: .68rem;
      border-radius: 50%;
      margin-left: .18rem;
      background: url('../../../../assets/no-pic.jpg');
      background-size: 100% 100%;
    }
    .sign {
      background: #c5f9e5;
      color: #12b67c;
      padding: .045rem;
      padding-left: .07rem;
      border-radius: .03rem 0 0 .03rem;
      font-size: .12rem;
      span {
        vertical-align: top;
      }
    }
    .setting {
      position: absolute;
      color: #eee;
      top: .108rem;
      right: .15rem;
      font-size: .18rem;
    }
    .show-login {
      flex: 1;
      margin-left: .1rem;
      color: #fff;
      font-size: .18rem
    }
  }
</style>
