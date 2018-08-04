<template>
  <div class="prolist" :key="list.id">
    <div class="blockwrap">
      <div class="proitem">
        <a href="">
          <div class="pic">
            <img :src="list.pictureUrl" alt="">
          </div>
          <div class="info">
            <p class="name">{{list.commodityName}}</p>
            <p class="sub">{{list.subTitle}}</p>
            <div class="saletip">
              <span>{{list.saleSlogan}}</span>
            </div>
            <div class="price">
              <strong>￥{{list.commodityPrice}}</strong>{{list.commoditySpec}}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsItem',
  props: {
    list: Object
  }
}
</script>
<style lang="scss" scoped>
  .prolist {
    border-top: 0.03rem solid #eee;
    margin-top: 0.05rem;
    .blockwrap {
      box-sizing: border-box;
      .proitem {
        position: relative;
        height: 1.54rem;
        padding: 0.05rem;
        .pic {
          float: left;
          width: 1.35rem;
          height: 1.35rem;
          margin-right: 0.15rem;
          img {
            width: 100%;
          }
        }
        .info {
          height: 1rem;
          margin-top: 0.18rem;
          .name,.sub {
            margin-bottom: 0.05rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .name {
            font-size: 0.16rem;
          }
          .sub {
            color: #8d8a8a;
          }
        }
        .saletip {
          height: 0.18rem;
          span {
            height: 0.18rem;
            line-height: 0.18rem;
            padding: 0 .08rem;
            font-size: 0.12rem;
            color: #45b575;
            border: 1px solid #45b575;
            border-radius: 1em;
          }
        }
        .price {
          margin-top: 0.08rem;
          strong {
            font-size: 0.18rem;
            font-weight: bold;
            color: #fb3d3d;
          }
        }
      }
    }
  }
</style>
