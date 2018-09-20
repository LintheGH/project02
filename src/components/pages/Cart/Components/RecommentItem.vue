<template>
  <div class="recomment-item">
    <div class="pic-wrap">
      <img src="https://img12.yiguoimg.com/d/items/2018/180808/9288727992673544_300.jpg">
    </div>
    <div class="item-title"></div>
    <div class="item-price">
      <div class="price"></div>
      <div class="add-button"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'recomment-item',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  .recomment-item {
    width: 50%;
    padding: .16rem;
    box-sizing: border-box;
    .pic-wrap {
      width: 100%;
    }
  }
</style>
