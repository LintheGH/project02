<template>
  <router-link tag="div" exact :to="{name: 'product', params: { CommodityCode: data.CommodityCode }}" class="list-item" v-if="data">
    <div class="img-wrap">
      <img :src="data.SmallPic">
    </div>
    <div class="item-info">
      <span class="title">{{ data.CommodityName }}</span>
      <span class="describe">{{ data.SubTitle }}</span>
      <span>
        <i class="promotiontag">{{ data.PromotionTag }}</i>
      </span>
      <span class="sprice-wrap">
        <span class="warp">
          <i class="sellprice">{{ '￥' + data.SellPrice }}</i>
          <i class="originalprice">{{ '￥' + data.OriginalPrice }}</i>
          <i class="spec">{{ data.Spec }}</i>
        </span>
        <button class="add_btn" @click.stop="addToCart">+</button>
      </span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'list-item',
  props: {
    data: Object,
    require: true
  },
  methods: {
    addToCart () {
      console.log('addtocart')
    }
  }
}
</script>
<style lang="scss" scoped>
  .list-item {
    width: 100%;
    height: 1.43rem;
    font-size: .12rem;
    padding: .15rem .09rem;
    border-bottom: .01rem solid #eee;
    background: #fff;
    display: flex;
    .img-wrap {
      height: 100%;
      width: 1.12rem;
      img {
        height: 100%;
      }
    }
    .item-info {
      display: flex;
      width: 100%;
      flex-flow: column;
      justify-content: space-between;
    }
    .title {
      font-size: .14rem;
      color: #000;
    }
    .promotiontag {
      padding: .015rem .04rem;
      border: .01rem solid #11B57C;
      border-radius: 0.07rem 0 0.07rem 0;
      font-style: normal;
      color: #11B57C;
      background: #fff;
    }
    .sprice-wrap {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .wrap {
      display: flex;
      flex: 1;
      justify-content: space-between;
    }
    .originalprice {
      margin-right: .10rem;
      text-decoration: line-through;
    }
    .sellprice {
      margin-right: .2rem;
      color: red;
      font-size: .14rem;
    }
    .add_btn {
      width: .24rem;
      height: 0.24rem;
      border: .01rem solid #11b57c;
      border-color: #11B57c;
      color: #11b57c;
      border-radius: 50%;
      background: #fff;
      outline: none;
    }
  }
</style>
