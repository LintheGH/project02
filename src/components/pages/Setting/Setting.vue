<template>
  <div class="my-setting">
    <ul class="list" v-for="(list, i) in lists" :key="i">
      <li class="list-item" v-for="(item,i) in list" :key="i">
        <span class="title">{{ item.title }}</span>
        <span class="content">{{ item.content }}</span>
        <i :class="'iconfont icon-' + item.icon"></i>
      </li>
    </ul>
    <button class="btn" @click="logOut">退出登录</button>
  </div>
</template>
<script>
export default {
  name: 'my-setting',
  data () {
    return {
      lists: [
        [{title: '客服热线', content: '400-000-7788', link: '', icon: 'jiantouyou'}],
        [
          {title: '修改登录密码', content: '', link: '', icon: 'jiantouyou'},
          {title: '设置支付密码', content: '', link: '', icon: 'jiantouyou'},
          {title: '更换手机号码', content: '', link: '', icon: 'jiantouyou'}
        ],
        [
          {title: '关于我们', content: '', link: '', icon: 'jiantouyou'},
          {title: '隐私条款', content: '', link: '', icon: 'jiantouyou'},
          {title: '配送说明', content: '', link: '', icon: 'jiantouyou'},
          {title: '退换货说明', content: '', link: '', icon: 'jiantouyou'}
        ]
      ]
    }
  },
  methods: {
    logOut () {
      this.$cookies.remove('ygm_user')
      this.$router.replace('/my')
    }
  }
}
</script>
<style lang="scss" scoped>
  .my-setting {
    width: 100%;
    height: 100%;
    background: #F4F4F4;
    font-size: .12rem;
    .list {
      background: #fff;
      margin-bottom: .1rem;
    }
    .list-item {
      padding: .125rem;
      display: flex;
      border-bottom: .01rem solid #f4f4f4;
    }
    .content {
      flex: 1;
      text-align: right;
    }
    .iconfont {
      margin-left: .05rem;
    }
    .btn {
      background: #fff;
      display: block;
      width: 1.45rem;
      height: .36rem;
      border: .01rem solid #11b57c;
      color: #11b57c;
      font-size: .15rem;
      line-height: .05rem;
      border-radius: .05rem;
      margin: .24rem auto;
      padding: .15rem 0;
      box-sizing: border-box;
      text-align: center;
      outline: none;
    }
  }
</style>
