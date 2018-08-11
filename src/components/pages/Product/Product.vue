<template>
  <div class="app-product">
    <div class="product-top">
      <a @click="$router.go(-1)" class="iconfont icon-fanhui"></a>
      <img :src="Pictures" alt="">
    </div>
    <div class="productInfor">
      <p class="title">{{CommodityInfo.CommodityName}}</p>
      <p class="subhead">
        <i class="label">{{CommodityInfo.PromotionTag}}</i>
        <span>{{CommodityInfo.SubTitle}}</span>
      </p>
      <div class="price">
        <p class="priceIn">
          <span class="priceRed">
            <i>￥</i>{{CommodityInfo.OriginalPrice}}
          </span>
        </p>
        <p class="area">
          产地： <span class="name">{{CommodityInfo.PlaceOfOrigin}}</span>
        </p>
      </div>
      <div class="sevenDay">
        {{CommodityInfo.CanNoReasonToReturnText}}
      </div>
    </div>
    <div class="sale">
      <h3 class="line-bottom">
        促销
      </h3>
      <div class="saleIn">
        <div class="saleList" v-if="content.PromotionTypeText">
          <i class="label">{{content.PromotionTypeText}}</i>
          <p class="title">{{content.PromotionTitle}}</p>
          <div class="list">
            <p class="txt">{{content.LevelTitle}}</p>
          </div>
        </div>
        <div class="saleList saleList1" v-if="content.PromotionTypeText1">
          <i class="label label1">{{content.PromotionTypeText1}}</i>
          <p class="title">{{content.PromotionTitle1}}</p>
          <div class="list">
            <p class="txt">{{content.LevelTitle1}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-product',
  data () {
    return {
      sort: {
        CommodityCode: '',
        CommodityId: ""
      },
      CommodityInfo: {},
      content: {
        PromotionTypeText:'',
        PromotionTypeText1:'',
        PromotionTitle: '',
        PromotionTitle1: '',
        LevelTitle: '',
        LevelTitle1: '',
      },
      Pictures: ''
    }
  },
  methods: {
    getCommodityInfo () {
      this.$http({
        method: 'post',
        url: '/gateway/api/commodityapi/Commodity/GetCommodityInfo',
        headers: {
          'appName': 3000025,
        },
        data: {
          Body: this.sort,
          Head: {
            CityCode: "512",
            CityId: "c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e",
            DeviceId: "78319e2dd184f448c2dacfc96be3f0ac",DistrictId:"2252dc4d-0069-4c0f-b60f-21ce5607dd46",
            LoginToken: "",
            Token: ""
          }
        }
      }).then(res => {
        console.log(res)
        this.CommodityInfo = res.data.Data.CommodityInfo
        this.content.PromotionTitle = res.data.Data.CommodityInfo.CommodityPromotions[0] ? res.data.Data.CommodityInfo.CommodityPromotions[0].PromotionTitle : ''
        this.content.PromotionTitle1 = res.data.Data.CommodityInfo.CommodityPromotions[1] ?res.data.Data.CommodityInfo.CommodityPromotions[1].PromotionTitle : ''
        this.content.PromotionTypeText = res.data.Data.CommodityInfo.CommodityPromotions[0] ? res.data.Data.CommodityInfo.CommodityPromotions[0].PromotionTypeText : ''
        this.content.PromotionTypeText1 = res.data.Data.CommodityInfo.CommodityPromotions[1] ? res.data.Data.CommodityInfo.CommodityPromotions[1].PromotionTypeText : ''
        this.content.LevelTitle = res.data.Data.CommodityInfo.CommodityPromotions[0] ? res.data.Data.CommodityInfo.CommodityPromotions[0].PromotionLevels[0].LevelTitle : ''
        this.content.LevelTitle1 = res.data.Data.CommodityInfo.CommodityPromotions[1]? res.data.Data.CommodityInfo.CommodityPromotions[1].PromotionLevels[0].LevelTitle : ''
        this.Pictures = res.data.Data.CommodityInfo.Pictures[0]
      })
    }
  },
  created () {
    this.sort.CommodityCode = this.$route.params.CommodityCode
    this.getCommodityInfo()
  }
}
</script>
<style lang="scss" scoped>
  .app-product {
    position: relative;
    .product-top {
      a {
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
