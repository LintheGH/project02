<template>
  <div class="product-list">
    <list-item v-for="(data, i) in CommodityList" :key="i" :data="data" v-if="CommodityList"></list-item>
  </div>
</template>
<script>
import ListItem from './ListItem'
export default {
  name: 'product-list',
  props: {
    CommodityList: Array,
    require: true
  },
  components: { ListItem },
}
</script>
<style lang="scss" scoped>

</style>
