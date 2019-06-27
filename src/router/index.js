import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import Home from "../pages/home"
import Order from "../pages/order"
import Mine from "../pages/mine"
import Vip from "../pages/vip"
import Login from "../pages/login"
import LoginMessageVerification from '../components/login/loginMessageVerification'
<<<<<<< HEAD
import VipOpen from '../components/vip/vipOpen/'
=======

import RedMoney from '../components/mine/others/RedMoney'
import Collection from '../components/mine/others/Collection'
import Address from '../components/mine/others/Address'
import PlusAddress from '../components/mine/others/PlusAddress'
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
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
<<<<<<< HEAD
        meta:{
          flag:true,
          requredAuth:true
        }  
=======
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
      },
      {
        path:"/home",
        component:Home,
<<<<<<< HEAD
        meta:{
          flag:true,
          requredAuth:true
        }  
=======
        meta: {
          flag: true,
          requredAuth: true
        },
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
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
      },
      {
        path:"/vip",
        component:Vip,
<<<<<<< HEAD
        meta:{
          flag:true,
          requredAuth:true
        }  
=======
        meta: {
          flag: true,
          requredAuth: true
        },
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
      },
      {
        path:"/order",
        component:Order,
<<<<<<< HEAD
        meta:{
          flag:true,
          requredAuth:true
        }  
=======
        meta: {
          flag: true,
          requredAuth: true
        },
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
      },
      {
        path:"/mine",
        component:Mine,
<<<<<<< HEAD
        meta:{
          flag:true,
          requredAuth:true
        }  
=======
        meta: {
          flag: true,
          requredAuth: true
        },
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
      },
      {
        path:"/login",
        component:Login,
<<<<<<< HEAD
        meta:{
          flag:true,
          requredAuth:true
        }  
      },
      //vip
      {
        path:'/vipOpen',
        component:VipOpen,
        meta:{
          flag:false,
          requredAuth:false
        }  
        
=======
        meta: {
          flag: true,
          requredAuth: true
        },
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
      },
      {
        name:"LoginMessageVerification",
        path:"/loginMessageVerification",
        component:LoginMessageVerification,
        meta: {
          flag: true,
          requredAuth: true
        },
      },
        {
        path:"/RedMoney",
        component:RedMoney,
        meta: {
          flag: true,
          requredAuth: true
        },
      },
      {
        path:"/Collection",
        component:Collection,
        meta: {
          flag: true,
          requredAuth: true
        },
      },
      {
        path:"/Address",
        component:Address,
        meta: {
          flag: true,
          requredAuth: true
        },
      },
      {
        path:'/PlusAddress',
        component:PlusAddress,
        meta: {
          flag: true,
          requredAuth: true
        },
      },
      {
        path:"**",
        redirect:"/home"
      },
    
  ]
})