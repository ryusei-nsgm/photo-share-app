import Vue from 'vue'
import Vuex from 'vuex'

// 認証に関わるストアを auth.js にまとめておき、モジュールとしてimportする
import auth from './auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
  }
})

export default store