import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import Comp from "../components/common/compon.vue"
import Home from "../pages/home"
import Order from "../pages/order"
import Mine from "../pages/mine"
import Vip from "../pages/vip"
import Login from "../pages/login"
import RegisterLogin from '../components/login/registerLogin.vue'
import LoginMessageVerification from '../components/login/loginMessageVerification'
import VipOpen from '../components/vip/vipOpen'
import RedMoney from '../components/mine/others/RedMoney'
import Collection from '../components/mine/others/Collection'
import Address from '../components/mine/others/Address'
import PlusAddress from '../components/mine/others/PlusAddress'

// 首页相关路由 
import Delicious from '../pages/delicious'//美食
import Homedrink from '../components/home/homepage/home-drink'
import Hometest from '../components/home/homecommon/recommend'




import Mywallet from '../components/mine/others/MyWallet'
import Balance from '../components/mine/others/Balance'
import MyEvalute from '../components/mine/others/MyEvalute'
import MyAccount from '../components/mine/others/MyAccount'
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

import VipLogin from '../components/vip/viplogin/'

import selectAddress from '../components/home/homeIndex/mt-home-select-address.vue'
import city from '../components/home/homeIndex/mt-home-city.vue'
import Superior from '../components/home/homeIndex/mt-home-superior.vue'

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
        meta:{
          flag:true,
          requredAuth:true
        }  
      },
      {
        path:'/viplogin',
        component:VipLogin,
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
<<<<<<< HEAD
        path:"/drink",
        component:Homedrink,
        meta: {
          flag: false,
          requredAuth: false
        }
      },
      {
        path: "/delicious",
        component: Delicious,
        meta: {
          flag: true,
          requredAuth: true
        },
      },
      {
        path: "/test",
        component: Hometest,
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
=======
        name:"selectAddress",
        path:"/selectAddress",
        component:selectAddress,
        meta:{
          flag:false,
          requredAuth:true
        }  
      },
      {
        name:"city",
        path:"/city",
        component:city,
        meta:{
          flag:false,
          requredAuth:true
        }  
>>>>>>> f2369eea932cf092ac236c9d25eac1b0cb541e68
      },
      {
        path:"/homegoods",
        component: HomeGoods,
        children:[{
          path: 'goods',
          component: HomeShopGoods
        },
        {
          path: 'ratings',
          component: HomeShopRatings
        },
        {
          path: 'seller',
          component: HomeShopSeller
        }
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
        component:Login,
        meta:{
          flag:false,
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
        path:'/registerLogin',
        name:RegisterLogin,
        component:RegisterLogin,
        meta:{
          flag:false,
          requredAuth:false
        }
      },
      {
        name:"LoginMessageVerification",
        path:"/loginMessageVerification",
        component:LoginMessageVerification,
        meta: {
          flag: false,
          requredAuth: true
        },
      },
        {
        path:"/RedMoney",
        component:RedMoney,
        meta: {
          flag: true,
          requredAuth: true,
          isShow:false
        },
        meta: {
         isShow:false
        },

      },
      {
        path:"/Collection",
        component:Collection,
        meta: {
          flag: true,
          requredAuth: true
        },
        meta: {
          isShow:false
         },
      },
      {
        path:"/Address",
        component:Address,
        meta: {
          flag: true,
          requredAuth: true
        },
        meta: {
          isShow:false
         },
      },
      {
        path:'/PlusAddress',
        component:PlusAddress,
        meta: {
          flag: true,
          requredAuth: true
        },
      },     // order
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


      
      {
        path:'/MyWallet',
        component:Mywallet
      },
      {
        path:'/Balance',
        component:Balance
      },
      {
        path:'/MyEvalute',
        component:MyEvalute
      },
      {
        path:'/MyAccount',
        component:MyAccount
      },
      {
        path:'/Comp',
        component:Comp
      },
      {
        path:'/superior',
        component:Superior
      },
 
      {
        path:"**",
        redirect:"/home"
      },
    
  ]
})