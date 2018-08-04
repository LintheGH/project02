<template>
  <div class="group-floor">
    <a href="" class="floor-img">
      <img :src="pictureUrl" alt="">
    </a>
    <div class="product-list">
      <div class="product-list-in">
        <ul class="proitem">
          <li class="pic" v-for="item in list" :key="item.id">
            <a href="">
              <img :src="item.pictureUrl" alt="">
              <p class="name">{{item.commodityName}}</p>
              <div class="saletip">
                <span>{{item.saleSlogan}}</span>
              </div>
              <div class="price">
                <strong>￥{{item.commodityPrice}}</strong>{{item.commoditySpec}}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsList',
  props: {
    list: Array,
    pictureUrl: String
  }
}
</script>
<style lang="scss" scoped>
  .floor-img img {
    width: 100%;
  }
  .product-list {
    overflow: hidden;
    width: 100%;
    height: 1.84rem;
    background: #fff;
    .product-list-in {
      overflow-x: scroll;
      overflow-y: hidden;
      box-sizing: border-box;
      width: 100%;
      height: 2.11rem;
      padding: .1rem 0 .17rem .1rem;
      white-space: nowrap;
      .proitem {
        display: flex;
        .pic {
          position: relative;
          text-align: center;
          a img {
            width: 1.06rem;
            height: 1.06rem;
          }
          .name{
            width: 1.06rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .saletip {
            height: 0.31rem;
            padding: 0.06rem 0;
            span {
              display: inline-block;
              height: 0.17rem;
              line-height: 0.17rem;
              margin-right: 0.03rem;
              padding: 0 .06rem;
              color: #45b575;
              border: 1px solid #45b575;
              border-radius: 1em;
            }
          }
        }
      }
    }
  }
</style>
