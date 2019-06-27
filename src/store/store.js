import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    // 存储数据
    state:{
        //设置属性
        currentUser:null,
        isLogin:false

    },
    
    getters:{
        // 获取属性的状态
        currentUser:state =>state.currentUser,
        isLogin:state =>state.isLogin,

    },
    mutations:{
        //改属性的状态
        //更改用户状态信息
        userStatus(state, user) {
            if(user){
              state.currentUser = user
              state.isLogin = true
            }else{
              state.currentUser = null
              state.isLogin = false
            }
          
        },

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
    }
})