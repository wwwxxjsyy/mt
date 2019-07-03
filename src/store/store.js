import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const types = {
    SET_LOCATION:"SET_LOCATION",
    SET_ADDRESS:"SET_ADDRESS",
    //购物车
    ORDER_INFO:"ORDER_INFO",
    //user地址信息
    USER_INFO:"USER_INFO"

}
export const store = new Vuex.Store({
    // 存储数据
    state:{
        //设置属性
        currentUser:null,
        isLogin:false,
        //定位地址
        location:{},
        address:"",
        //购物车
        orderInfo:null,
        ////user地址信息
        userInfo:null

    },
    
    getters:{
        // 获取属性的状态
        currentUser:state =>state.currentUser,
        isLogin:state =>state.isLogin,
        //获取定位地址
        location:state=> state.location,
        address:state=> state.address,
         //获取购物车商品
         orderInfo:state =>state.orderInfo,
         //user地址信息
         userInfo:state =>state.userInfo,

    },
    mutations:{
        //改属性的状态
        //更改用户状态信息s
        userStatus(state, user) {
            if(user){
              state.currentUser = user
              state.isLogin = true
            }else{
              state.currentUser = null
              state.isLogin = false
            }
          
        },
        //设置定位地址
        [types.SET_LOCATION](state,location){
            if(location){
                state.location = location;
            }else{
                state.location = null;
            }
        },
        [types.SET_ADDRESS](state,address){
            if(location){
                state.address = address;
            }else{
                state.address = "";
            }
        },

        // lngLatLocation
        //购物车
        [types.ORDER_INFO](state,orderInfo){
            if(location){
                state.orderInfo = orderInfo;
            }else{
                state.orderInfo = "";
            }
        },
          //user地址信息
        [types.USER_INFO](state,userInfo){
            if(userInfo){
                state.userInfo = userInfo;
            }else{
                state.userInfo = "";
            }
        }


    },
    actions:{
          // this.$store.dispatch("setUser",useInfo)存数据
        // computed:{
        //     currentUser(){
        //         return this.$store.getters.currentUser
        //     },
        //     isLogin(){
        //         return this.$store.getters.isLogin
        //     }
        // },
        // 应用mutations
        // 应用mutations
        setUser({commit},user){
            commit("userStatus",user)
        },

        //应用定位地址
        setLocation({commit},location){
            commit(types.SET_LOCATION,location)
        },
        setAddress({commit},address){
            commit(types.SET_ADDRESS,address)
        },
        //购物车
        setOrderInfo({commit},orderInfo){
            commit(types.ORDER_INFO,orderInfo)
        },
        //user地址信息
        setUserInfo({commit},userInfo){
            commit(types.USER_INFO,userInfo)
        },
    }
})