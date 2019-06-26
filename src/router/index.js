import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import Home from "../pages/home"
import Order from "../pages/order"
import Mine from "../pages/mine"
import Vip from "../pages/vip"
import Login from "../pages/login"
import LoginMessageVerification from '../components/login/loginMessageVerification'
import RedMoney from '../components/mine/others/RedMoney'
import Collection from '../components/mine/others/Collection'
import Address from '../components/mine/others/Address'
import PlusAddress from '../components/mine/others/PlusAddress'
//二级路由
//如：HomeShop 驼峰命名，前面加上一级路由名字

//三级路由



Vue.use(Router)

export default new Router({
  mode:"hash",
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes:[
      {
        path:"/",
        redirect:"/home"
      },
      {
        path:"/home",
        component:Home
      },
      {
        path:"/vip",
        component:Vip
      },
      {
        path:"/order",
        component:Order
      },
      {
        path:"/mine",
        component:Mine
      },
      {
        path:"/login",
        component:Login
      },
      {
        name:"LoginMessageVerification",
        path:"/loginMessageVerification",
        component:LoginMessageVerification
        
      },
        {
        path:"/RedMoney",
        component:RedMoney
      },
      {
        path:"/Collection",
        component:Collection
      },
      {
        path:"/Address",
        component:Address
      },
      {
        path:'/PlusAddress',
        component:PlusAddress
      },
      {
        path:"**",
        redirect:"/home"
      },
    
  ]
})