import Vue from 'vue'
import Vuex from 'vuex'
import userstate from './UserState'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    userstate
  }
})
export default store