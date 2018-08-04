<template>
  <div class="prolist2">
    <div class="blockwrap">
      <div class="tt">
        <h3>· {{customComponentName}} ·</h3>
      </div>
      <ul class="prolistUl">
        <li v-for="item in list.componentCommoditys" :key="item.Id">
          <a href="">
            <div class="proitem">
              <div class="pic">
                <img :src="item.pictureUrl" alt="">
              </div>
              <div class="info">
                <p class="name">{{item.commodityName}}</p>
                <div class="saletip">
                  <span>{{item.saleSlogan}}</span>
                </div>
                <div class="price">
                  <strong>￥{{item.commodityPrice}}</strong>{{item.commoditySpec}}
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsPiece',
  props: {
    list: Object
  },
  data () {
    return {
      customComponentName: ''
    }
  },
  methods: {
    showTitle () {
      this.customComponentName = this.list.componentBase.customComponentName
      return this.customComponentName
    }
  },
  updated () {
    this.showTitle()
  }
}
</script>
<style lang="scss" scoped>
  .prolist2 {
    border-top: .03rem solid #eee;
    padding-bottom: 0.2rem;
    .blockwrap {
      padding: 0 .07rem;
      .tt {
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        h3 {
          position: relative;
          display: inline-block;
          padding: 0 .05rem;
          font-size: 0.18rem;
          color: #000;
        }
        h3::before {
          position: absolute;
          top: 50%;
          display: block;
          width: 0.2rem;
          height: 0.02rem;
          margin-left: -0.25rem;
          background: #999;
          content: "";
        }
        h3::after {
          position: absolute;
          top: 50%;
          display: block;
          width: 0.2rem;
          height: 0.02rem;
          margin-left: 0.98rem;
          background: #999;
          content: "";
        }
      }
      .prolistUl {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        li {
          width: 50%;
          .proitem {
            width: 1.49rem;
            height: 2.11rem;
            margin: 0.1rem auto 0;
            text-align: center;
            .pic {
              width: 1.49rem;
              img {
                width: 100%;
              }
            }
            .info {
              .name {
                margin-top: 0.05rem;
                color: #333;
              }
            }
            .saletip {
              height: 0.15rem;
              margin-top: 0.06rem;
              font-size: 0.12rem;
              span {
                display: inline-block;
                height: 0.15rem;
                line-height: 0.15rem;
                margin-right: 0.1rem;
                padding: 0 0.06rem;
                color: #45b575;
                border: 1px solid #45b575;
                border-radius: 1em;
              }
            }
            .price {
              margin-top: 0.06rem;
              font-size: 0.12rem;
              color: #8d8a8a;
              overflow: hidden;
              white-space: nowrap;
              text-overflow:ellipsis;
              strong {
                margin-right: 0.03rem;
                font-weight: bold;
                color: #fb3d3d;
              }
            }
          }
        }
      }
    }
  }
</style>
