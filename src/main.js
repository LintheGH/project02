// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import computedRem from './modules/rem'
import Router from './routers'
import axios from 'axios'
import 'swiper/dist/css/swiper.min.css'
import './stylesheets/main.scss'
import './components/assets/styles/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios
computedRem()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  components: { App },
  template: '<App/>'
})
