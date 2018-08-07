<template>
  <div class="searchContent">
    <div class="nav">
      <ul class="navList" v-if="ClassifyList.length">
        <li
        tag="li"
        v-for="(item,index) in ClassifyList"
        :key="index"
        @click="changeActive(item.CategoryCode,index)"
        :class="CategoryCode === item.CategoryCode ? 'active' : ''">
          {{item.CategoryName}}
        </li>
      </ul>
    </div>
    <ul class="listContent">
      <router-link tag="li" :to="{ name: 'productlist', params: { CategoryId: goods.CategoryId, CategoryCode:goods.CategoryCode }}" class="listLi" v-for="goods in ClassItem" :key="goods.CategoryId">
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
      CategoryCode: '01_channelhome'
    }
  },
  props: ['ClassifyList', 'ClassItem', 'changeList'],
  methods: {
    changeActive (CategoryCode,index) {
      this.CategoryCode = CategoryCode
      this.changeList(index)
    }
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
