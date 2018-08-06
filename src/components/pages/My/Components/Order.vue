<template>
  <div class="order">
    <ul v-if="orderIcons.length > 0">
      <li v-for="(item, i) in orderIcons" :key="i">
        <i class="icon">
          <img :src="item.IconUrl">
        </i>
        <span>{{ item.IconText }}</span>
      </li>
      <li class="all-order">
        <span class="icon">
          <img src="../../../../assets/allorder.png">
        </span>
        <span>全部订单<i class="iconfont icon-jiantouyou"></i></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'order',
  props: ['orderIcons']
}
</script>
<style lang="scss" scoped>
  .order {
    background: #fff;
    font-size: .12rem;
    color: #444;
    ul {
      width: 100%;
      height: 100%;
      background: #fff;
      display: flex;
      li {
        width: .75rem;
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: .2rem 0 .1rem;
      }
    }
    .icon {
      width: .22rem;
      height: .22rem;
      margin-bottom: .08rem;
      img {
        width: 100%;
      }
    }
    .all-order {
      flex: 1;
      border-left: .01rem solid #efefef;
      position: relative;
    }
    .all-order:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      border: .05rem solid transparent;
      border-left-color: #efefef;
    }
    .all-order:after {
      content: '';
      position: absolute;
      left: -.01rem;
      top: 50%;
      transform: translate(0, -50%);
      border: .05rem solid transparent;
      border-left-color: #fff;
    }
  }
</style>
