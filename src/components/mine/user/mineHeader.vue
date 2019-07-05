<template>
  <div class="mine-header">
    <router-link to='/registerLogin' v-if="!token" class="MineHeaderLogo">
      <img :src="imgUrl" alt>
    </router-link>
    <router-link to='/Myaccount' v-if="token" class="MineHeaderLogo">
      <img :src="imgUrl" alt>
    </router-link>
    <a  href="#/registerLogin" class="MineName"  v-if="!token">登录/注册</a>
    <a  class="MineName" v-if="token">{{encryptPhone(token)}}</a>
    <div class="mine-icon">
      <a href="#" class="iconfont" v-for="item in headerIcon" v-html="item" :key="item"></a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imgUrl: require("../../../assets/minePic/logo.gif"),
      headerIcon: ["&#xe601;", "&#xe69a;"],
      flag:false,
      isLogin:"",
      token:"",
    };
  },
  computed: {
  },
   activated(){
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll(){
        const top = document.documentElement.scrollTop;
        if (top > 30) {
         this.$('.mine-header').style.height="75px"
        } else {
          
        }       
         console.log(document.documentElement.scrollTop);
      },
      encryptPhone(phone) {
        var p1 = phone.slice(0,11)
      return p1.replace(/(\w{3})\w{4}(\w{4})/, "$1****$2");
    },
    },

  created() {
    this.token=localStorage.getItem('mt_login')
  },
  mounted() {},
  // 登录后传入随机验证码
  // props:{
  //   currentUser:String,
  //   default:'未登录'
  // }
};
</script>
<style scoped>
.mine-header {
  width: 100%;
  height: 1.5rem;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  position: sticky;
}

.MineHeaderLogo {
  display: flex;
  width: 1rem;
  height: 1rem;
  margin-right: 0.3rem;
}
.MineHeaderLogo img {
  width: 100%;
  height: 100%;
}
.MineName {
  font-size: .4rem;
  color: #303030;
  font-weight: bold;
  margin-right:1.2rem;
}
.mine-icon a {
  display: inline-block;
  font-size: .5rem;

}
.mine-icon a:first-child{
  margin-right: .4rem;
}
</style>