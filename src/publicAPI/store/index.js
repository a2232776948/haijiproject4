import Vue from 'vue'
import Vuex from 'Vuex'
import user from 'user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
})

