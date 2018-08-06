<template>
  <div class="service">
    <div class="wrap">
      <router-link tag="div" to="/akdfj" v-for="(item, i) in iconList" :key="i" class="item">
        <i class="img-wrap"><img :src="item.IconUrl"></i>
        <span>{{ item.IconName }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'service',
  props: ['iconList']
}
</script>
<style lang="scss" scoped>
  .service {
    background: #fff;
    .wrap {
      padding: 0 .1rem 0 .15rem;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 25%;
        font-size: .12rem;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        padding: .1rem 0;
        position: relative;
      }
      .item:before {
        content: '';
        display: inline-block;
        width: 100%;
        border-bottom: .01rem solid #F4F4F4;
        position: absolute;
        left: 0;
        bottom: -.01rem;
      }
      .img-wrap {
        width: .326rem;
        height: .326rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
