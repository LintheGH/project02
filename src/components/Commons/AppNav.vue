<template>
  <div class="app-nav">
    <div class="nav-in">
      <router-link 
        v-for = "item in navItems" 
        :key = "item.id" 
        :to = "item.name"
        active-class = "active" 
        class="nav-item"
      >
        <i :class="'iconfont icon-' + item.icon"></i>
        <span>{{ item.title }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-nav',
  data () {
    return {
      navItems: [
        {id: 1, title: '首页', icon: 'home', name: 'home'},
        {id: 2, title: '分类', icon: 'leimupinleifenleileibie--1', name: 'classify'},
        {id: 3, title: '吃饭吧', icon: 'chifan', name: 'eat'},
        {id: 4, title: '购物车', icon: 'cart', name: 'cart'},
        {id: 5, title: '我的易果', icon: 'my', name: 'my'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-nav{
    width: 100%;
    height: 0.5rem;
    border-top: 1px solid #eee;
    background: #fff;
    padding:0 11px;
    position:fixed;
    left:0;
    bottom:0;
    .nav-in{
      width: 100%;
      height:100%;
      display:flex;
      .nav-item{
        width: 20%;
        height: 100%;
        display:flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        font-size:0.11rem;
      }
      .active{color:#11b57c}
      .iconfont{
        font-size:0.20rem;
      }
    }
  }
</style>
