<template>
  <div class="fail-item">
    <div class="fail-title">失效商品</div>
    <cart-item ></cart-item>
    <div class="button-wrap">
      <div class="fail-button">清除失效商品</div>
    </div>
  </div>
</template>
<script>
import CartItem from './CartItem'
export default {
  name: 'fail-item',
  components: {
    CartItem
  }
}
</script>
<style lang="scss" scoped>
.fail-item {
  background: #fff;
  .button-wrap {
    border-top: .01rem solid #808080;
    padding: .06rem;
  }
  .fail-button {
    width: .94rem;height:.27rem;
    line-height: .25rem;
    text-align: center;
    margin: 0 auto;
    font-size: .12rem;
    background: #fff;
    border: .01rem solid #808080;
    border-radius: .08rem;
  }
}
</style>
