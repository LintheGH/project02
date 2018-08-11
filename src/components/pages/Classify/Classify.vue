<template>
  <div class="app-classify">
    <classify-search></classify-search>
    <classify-list :ClassItem="ClassItem" :ClassifyList="ClassifyList" :changeList="changeList"></classify-list>
    <app-nav></app-nav>
  </div>
</template>
<script>
import ClassifySearch from './Components/ClassifySearch'
import ClassifyList from './Components/ClassifyList'
export default {
  name: 'app-classify',
  components: {
    ClassifySearch,
    ClassifyList
  },
  data () {
    return {
      ClassifyList: [],
      ClassItem: [],
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
      })
    },
    changeList (idx=0) {
      this.ClassItem = this.ClassifyList[idx].Childs
    }
  },
  created () {
    this.getClassList()
  }
}
</script>
<style lang="scss" scoped>
 
</style>
