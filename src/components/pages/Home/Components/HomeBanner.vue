<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" v-if="showSwiper">
      <div class="swiper-slide"
        v-for = '(picture, i) in list'
        :key = 'i'
      >
        <img :src="picture.pictureUrl" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'HomeBanner',
  props: {
    list: Array
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
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
