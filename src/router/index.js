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

// 首页相关路由 
import Delicious from '../pages/delicious'//美食
//二级路由
//如：HomeShop 驼峰命名，前面加上一级路由名字
import HomeGoods from '../pages/homegoods'

//三级路由
import HomeShopGoods from '../components/home/homeshop/goods/homeshopGoods'
import HomeShopRatings from '../components/home/homeshop/ratings/homeshopRatings'
import HomeShopSeller from '../components/home/homeshop/seller/homeshopSeller'


Vue.use(Router)

export default new Router({
  mode:"hash",
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes:[
      {
        path:"/",
        redirect:"/home",
      },
      {
        path:"/home",
        component:Home,
        meta: {
          flag: true,
          requredAuth: false
        }
      },
      {
        path: "/delicious",
        component: Delicious
      },
      {
        path: "/homegoods",
        component: HomeGoods,
        meta: {
          flag: false,
          requredAuth: false
        },
        children: [
          {
            path: "goods",
            component: HomeShopGoods
          },

          {
            path: "ratings",
            component: HomeShopRatings
          },

          {
            path: "seller",
            component: HomeShopSeller
          },
        ]
      },
      {
        path:"/vip",
        component:Vip,
        meta: {
          flag: true,
          requredAuth: false
        }
      },
      {
        path:"/order",
        component:Order,
        meta: {
          flag: true,
          requredAuth: false
        }
      },
      {
        path:"/mine",
        component:Mine,
        meta: {
          flag: true,
          requredAuth: false
        }
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