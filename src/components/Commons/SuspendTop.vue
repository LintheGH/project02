<template>
  <div
    @click = "toTop"
    v-if = "scrolled >= scrollY"
    class="suspend-top"
  >
  </div>
</template>
<script>
export default {
  name: 'SuspendTop',
  data () {
    return {
      scrollY: 700,
      scrolled: window.scrollY
    }
  },
  methods: {
    toTop () {
      window.scrollTo(0, 0)
    }
  },
  mounted () {
    window.onscroll = () => {
      this.scrolled = window.scrollY
    }
  }
}
</script>
<style>
  .suspend-top{
    width:0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    border:1px solid #333;
    position:fixed;
    bottom:18%;
    right:4%;
    background:url('../../assets/to_top.png');
    background-position: center;
    background-size: contain;
  }
</style>
