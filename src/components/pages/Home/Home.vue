<template>
  <div class="app-home page-top-bottom">
    <home-header></home-header>
    <home-banner :list="HomeBanner"></home-banner>
    <div class="adv-top-pic"><img :src="pictureUrl" alt=""></div>
    <home-adv :list="HomeAdv"></home-adv>
    <goods-list :list="GoodsList" :pictureUrl="pictureUrl1"></goods-list>
    <goods-list :list="GoodsList1" :pictureUrl="pictureUrl2"></goods-list>
    <goods-list :list="GoodsList2" :pictureUrl="pictureUrl3"></goods-list>
    <goods-item :list="GoodsItem"></goods-item>
    <goods-item :list="GoodsItem1"></goods-item>
    <goods-item :list="GoodsItem2"></goods-item>
    <goods-item :list="GoodsItem3"></goods-item>
    <goods-piece :list="GoodsPiece"></goods-piece>
    <goods-piece :list="GoodsPiece1"></goods-piece>
    <goods-piece :list="GoodsPiece2"></goods-piece>
    <goods-piece :list="GoodsPiece3"></goods-piece>
  </div>
</template>
<script>
import HomeBanner from './Components/HomeBanner'
import HomeAdv from './Components/Advertise'
import GoodsList from './Components/GoodsList'
import GoodsItem from './Components/GoodsItem'
import GoodsPiece from './Components/GoodsPiece'
export default {
  name: 'Home',
  data () {
    return {
      HomeBanner: [],
      HomeAdv: [],
      GoodsList: [],
      GoodsList1: [],
      GoodsList2: [],
      pictureUrl: '',
      pictureUrl1: '',
      pictureUrl2: '',
      pictureUrl3: '',
      GoodsItem: {},
      GoodsItem1: {},
      GoodsItem2: {},
      GoodsItem3: {},
      GoodsPiece: {},
      GoodsPiece1: {},
      GoodsPiece2: {},
      GoodsPiece3: {}
    }
  },
  components: {
    HomeBanner,
    HomeAdv,
    GoodsList,
    GoodsItem,
    GoodsPiece
  },
  methods: {
    getBanners () {
      this.$http.post('/yg/api/Template/GetTemplate', {
        area: {Id: 'c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e', Code: '512', Name: '广州', Default: 0, Version: '2.0'},
        channel: 5,
        token: ''
      }).then((res) => {
        console.log(res.data.data)
        this.HomeBanner = res.data.data.template.componentList[0].carouselPictures
        this.pictureUrl = res.data.data.template.componentList[0].adPictures[0].pictureUrl
        this.pictureUrl1 = res.data.data.template.componentList[1].adPictures[0].pictureUrl
        this.pictureUrl2 = res.data.data.template.componentList[2].adPictures[0].pictureUrl
        this.pictureUrl3 = res.data.data.template.componentList[3].adPictures[0].pictureUrl
        this.HomeAdv = res.data.data.template.componentList[0].componentNavs
        this.GoodsList = res.data.data.template.componentList[1].componentCommoditys
        this.GoodsList1 = res.data.data.template.componentList[2].componentCommoditys
        this.GoodsList2 = res.data.data.template.componentList[3].componentCommoditys
        // GoodsItem
        this.GoodsItem = res.data.data.template.componentList[8].componentCommoditys[0]
        this.GoodsItem1 = res.data.data.template.componentList[9].componentCommoditys[0]
        this.GoodsItem2 = res.data.data.template.componentList[10].componentCommoditys[0]
        this.GoodsItem3 = res.data.data.template.componentList[11].componentCommoditys[0]
        // GoodsPiece
        this.GoodsPiece = res.data.data.template.componentList[18]
        this.GoodsPiece1 = res.data.data.template.componentList[19]
        this.GoodsPiece2 = res.data.data.template.componentList[20]
        this.GoodsPiece3 = res.data.data.template.componentList[21]
      })
    }
  },
  created () {
    this.getBanners()
  }
}
</script>
<style lang="scss" scoped>
  .app-home{
    .adv-top-pic{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
</style>
