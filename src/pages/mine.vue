<template>
  <div class="mt-mine">
    <mineHeader :isLogin='currentUser'/>
    <mineVip/>
    <mineList/>
    <mineContent/>
    <Footer/>
  </div>
</template>

<script>
import mineHeader from "../components/mine/user/mineHeader";
import mineVip from "../components/mine/user/mineLinkVip";
import mineList from "../components/mine/user/mineList";
import mineContent from "../components/mine/user/mineContent";
import{getStore} from "../config/mUtils"
export default {
  name: "MtMine",
  components: {
    mineHeader,
    mineVip,
    mineList,
    mineContent
  },
  data(){
    return {
      currentUser:"",
    }
  },
  computed:{
      currentUser(){
              return this.$store.getters.currentUser
      }
        
<<<<<<< HEAD
  },
  created(){
    // 向后端请求数据
    // this.currentUser=currentUser
    // this.$axios.post('/user/code_login/',this.currentUser).then(res=>{
        //     if(res.code==200){
        //     //打印登陆成功信息   登陆成功
        //     console.log(res.msg)
        //     //存储在vuex中
        //     this.$store.dispatch("setUser",'T123')
        //     this.$router.push('/mine')
        //     // 发送请求比对成功，跳转路由，我的页面
        //     }else{
            // this.$store.dispatch("setUser",null)
        //          alert("账号或密码错误")
        //     }
        // })
=======
>>>>>>> 95771a1f104ccabf58c9fdd3023ef85659b7a6e6
  }
};
</script>

<style scoped>
/* body {
  background: #fafafa;
  font-size: 0.28rem;
  display: flex;
  flex-direction: column;
} */
.mt-mine {
  padding: 0 0.36rem;
  padding-bottom: 1.38rem;
   background: #fafafa;
}

</style>