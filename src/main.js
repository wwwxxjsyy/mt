import Vue from 'vue'
import App from './App'
import VueLazyload from "vue-lazyload"
import router from './router'
import {store} from './store/store.js'
import Observer from "./Observer";
import Mint from 'mint-ui';
Vue.prototype.Observer = Observer;
// import axios from 'axios' 
import http from './api/http'

Vue.prototype.http=http

Vue.use(Mint);
Vue.use(VueLazyload,{
  preLoad:1.3,
  error: '../static/img/loadFail.jpg',//这个是加载失败后显示的图片
  loading:'../static/img/loading.png',//这个是加载过渡的时候的图片
  attemp:1
})

Vue.config.productionTip = false

// 导航守卫
// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

router.beforeEach((to,from,next)=>{
  if(to.path=='/vip'||to.path=='/order'){
      if(store.getters.isLogin){
        next()
      }else{
        alert("还未登录，请先登录")
        next('/login')
    
      }
  }else{
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
