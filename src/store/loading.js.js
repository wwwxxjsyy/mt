import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios'
 Vue.use(Vuex)


Axios.interceptors.request.use(config => {
  console.log('ajax begin request')
  store.commit('ajaxStar')
  return config;
})

Axios.interceptors.response.use(config => {
  console.log('ajax get response')
  store.commit('ajaxEnd')
  return config
})

store.registerModule('myVux', { // 名字自己定义
  state: {
    ajaxIsLoading: false
  },
  mutations: {
    ajaxStar (state) {
      state.ajaxIsLoading = true
    },
    ajaxEnd (state) {
      state.ajaxIsLoading = false
    }
  },
  getter : {
    ajaxIsLoading: state => state.ajaxIsLoading
  }
})
export default store;