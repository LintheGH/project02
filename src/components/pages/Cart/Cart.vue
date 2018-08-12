<template>
  <div class="app-cart">
    <cart-item></cart-item>
    <recommend-list></recommend-list>
    <app-nav></app-nav>
  </div>
</template>
<script>
import CartItem from './Components/CartItem'
import RecommendList from './Components/RecommendList'
export default {
  name: 'app-cart',
  components: {
    CartItem,
    RecommendList
  }
}
</script>
<style lang="scss" scoped>
 .app-cart {
   min-height: 100%;
   background: #eee;
 }
</style>
