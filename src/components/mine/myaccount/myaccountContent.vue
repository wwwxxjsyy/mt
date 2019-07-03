<template>
<div class='myaccount-content'>
    <div class="input-wrap">
        <p>头像</p>
        <div class="wrapcon">
            <span>
                <img src="../../../assets/minePic/logo.gif" alt="">
            </span>
            <i class="iconfont">{{'&#xe60a;'}}</i>
        </div>
    </div>
    <div class="input-wrap">
         <p>用户名</p>
        <div class="wrapcon">
            <span>Tccc0258522</span>
            <i class="iconfont">{{'&#xe60a;'}}</i>
        </div>
    </div>
    <router-link to="/SetPassword" tag="div" class="input-wrap">
          <p>账号密码</p>
        <div class="wrapcon">
            <span>未设置</span>
            <i class="iconfont">{{'&#xe60a;'}}</i>
        </div>
    </router-link>
       
    <div class="input-wrap">
         <p>手机号</p>
        <div class="wrapcon">
            <span>133***9776</span>
            <i class="iconfont">{{'&#xe60a;'}}</i>
        </div>
    </div>
    <div class="input-wrap">
         <p>微信账号</p>
        <div class="wrapcon">
            <span>解绑</span>
            <i class="iconfont">{{'&#xe60a;'}}</i>
        </div>
    </div>
    <div class="input-wrap">
         <p>注销账号</p>
        <div class="wrapcon">
            <span>注销后无法恢复,请谨慎操作</span>
            <i class="iconfont">{{'&#xe60a;'}}</i>
        </div>
    </div>
    <div>
      <div class="myaccount-out"  @click="handleLogout">退出当前账号</div>
    <!-- <setButtn :isShow="isshow"/> -->
    </div>
</div>
</template>

<script>

export default {
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {
    handleLogout() {
      localStorage.removeItem("mt_login");
      this.$router.push("/registerLogin");
    },
},

}
</script>
<style scoped>
.myaccount-content{
    margin-top: .2rem;
    background: #fff;
    padding: 0 .49rem;
    color:black; 
}
.myaccount-content .input-wrap{
    border-bottom:1px solid #fff;
    display: flex;
    height:1rem;
    align-items: center;
    justify-content: space-between;
}
.myaccount-content .input-wrap:first-child{
    height: 1.3rem;
}
.input-wrap .wrapcon{
    display: flex;
    align-items: center;
}
.input-wrap>p{
    font-size:.32rem;
}
.input-wrap .wrapcon img{
    width: 1.1rem;
    height: 1.1rem;
}
.input-wrap .wrapcon span{
    font-size: .32rem;
    color: #9e9e9e;
}
.input-wrap .wrapcon i{
    font-size:.5rem;
    color: #9e9e9e;
}
.myaccount-out {
  width: 100%;
  height: 1.1rem;
  color: #ff6c7a;
  font-size: 0.35rem;
  text-align: center;
  line-height: 1.1rem;
  background: #fafafa;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>