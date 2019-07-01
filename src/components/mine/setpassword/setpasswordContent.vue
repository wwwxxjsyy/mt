<template>
<div class='setpassword-content'>
    <div class="password">
        <label>密码</label>
        <input type="text" placeholder="请输入密码">
    </div>
    <div class="confirm">
         <label>确认密码</label>
        <input type="text" placeholder="再次输入密码">
      
    </div>
    <p>密码长度8~32位,须包含数字、字母、符号至少2中或以上元素</p>
    <div class="button">
        <a href="#">确认</a>
        <span>设置成功后,下次可以直接使用您的手机号和该密码登录账户</span>
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
<style  scoped>
.setpassword-content{
    padding: .7rem .75rem 0 .75rem;
}
.setpassword-content .password{
    height: 1.4rem;
    border-bottom:1px solid #b3b3b3;
    line-height: 1.4rem;
}
.setpassword-content .password label{
    font-size:.4rem;
    color:black;
}
.setpassword-content .password input{
    height: 1.2rem;
    border: none;
    font-size: .3rem;
    padding-left: .8rem;
    outline: 0;
}
.setpassword-content .confirm{
    height: 1.7rem;
    border-bottom:1px solid #b3b3b3;
    line-height: 1.7rem;
    margin-bottom: .1rem;
}
.setpassword-content .confirm label{
    font-size:.4rem;
    color:black;
}
.setpassword-content .confirm input{
    height: 1.5rem;
    border: none;
    font-size: .3rem;
    padding-left: .1rem;
    outline: 0;
}
.setpassword-content  p{
    font-size: .3rem;
    color: #5e5e5e;
    margin-bottom:.62rem;
}
.setpassword-content .button a{
    display: block;
    height: 1.1rem;
    border-radius: .55rem;
    background: #cccccc;
    text-align: center;
    line-height: 1.1rem;
    color:#fff;
    font-size: .4rem;
    margin-bottom: .2rem;
}
.setpassword-content .button{
    font-size: .3rem;
    color: #5e5e5e;
}
</style>