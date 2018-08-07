<template>
  <div class="app-classify">
    <classify-search></classify-search>
    <classify-list></classify-list>
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
  }
}
</script>
<style lang="scss" scoped>
  .app-classify {
    height: 100rem;
  }
</style>
