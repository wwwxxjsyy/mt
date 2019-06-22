import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from "./home"
import orderRouter from "./order"
import mineRouter from "./mine"
import vipRouter from "./vip"
import loginRouter from "./login"

Vue.use(Router)

export default new Router({
  mode:"hash",
  base: process.env.BASE_URL,
  routes:[
        homeRouter,
        orderRouter,
        mineRouter,
        loginRouter,
        vipRouter,
      {
          path:"/",
          redirect:"/home"
      },
      
      {
          path:"**",
          redirect:"/home"
      }
  ]
})