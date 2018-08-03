<template>
  <div class="app-home page-top-bottom">
    <home-header></home-header>
    <home-banner :list="HomeBanner"></home-banner>
    <div class="adv-top-pic"><img :src="pictureUrl" alt=""></div>
    <home-adv :list="HomeAdv"></home-adv>
    <goods-list :list="GoodsList"></goods-list>
    <app-nav></app-nav>
    <suspend-top></suspend-top>
  </div>
</template>
<script>
import HomeBanner from './Components/HomeBanner'
import HomeAdv from './Components/Advertise'
import GoodsList from './Components/GoodsList'
import HomeHeader from './Components/Header'
export default {
  name: 'home',
  data () {
    return {
      HomeBanner: [],
      HomeAdv: [],
      pictureUrl: '',
      GoodsList: []
    }
  },
  components: {
    HomeBanner,
    HomeAdv,
    GoodsList,
    HomeHeader,
  },
  methods: {
    getBanners () {
      this.$http.post('/yg/api/Template/GetTemplate', {
        area: {Id: 'c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e', Code: '512', Name: '广州', Default: 0, Version: '2.0'},
        channel: 5,
        token: ''
      }).then((res) => {
        console.log(res.data.data.template.componentList)
        this.HomeBanner = res.data.data.template.componentList[0].carouselPictures
        this.pictureUrl = res.data.data.template.componentList[0].adPictures[0].pictureUrl
        this.HomeAdv = res.data.data.template.componentList[0].componentNavs
        this.GoodsList = res.data.data.template.componentList
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
