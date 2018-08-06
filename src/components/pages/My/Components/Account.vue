<template>
  <div class="account">
    <ul>
      <li v-for="(item, i) in balanceAndCoupons" :key="i">
        <span class="number">{{ item.Number }}</span>
        <span class="text">{{ item.Text }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'account',
  props: ['balanceAndCoupons']
}
</script>
<style lang="scss" scoped>
  .account {
    background: linear-gradient(left, #44D790, #27BB89);
    ul {
      height: .537rem;
      color: #fff;
      font-size: .12rem;
      display: flex;
      padding: .1rem 0;
      li {
        width: 33.33%;
        border-right: 1px dashed #eee;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        span:first-child {
          margin-bottom: .02rem;
        }
      }
      li:last-child {
        border-right: 0 none;
      }
    }
  }
</style>
