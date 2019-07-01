<template>
  <div class="mt-mine">
    <mineHeader :userInfo="userInfo"/>
    <mineVip :userInfo="userInfo"/>
    <mineList :userInfo="userInfo"/>
    <mineContent :userInfo="userInfo"/>
    <Footer :userInfo="userInfo"/>
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
      userInfo:{}
    }
  },
  computed:{
      currentUser(){
              return this.$store.getters.currentUser
      }
        
  },
  created(){
    // 向后端请求数据
    if(currentUser){
      this.$axios.post('/user/code_login/',currentUser).then(res=>{
        //打印登陆成功信息   登陆成功
        console.log(res.msg)
        this.userInfo=res.data
      })
    }else{
      alert("请先登陆")
      this.$router.push('/registerLogin')
    }
    
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