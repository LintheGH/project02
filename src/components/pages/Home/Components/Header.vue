<template>
  <div class="home-header">
    <div class="header-adress">
      <span>广州</span>
      <i class="iconfont icon-arrow-down"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-search3"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="scss" scoped>
  .home-header{
    height: 0.375rem;
    width: 100%;
    position:fixed;
    z-index: 100;
    top:0;
    left:0;
    display:flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg,#36db84,#0eb27b);
    .header-adress{
      width: 0.665rem;
      height: 0.18rem;
      display:flex;
      color:#eee;
      justify-content:center;
    }
    .header-input{
      width: 2.85rem;
      height: 0.27rem;
      display:flex;
      color:#eee;
      align-items: center;
      padding:0 0.20rem;
      border-radius: 0.27rem;
      background: hsla(0,0%,100%,.2);
    }
  }
</style>
