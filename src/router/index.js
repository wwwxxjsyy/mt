import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import Home from "../pages/home"
import Order from "../pages/order"
import Mine from "../pages/mine"
import Vip from "../pages/vip"
import Login from "../pages/login"
import LoginMessageVerification from '../components/login/loginMessageVerification'
import VipOpen from '../components/vip/vipOpen/'
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
        redirect:"/home",
        meta:{
          flag:true,
          requredAuth:true
        }  
      },
      {
        path:"/home",
        component:Home,
        meta:{
          flag:true,
          requredAuth:true
        }  
      },
      {
        path:"/vip",
        component:Vip,
        meta:{
          flag:true,
          requredAuth:true
        }  
      },
      {
        path:"/order",
        component:Order,
        meta:{
          flag:true,
          requredAuth:true
        }  
      },
      {
        path:"/mine",
        component:Mine,
        meta:{
          flag:true,
          requredAuth:true
        }  
      },
      {
        path:"/login",
        component:Login,
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
        
      },
      {
        name:"LoginMessageVerification",
        path:"/loginMessageVerification",
        component:LoginMessageVerification
        
      },
      
      {
        path:"**",
        redirect:"/home"
      }
  ]
})