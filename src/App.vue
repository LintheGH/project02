<template>
  <div id="app">
    <router-view></router-view>
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
