<template>
  <div class="sort-head">
    <ul class="lists" v-if="lists">
      <li 
        v-for="item in lists"
        :key="item.id" class="item"
        @click="$emit('reSort', item.sort)"
        :class="id === item.id ? 'active' : ''"
      >
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
  data () {
    return {
      id: 1
    }
  },
  props: {// list = [{ id: 1, content: '销量', icon:'jiantou' }]
    lists: Array,
  },
  methods: {
    changeActive (_id) {
      this.id = _id
    }
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
    .active {
      border-bottom: 2px solid #11B57C;
    }
  }
</style>
