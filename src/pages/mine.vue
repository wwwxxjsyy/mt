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
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getData());
  },
  
  computed:{
      // currentUser(){
      //         return this.$store.getters.currentUser
      // }
        
  },
  methods:{
    // 向后端请求数据
    getData() {
      const user_id = localStorage.getItem(mt_login);
      this.$axios().then(res => {
        // console.log(res.data);
        this.userInfo = res.data;
      });
    },
  },
}
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