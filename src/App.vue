<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Home from './components/pages/Home/Home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

</style>
