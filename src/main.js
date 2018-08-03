// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import computedRem from './modules/rem'
import router from './routers'
import AppNav from './components/Commons/AppNav'
import SuspendTop from './components/Commons/SuspendTop'
import UIInput from './components/Commons/UIInput'
import axios from 'axios'
import 'swiper/dist/css/swiper.min.css'
import './stylesheets/main.scss'
Vue.config.productionTip = false
// Vue原型对象添加请求插件
Vue.prototype.$http = axios
// 计算根 rem
computedRem()
/* eslint-disable no-new */
// 全局注册组件
Vue.component('app-nav', AppNav)
Vue.component('suspend-top', SuspendTop)
Vue.component('ui-input', UIInput)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
