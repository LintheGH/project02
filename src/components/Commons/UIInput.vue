<template>
  <div class="ui-input">
    {{ value }}
    <input 
      :type="type || 'text'"
      :value="value"
      :placeholder="placehoder"
      @change="$emit('change', $event.target.value)"
    >
  </div>
</template>
<script>
export default {
  name: 'ui-input',
  props: {
    value: String,
    type: String,
    btnName:String,
    icon: String,
    placehoder: String,
  }
}
</script>
<style lang="scss" scoped>
  .ui-input {
    border-bottom: .01rem solid #e7e7e7;
    height: 0.6rem;
    display: flex;
    align-items: center;
    position: relative;
    input {
      display: block;
      height: .3rem;
      border: 0 none;
      width: 2.5rem;
    }
    .codeBtn {
      position: absolute;
      top: .15rem;
      right: .15rem;
      height: .3rem;
      padding: 0 .06rem;
      line-height: .3rem;
      text-align: center;
      color: #fff;
      border-radius: .04rem;
      background: #008842;
    }
    .iconfont{
      font-size:.20rem;
      margin-right: .1rem;
      background: #008842;
    }
  }
</style>

