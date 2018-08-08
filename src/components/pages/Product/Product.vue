<template>
  <div class="app-product">
    <div class="product-top">
      <i class="iconfont icon-fanhui"></i>
      <img src="https://img11.yiguoimg.com/e/items/2016/160830/9288696818573598_500.jpg" alt="">
    </div>
    <div class="productInfor">
      <p class="title">崇明生态乳鸽300g</p>
      <p class="subhead">
        <i class="label">第2件半价</i>
        <span>肉质柔嫩不腥 鲜香细腻</span>
      </p>
      <div class="price">
        <p class="priceIn">
          <span class="priceRed">
            <i>￥</i>33.9
          </span>
        </p>
        <p class="area">
          产地： <span class="name">上海</span>
        </p>
      </div>
      <div class="sevenDay">
        不支持7天无理由退货
      </div>
    </div>
    <div class="sale">
      <h3 class="line-bottom">
        促销
      </h3>
      <div class="saleIn">
        <div class="saleList">
          <i class="label">优惠</i>
          <p class="title">第2件半价</p>
          <div class="list">
            <p class="txt">满2件享7.5折</p>
          </div>
        </div>
        <div class="saleList saleList1">
          <i class="label label1">全网</i>
          <p class="title">满158赠奇异果*6</p>
          <div class="list">
            <p class="txt">满158得赠品</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-product',
  
}
</script>
<style lang="scss" scoped>
  .app-product {
    position: relative;
    .product-top {
      i {
        position: absolute;
        top: 0.3rem;
        left: 0.3rem;
        font-size: 0.3rem;
        color: #f2f2f2;
        z-index: 10;
      }
      img {
        width: 100%;
      }
    }
    .productInfor {
      padding: 0.13rem;
      border-bottom: 0.1rem solid #eee;
      .title {
        line-height: 0.24rem;
        padding-right: 0.1rem;
        font-size: 0.16rem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .subhead {
        padding-right: 0.1rem;
        font-size: 0.12rem;
        color: #808080;
        padding-top: 0.08rem;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 0.3rem;
        i {
          font-size: 0.12rem;
          line-height: 0.12rem;
          display: inline-block;
          padding: 0.03rem 0.03rem;
          border: 1px solid #1fa44b;
          border-radius: 0.03rem;
          color: #1fa44b;
          margin-right: 0.1rem;
          font-style: normal;
        }
      }
      .price {
        display: flex;
        justify-content: space-between;
        margin: 0.1rem 0;
        .priceIn {
          font-size: 0.18rem;
          color: #ff6353;
          i {
            font-style: normal;
          }
        }
      }
    }
    .sale {
      margin-bottom: 0.1rem;
      border-bottom: 0.1rem solid #eee;
      h3 {
        padding: 0.14rem 0.1rem;
        box-sizing: border-box;
        font-size: 0.12rem;
        color: #808080;
        border-bottom: 1px solid #eee;
      }
      .saleIn {
        padding-left: 0.1rem;
        .saleList {
          padding: 0.1rem 0.4rem;
          position: relative;
          border-bottom: 1px solid #eee;
          .label {
            position: absolute;
            top: 0.14rem;
            left: 0;
            padding: 0.04rem;
            background: #fd3d3d;
            border-radius: 0.05rem 0;
            font-size: 0.12rem;
            line-height: 0.12rem;
            color: #fff;
            font-style: normal;
          }
          .label1 {
            background: #1fa44b;
          }
          .title {
            font-size: 0.14rem;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 0.16rem;
          }
        }
      }
    }
  }
</style>
