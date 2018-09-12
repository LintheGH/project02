<template>
  <div class="app-cart">
    <cart-item></cart-item>
    <recommend-list></recommend-list>
    <clearing></clearing>
    <app-nav></app-nav>
  </div>
</template>
<script>
import CartItem from './Components/CartItem'
import RecommendList from './Components/RecommendList'
import Clearing from './Components/Clearing'
export default {
  name: 'app-cart',
  components: {
    CartItem,
    RecommendList,
    Clearing
  }
}
</script>
<style lang="scss" scoped>
 .app-cart {
   min-height: 100%;
   background: #eee;
 }
</style>
