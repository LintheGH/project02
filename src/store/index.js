import Vue from 'vue'
import Vuex from 'vuex'
import userstate from './UserState'
import cart from './Cart'
import city from './City'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    userstate,
    cart,
    city
  }
})
export default store