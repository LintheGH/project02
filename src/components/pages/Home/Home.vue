<template>
  <div class="app-home">
    <Home-banner></Home-banner>
    <home-adv></home-adv>
  </div>
</template>
<script>
import HomeBanner from './Components/HomeBanner'
import HomeAdv from './Components/Advertise'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeAdv
  }
}
</script>
<style lang="scss" scoped>

</style>
