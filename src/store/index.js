import { createStore } from 'vuex'

export default createStore({
  state: {
    FullName: '',
    LenFullName: 0
  },
  getters: {
    GetLen: state => {
      return state.LenFullName
    }
  },
  mutations: {
    SET_LEN: (state, payload) =>{
      state.LenFullName = payload.length();
    }
  },
  actions: {
    SET_LEN: (context, payload) =>{
      context.commit('SET_LEN', payload);
    }
  },
  modules: {
  }
})
