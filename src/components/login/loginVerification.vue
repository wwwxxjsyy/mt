<template>
    <div class="mt-login-verification">
                <div class="card-body">
                    <h6>欢迎登陆美团</h6>
                    <form action="" @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="phone" class="phone">
                            <div><span>+86</span> <span>></span></div>
                            <input type="phone" v-model="phone">
                            </label>
                            <p class="info">未注册的手机号验证后自动创建美团账号</p>
                        </div>
                        <button  type="submit" class="btn">获取短信验证码</button>
                    </form>
                </div>
                <div class="login_password"><span>密码登录</span></div>
                <div class="bottom">
                    <div class="center"><span class="iconfont wechat">&#xe638;</span></div>
                    <div class="login_password center">登陆代表你已经同意<span>美团用户协议</span>、<span>隐私政策</span></div>
                </div>
            
    </div>
</template>

<script>
export default {
    name:"MtLoginVrification",
     data(){
        return {
            phone:'',
            // verification:'',
        }
    },
    methods:{
        onSubmit(){
        
                const formData = {
                    phone:this.phone,
                    // verification:this.verification
                }
                // this.http.post('http://localhost:5000/api/users/register',formData)
                // .then(res=>{
                //     console.log(res)
                //     this.$router.push({name:'LoginMessageVerification'})
                // })
                
                this.$router.push({name:'LoginMessageVerification'})
           

            
        }
    }

}
</script>

<style scoped>
input{
    outline:none;
    padding-left:.1rem;
    font-size:.35rem;
}
.card-body{
    padding:.5rem;
}
.card-body h6{
    font-size: .5rem;
    line-height:2.2rem;
}
.form-control{
    height:1rem;
    border-radius:.2rem;
    border:none;
    padding-bottom:.2rem;
}

.phone{
    display:flex;
    border-bottom:1px solid #ced4da;
    font-size:.3rem;
}
.phone>div>span{
    line-height:1rem;
    color:rgb(255,189,39)
    
}
.phone>div>span:nth-child(2){
    color:#333;
}
.info{
    color:#c3c3c3;
    margin-top:.2rem;
    margin-bottom:.2rem;
}
.btn{
    width:100%;
    padding:.2rem;
    background:rgb(255,189,39);
    border-radius:.5rem;
    font-size:.3rem;
    margin-top:.4rem;
}
.login_password{
    
    padding-left:.5rem;
    padding-right:.5rem;
    color:#333;
}
.login_password>span{
    color:rgb(255,189,39);
}
.center{
    text-align:center;
    line-height:1rem;
}
.wechat{
    font-size:.7rem;
    color:rgb(0, 200, 0);
}
.bottom{
    margin-top:2rem;
}
</style>