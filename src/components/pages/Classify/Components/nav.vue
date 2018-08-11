<template>
  <div class="nav">
    <ul class="navList" v-if="ClassifyList.length">
      <router-link
      tag="li"
      v-for="(item,index) in ClassifyList"
      to="/classify"
      :key="index"
      @click="changeActive(item.CategoryCode)"
      :class="CategoryCode === item.CategoryCode ? 'active' : ''">
        {{item.CategoryName}}
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'nav'
}
</script>
<style scoped>
 .nav {
   
 }
</style>
