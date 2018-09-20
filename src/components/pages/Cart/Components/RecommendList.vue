<template>
  <div class="recommend-list">
    <h2>猜你喜欢</h2>
    <div class="recomment-items">
      <recomment-item></recomment-item>
    </div>
  </div>
</template>
<script>
import RecommentItem from './RecommentItem'
export default {
  name: 'recomment-list',
  components: {
    RecommentItem
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  .recommend-list {
    font-size: .12rem;
    padding: .06rem;
    h2 {
      text-align: center;
      font-size: .14rem;
    }
    .recomment-item {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
