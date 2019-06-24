
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios' 
import http from './api/http'
Vue.prototype.http=http

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
