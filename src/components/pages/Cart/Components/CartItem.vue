<template>
  <div class="cart-item">
    <div class="check">
      <i class="iconfont icon-gouxuan"></i>
    </div>
    <div class="pic-wrap">
      <img src="https://img11.yiguoimg.com/d/items/2018/180808/9288727987594504_300.jpg" alt="">
    </div>
    <div class="content">
      <div class="top">
        <div class="title">越南红心火龙果2个(大果)410g以上/个</div>
        <div class="del">
          <i class="iconfont icon-shanchu"></i>
        </div>
      </div>
      <div class="bottom">
        <div class="price">￥39.00</div>
        <div class="num">
          <span class="iconfont icon-jian"></span>
          <span>1</span>
          <span class="iconfont icon-jia"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cart-item'
}
</script>
<style lang="scss" scoped>
  .cart-item {
    display: flex;
    width: 100%;
    height: 1rem;
    padding: .1rem;
    font-size: .12rem;
    background: #fff;
    margin-bottom: .1rem;
    .check {
      width: .37rem;
      display: flex;
      align-items: center;
      i {
        width: .16rem;
        height: .16rem;
        background: #11B57C;
        border-radius: 50%;
        color: #fff;
      }
    }
    .pic-wrap {
      width: .815rem;
      height: .815rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
    }
    .top {
      display: flex;
      justify-content: space-between;
    }
    .title {
      width: 1.9rem;
    }
    .del i {
        font-size: .25rem;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      .price {
        color: red;
      }
    }
    .num {
      text-align: center;
      border: .01rem solid #eee;
      border-radius: .03rem;
      span {
        display: inline-block;
      }
      span:nth-child(1) {
        border-right: .01rem solid #eee;
      }
      span:nth-child(2) {
        width: .35rem;
      }
      span:nth-child(3)  {
        border-left: .01rem solid #eee;
      }
    }
  }
</style>
