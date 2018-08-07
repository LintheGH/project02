<template>
  <div class="app-acticle">
    <div class="show">
      <i class="loading">
        <img src="../../../assets/loading-gif.gif">
      </i>
      <span>网页建设中...</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-acticle'
}
</script>
<style lang="scss" scoped>
  .app-acticle {
    width: 100%;
    height: 100%;
    .show {
      display: flex;
      position: absolute;
      align-items: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }
  }
</style>
