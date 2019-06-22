import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home"
import Order from "../pages/order"
import Mine from "../pages/mine"
import Vip from "../pages/vip"
import Login from "../pages/login"

Vue.use(Router)

export default new Router({
  mode:"hash",
  routes:[
      {
          path:"/",
          redirect:"/home"
      },
      {
          path:"/home",
          component:Home,
          meta:{
              flag:true,
          }
      },
      {
        path:"/order",
        component:Order,
        meta:{
            flag:true,
        },
      },
      {
          path:"/vip",
          component:Vip,
          meta:{
              flag:true,
          },
      },
      {
          path:"/mine",
          component:Mine,
          meta:{
              flag:true,
          },
      },
      {
          path:"/login",
          component:Login,
          meta:{
              flag:true,
          },
      },
      {
          path:"**",
          redirect:"/home"
      }
  ]
})