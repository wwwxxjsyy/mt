<template>
<div class='myaccount-content'>
    <div class="headportrait">
        <p>头像</p>
        <div class="right">
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
    <div class="password">
         <p>账号密码</p>
        <div>
            <span>未设置</span>
            <i class="iconfont">{{'&#xe60a;'}}</i>
        </div>
    </div>
    <div class="phone">
         <p>手机号</p>
        <div>
            <span>133***9776</span>
            <i class="iconfont">{{'&#xe60a;'}}</i>
        </div>
    </div>
    <div class="wechat">
         <p>微信账号</p>
        <div>
            <span>解绑</span>
            <i class="iconfont">{{'&#xe60a;'}}</i>
        </div>
    </div>
    <div clsss="delete">
         <p>注销账号</p>
        <div>
            <span>注销后无法恢复,请谨慎操作</span>
            <i class="iconfont">{{'&#xe60a;'}}</i>
        </div>
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

},

}
</script>
<style scoped>
.myaccount-content{
    margin-top: .34rem;
    background: #fff;
    padding: 0 .48rem;
    color:black; 
}
.myaccount-content>div{
    border-bottom:1px solid #efefef;
}
.headportrait{
    height:2.18rem;
    display: flex;
    align-items: center;
} 
.headportrait>p{
    font-size:.38rem;
}
.headportrait .right{
    display: flex;
}
.headportrait .right img{
    width: 1.1rem;
    height: 1.1rem;
    margin-left: 3rem;
    margin-right: .36rem;
}
.headportrait .right i{
    font-size:.56rem;
    margin-top: .3rem;
}

.input-wrap{
    height:1.42rem;
    display: flex;
    align-items: center;
} 
.input-wrap>p{
    font-size:.38rem;
}
.input-wrap .wrapcon span{
    font-size: .36rem;
      margin-left: 2.6rem;
    margin-right: .05rem;
}
.input-wrap .wrapcon i{
    font-size:.56rem;
    margin-top: .3rem;
}
</style>