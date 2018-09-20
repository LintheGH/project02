<template>
  <div class="app-cart">
    <cart-item></cart-item>
    <fail-item></fail-item>
    <recommend-list></recommend-list>
    <clearing></clearing>
    <app-nav></app-nav>
  </div>
</template>
<script>
import CartItem from './Components/CartItem'
import RecommendList from './Components/RecommendList'
import Clearing from './Components/Clearing'
import FailItem from './Components/FailItem'
export default {
  name: 'app-cart',
  components: {
    CartItem,
    RecommendList,
    Clearing,
    FailItem
  }
}
</script>
<style lang="scss" scoped>
 .app-cart {
   min-height: 100%;
   background: #eee;
 }
</style>
