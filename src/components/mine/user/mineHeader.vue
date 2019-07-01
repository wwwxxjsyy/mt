<template>
  <div class="mine-header">
    <router-link to='/login' v-show="!isLogin" class="MineHeaderLogo">
      <img :src="imgUrl" alt>
    </router-link>
    <router-link to='/home' v-show="isLogin" class="MineHeaderLogo">
      <img :src="imgUrl" alt>
    </router-link>

    <a  href="#/login" class="MineName" v-show="!isLogin">登录/注册{{isLogin}}</a>
    <a  class="MineName" v-show="isLogin">{{isLogin}}</a>
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
    };
  },
  computed: {

  },
  watch: {},
  methods: {

  },
  created() {},
  mounted() {},
  // 登录后传入随机验证码
  props:{
    isLogin:String,
    default:'未登录'
  }
};
</script>
<style scoped>
.mine-header {
  width: 100%;
  height: 1.5rem;
  background: #f7f7f7;
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