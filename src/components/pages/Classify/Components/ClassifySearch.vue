<template>
  <div class="search">
    <div class="searchInp">
      <i class="iconfont icon-search3"></i>
      <input type="text" id="search-input" class="search-input" placeholder="请输入商品名称">
    </div>
    <button class="btn">搜索</button>
  </div>
</template>
<script>
export default {
  name: 'ClassifySearch'
}
</script>
<style lang="scss">
  .search {
    position: fixed;
    top: 0;
    left: 0;
    height: 0.4rem;
    width: 100%;
    padding: 0.07rem 0.1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    background: #fff;
    z-index: 102;
    .searchInp {
      position: relative;
      height: 0.24rem;
      width: 3.08rem;
      background: #f4f4f4;
      border-radius: 20px;
      padding: 0 0.21rem 0 0.31rem;
      box-sizing: border-box;
      .iconfont {
        position:absolute;
        left: 0.12rem;
        top: 50%;
        margin-top: -0.08rem;
        display: inline-block;
        width: 0.13rem;
        height: 0.13rem;
      }
      .search-input {
        width: 2.41rem;
        height: 100%;
        background: #f4f4f4;
        border: none;
        border-radius: 20px;
        font-size: 0.12rem;
        line-height: 0.16rem;
        padding-left: 0.05rem;
      }
    }
    .btn {
      position: absolute;
      right: 0;
      top: 0;
      display: block;
      height: 0.39rem;
      text-align: center;
      line-height: 0.4rem;
      font-size: 0.14rem;
      color: #11b57c;
      padding-right: 0.21rem;
      background: #fff;
      border: 0 none;
    }
  }
</style>
