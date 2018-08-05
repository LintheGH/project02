<template>
  <div class="ui-input">
    <slot name="slot1"></slot>
    <input 
      :type="type || 'text'"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
    <slot name="slot2"></slot>
  </div>
</template>
<script>
export default {
  name: 'ui-input',
  props: {
    value: String,
    type: String,
    icon: String,
    placeholder: String
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
      font-size: .16rem;
    }
  }
</style>

