<template>
  <div class="app-productlist">
    <sort-head :lists="lists" class="header" @reSort="reSort"></sort-head>
    <list
      :CommodityList="CommodityList"
      v-infinite-scroll="getMore"
      infinite-scroll-disabled="InfiniteScrollDisable"
      infinite-scroll-distance="10"
    class="list"></list>
    <div class="nomore" v-if="InfiniteScrollDisable">没有更多啦</div>
    <div class="nolist" v-if="noList">
      <img src="../../../assets/noting@3x.png">
      <span>抱歉，没有找到您要的商品</span>
    </div>
  </div>
</template>
<script>
import List from './Components/List'
import { InfiniteScroll, Indicator } from 'mint-ui';
export default {
  name: 'app-productlist',
  components: { List },
  data () {
    return {
      lists: [
        { id: 1, content: '销量', sort: [4]},
        { id: 2, content: '新品', sort: [5]},
        { id: 3, content: '价格', sort: [1,2], icon: 'paixu'},
      ],
      sort: {
        CategoryCode: '',
        CategoryId: '', 
        Keyword: '',
        PageIndex: 1,
        Sort: 4
      },
      CommodityList: [],
      InfiniteScrollDisable: false,
      noList: false,
      flag: false
    }
  },
  methods: {
    getCommodityList () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      this.$http({
        method: 'post',
        url: '/gateway/api/commodityapi/Commodity/GetSearchList',
        headers: {
          'appName': 3000025,
        },
        data: {
          Body: this.sort,
          Head: {
            CityCode: '512',
            CityId: 'c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e',
            DeviceId: 'cb294d35012d6bc93c999ca0c886bd1c',
            DistrictId: '2252dc4d-0069-4c0f-b60f-21ce5607dd46',
            LoginToken: this.$cookies.get('ygm_user'),
            Token: this.$cookies.get('ygm_user')
          }
        }
      }).then( res => {
        Indicator.close()
        let array = res.data.Data.CommodityList
        for(let i=0;i<array.length;i++){
          this.CommodityList.push(array[i])
        }
        if (res.data.Data.CurrentCount === 0 && this.CommodityList.length > 0) {
          this.InfiniteScrollDisable = true
        }
        if(!this.CommodityList.length){
          this.noList = true
        }
      })
    },
    getMore () {
      this.sort.PageIndex ++
      this.getCommodityList()
    },
    reSort (sort) {
      if (sort.length > 1) {
        this.flag = !this.flag
        let num = Number(this.flag)
        this.sort.Sort = sort[num]
        this.sort.PageIndex = 1
        this.CommodityList = []
        this.getCommodityList()
      } else {
        this.sort.Sort = sort[0]
        this.sort.PageIndex = 1
        this.CommodityList = []
        this.getCommodityList()
      }
    }
  },
  created () {
    this.getCommodityList()
    this.sort.CategoryCode = this.$route.params.CategoryCode
    this.sort.CategoryId = this.$route.params.CategoryId
  }
}
</script>
<style lang="scss" scoped>
.app-productlist{
  padding-top: .4rem;
  min-height: 100%;
  background: #eee;
  .header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  .nomore {
    text-align: center;
    padding: .2rem 0;
    background: #eee;
  }
  .nolist {
    width: 100%;
    padding-top: 1rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    img {
      width: 30%;
    }
  }
}
  
</style>
