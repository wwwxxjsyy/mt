import Vue from 'vue'
import App from './App'
import VueLazyload from "vue-lazyload"
import router from './router'
import { store } from './store/store.js'
import Observer from "./Observer";
import MINT from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.prototype.Observer = Observer;
import axios from 'axios'
import qs from 'qs';

import { Indicator } from 'mint-ui';

// axios.defaults.baseURL = 'https://ele-interface.herokuapp.com/';
axios.defaults.baseURL = 'http://10.35.162.147:8002/';
// import http from './api/http'
Vue.prototype.$axios = axios
// Vue.prototype.http=http
const service = axios.create({
  baseUrl: process.env.BASEAPI,
  timeout: 10000,
})

service.interceptors.request.use(config => {
  if (config.method == 'post') {
    config.data = qs.stringify(config.data);
  }
  //加载动画
  Indicator.open();
  return config;
}, error => {
  return Promise.reject(error);
})
// //响应拦截
axios.interceptors.response.use(response => {
  //关闭动画
  Indicator.close();
  return response;
  //错误提醒
}, error => {
  return Promise.reject(error);
})

Vue.use(MINT)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/img/loadFail.jpg',//这个是加载失败后显示的图片
  loading: '../static/img/loading.png',//这个是加载过渡的时候的图片
  attemp: 1
})


// 导航守卫
// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.mt_login ? true : false;
  if (to.path == '/vip' || to.path == '/order') {
    if (isLogin) {
      next()
    } else {
      isLogin ? next() : next('/registerLogin')
    }
  } else {
    next()
  }

})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
