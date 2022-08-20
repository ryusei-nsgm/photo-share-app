const state = {
  user: null
}

const getters = {}

const mutations = {
  // user state を更新する関数
  setUser (state, user) {
    state.user = user
  }
}

const actions = {
  async register (context, data) {
    const response = await axios.post('/api/register', data)
    // commit() => ミューテーションの呼び出し setUserでstate更新
    context.commit('setUser', response.data)
  },
  async login (context, data) {
    const response = await axios.post('/api/login', data)
    context.commit('setUser', response.data)
  },
  async logout (context) {
    const response = await axios.post('/api/logout')
    context.commit('setUser', null)
  }
}

export default {
  // namespaced:true モジュールに分けたときにステートやミューテーションの名前が被ってもモジュール名で区別できる
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}