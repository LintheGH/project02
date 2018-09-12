<template>
  <div class="clearing">
    <div class="left-info">
      <div class="check">
        <i class="iconfont icon-gouxuan"></i>
        <span>全选</span>
      </div>
      <div class="price-info">
        <div class="price">
          <span>合计（不含运费）：</span>
          <span class="total-price">￥39.00</span>
        </div>
        <div class="discounts">
          <span>已优惠：</span>
          <span>￥0.00</span>
        </div>
      </div>
    </div>
    <div class="clearing-button">
      <span class="num">{{'去结算('+Num+')'}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cart-learing',
  data () {
    return {
      Num: 0
    }
  }

}
</script>
<style lang="scss" scoped>
  .clearing {
    position:fixed;
    left: 0;
    bottom: .5rem;
    width: 100%;
    display:flex;
    align-items: center;
    height: .50rem;
    font-size: .12rem;
    background: #fff;
    .left-info {
      display: flex;
      flex: 1;
      justify-content: space-between;
      padding: 0 .05rem;
      text-align: right;
      .check {
        display: flex;
        align-items: center;
        i {
          width: .16rem;
          height: .16rem;
          background: #11B57C;
          border-radius: 50%;
          color: #fff;
          margin-right: .05rem;
        }
      }
    }
    .clearing-button {
      font-size: .16rem;
      color: #fff;
      width: 1.10rem;
      height:  100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: red;
    }
  }
</style>
