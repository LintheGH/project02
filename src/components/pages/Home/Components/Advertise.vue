<template>
  <div class="adv">
    <ul class="adv-list">
      <div class="adv-top-pic"><img :src="pictureUrl" alt=""></div>
      <li v-for = " adv in list"
      :key = "adv.navIndex">
        <img :src="adv.pictureUrl" alt="">
        <span>{{ adv.navName }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeAdv',
  props: {
    list: Array
  }
}
</script>
<style lang="scss" scoped>
  .adv{
    border-bottom: .1rem solid #eee;
    padding-bottom: .1rem;
    .adv-list{
      width: 100%;
      display:flex;
      flex-wrap: wrap;
      li{
        width: 25%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      img{
        width: 0.483rem;
      }
    }
  }
</style>
