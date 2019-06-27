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
<<<<<<< HEAD
import VipOpen from '../components/vip/vipOpen/'
=======

import RedMoney from '../components/mine/others/RedMoney'
import Collection from '../components/mine/others/Collection'
import Address from '../components/mine/others/Address'
import PlusAddress from '../components/mine/others/PlusAddress'
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
=======
                              // order
      // 待评价
import OrderOrderNoDiscuss from '../components/orders/OrderNoDiscuss.vue'
      // 退款
import OrderOrderRefund from '../components/orders/OrderRefund.vue'
      // 搜索
import OrderOrderSearch from '../components/orders/OrderSearch.vue'
      // 消息
import OrderOrderNews from '../components/orders/OrderNews.vue'
      // 查看10个商家
import OrderOrderLately from '../components/orders/OrderLately.vue'
      // 评论
import OrderOrderComment from '../components/orders/OrderComment.vue'
      // 相似商家
import OrderOrderSimilarity from '../components/orders/OrderSimilarity.vue'

>>>>>>> lihao
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
<<<<<<< HEAD
=======
                          // order
          {
            name:"OrderOrderNoDiscuss",
            path:"/OrderOrderNoDiscuss",
            component:OrderOrderNoDiscuss
          },
          {
            name:"OrderOrderRefund",
            path:"/OrderOrderRefund",
            component:OrderOrderRefund
          },
          {
            name:"OrderOrderSearch",
            path:"/OrderOrderSearch",
            component:OrderOrderSearch
          },
          {
            name:"OrderOrderNews",
            path:"/OrderOrderNews",
            component:OrderOrderNews
          },
          {
            name:"OrderOrderLately",
            path:"/OrderOrderLately",
            component:OrderOrderLately
          },
          {
            name:"OrderOrderComment",
            path:"/OrderOrderComment",
            component:OrderOrderComment
          },
          {
            name:"OrderOrderSimilarity",
            path:"/OrderOrderSimilarity",
            component:OrderOrderSimilarity
          },


      
>>>>>>> lihao
      {
        path:"**",
        redirect:"/home"
      },
    
  ]
})