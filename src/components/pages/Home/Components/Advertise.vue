<template>
  <div class="adv">
    <div class="adv-top-pic">
      <img :src="topPic" alt="">
    </div>
    <ul class="adv-list">
      <li v-for = " adv in advList" :key = "adv.navIndex">
        <img :src="adv.pictureUrl" alt="">
        <span>{{ adv.navName }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeAdv',
  data () {
    return {
      topPic: '',
      advList: []
    }
  },
  methods: {
    getList () {
      this.$http.post('/yg/api/Template/GetTemplate', {
        area: {Id: 'c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e', Code: '512', Name: '广州', Default: 0, Version: '2.0'},
        channel: 5,
        token: ''
      }).then(res => {
        this.topPic = res.data.data.template.componentList[0].adPictures[0].pictureUrl
        this.advList = res.data.data.template.componentList[0].componentNavs
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>
<style lang="scss" scoped>
  .adv-top-pic{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .adv-list{
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    font-size:0.12rem;
    li{
      width: 25%;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img{
      width: 0.483rem;
    }
  }
</style>
