<template>
  <div class="mt-mine">
    <mineHeader :isLogin='currentUser'/>
    <mineVip/>
    <mineList/>
    <mineContent/>
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
  computed:{
    // this.http.get('/check_code/?phone=18821687723').then(res=>{
        // console.log(res)
        // })
        
        currentUser(){
                return this.$store.getters.currentUser
            }
        
  }
};
</script>

<style scoped>
body {
  background: #f7f7f7;
  font-size: 0.28rem;
  display: flex;
  flex-direction: column;
}
.mt-mine {
  padding: 0 0.36rem;
  margin-bottom: 1.38rem;
}

</style>