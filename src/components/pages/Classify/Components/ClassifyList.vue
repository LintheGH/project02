<template>
  <div class="searchContent">
    <div class="nav">
      <ul class="navList" v-if="ClassifyList.length">
        <router-link
        tag="li"
        v-for="(item,index) in ClassifyList"
        to="/classify"
        :key="index"
        @click="changeActive(item.CategoryCode)"
        :class="CategoryCode === item.CategoryCode ? 'active' : ''">
          {{item.CategoryName}}
        </router-link>
      </ul>
    </div>
    <ul class="listContent">
      <router-link tag="li" to="" class="listLi" v-for="goods in ClassItem" :key="goods.CategoryId">
        <img :src="goods.PictureUrl" alt="">{{goods.CategoryName}}
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ClassifyList',
  data () {
    return {
      ClassifyList: [],
      ClassItem: [],
      CategoryCode: '01_channelhome'
    }
  },
  methods: {
    getClassList () {
      this.$http({
        method: 'post',
        url: '/gateway/api/commodityapi/Commodity/GetAllCategory',
        headers: {
          'appName': 3000025
        },
        data: {
          Body: "",
          Head: {
            CityCode: "512",
            CityId: "c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e",
            DeviceId: "78319e2dd184f448c2dacfc96be3f0ac",
            DistrictId: "2252dc4d-0069-4c0f-b60f-21ce5607dd46",
            LoginToken: '',
            Token: ''
          }
        }
      }).then((res) => {
        this.ClassifyList = res.data.Data.CategoryList
        this.ClassItem = res.data.Data.CategoryList[0].Childs
        console.log(this.ClassifyList)
      })
    },
    changeActive (CategoryCode) {
      console.log(222)
      this.CategoryCode = CategoryCode
    }
  },
  created () {
    this.getClassList()
  }
}
</script>
<style lang="scss">
  .searchContent {
    padding-top: 0.4rem;
    .nav {
      position: fixed;
      left: 0;
      top: 0.4rem;
      float: left;
      width: 0.83rem;
      height: 100%;
      overflow: hidden;
      z-index: 98;
      .navList {
        width: 0.98rem;
        height: 100%;
        padding: 0 0.15rem 0.5rem 0;
        overflow-y: scroll;
        box-sizing: border-box;
        li {
          padding: 0.2rem 0;
          text-align: center;
          font-size: 0.14rem;
          color: #333;
          box-sizing: border-box;
          background: #eee;
        }
        li.active {
          color: #11b57c;
          border-left: 2px solid #11b57c;
          background: #fff;
          box-sizing: border-box;
        }
      }
    }
    .listContent {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      height: auto;
      padding-left: 0.98rem;
      box-sizing: border-box;
      li {
        width: 33.33%;
        padding: 0.2rem 0 0.5rem 0;
        box-sizing: border-box;
        text-align: center;
        img {
          width: 0.57rem;
          height: 0.57rem;
          margin: 0 auto;
        }
      }
    }
  }
</style>
