<template>
  <div class="sort-head">
    <ul class="lists" v-if="lists">
      <li v-for="item in lists" :key="item.id" class="item" @click="$emit('reSort', item.sort)">
        {{ item.content }}
        <i v-if="item.icon" :class="'iconfont icon-' + item.icon"></i>
      </li>
      <router-view></router-view>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'sort-head',
  props: {// list = [{ id: 1, content: '销量', icon:'jiantou' }]
    lists: Array,
  }
}
</script>
<style lang="scss" scoped>
  .sort-head {
    font-size: .12rem;
    text-align: center;
    background: #fff;
    .lists {
      width: 100%;
      height: .4rem;
      display: flex;
      align-items: center;
      border-bottom: .01rem solid #eee;
    }
    .item {
      flex: 1;
    }
  }
</style>
