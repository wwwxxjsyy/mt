// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from "vue-lazyload"
import router from './router'


Vue.use(VueLazyload,{
  preLoad:1.3,
  error: '../static/img/loadFail.jpg',//这个是加载失败后显示的图片
  loading:'../static/img/loading.png',//这个是加载过渡的时候的图片
  attemp:1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
