<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
        v-for = '(picture, i) in bannerPictures'
        :key = 'i'
      >
        <img :src="picture.pictureUrl" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
  name: 'HomeBanner',
  data () {
    return {
      bannerPictures: []
    }
  },
  methods: {
    getBanners () {
      this.$http.post('/yg/api/Template/GetTemplate', {
        area: {Id: 'c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e', Code: '512', Name: '广州', Default: 0, Version: '2.0'},
        channel: 5,
        token: ''
      }).then((res) => {
        this.bannerPictures = res.data.data.template.componentList[0].carouselPictures
        Vue.nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            autoplay: { disableOnInteraction: false },
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      })
    }
  },
  created () {
    this.getBanners()
  }
}
</script>
<style lang="scss">
  .swiper-container{
    .swiper-wrapper{
      width:100%;
      height:2.18rem;
    }
    .swiper-slide{
      width:100%;
      height:100%;
    }
    img{
      width:100%;
      height:100%;
    }
    .swiper-pagination-bullet{
      width: 5px;
      height: 5px;
      background-color: #eee;
      transition:all .5s
    }
    .swiper-pagination-bullet-active{
      background-color: #eee;
      width: 8px;
      height: 8px;
    }
  }
</style>
