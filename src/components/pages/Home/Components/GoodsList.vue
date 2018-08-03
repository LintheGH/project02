<template>
  <div class="goods-list"
   v-for = "(items,i) in list"
  :key="i">
    <div class="goods-content">
      <img src="" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsList',
  props: {
    list: Array
  }
}
</script>
<style lang="scss" scoped>

</style>
