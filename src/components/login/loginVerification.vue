<template>
    <div class="mt-login-verification">
                <div class="card-body">
                    <h6>欢迎登陆美团</h6>
                    <form action="" >
                        <div class="form-group">
                            <label for="phone" class="phone">
                            <div><span>+86</span> <span>></span></div>
                            <input type="phone" v-model="phone"  @input="changePhone">
                            </label>
                            <p class="info" v-if="tips">未注册的手机号验证后自动创建美团账号</p>
                           <label  v-if="!tips" class="phone">
                               <div><span></span> <span class="iconfont"> &#xe60b;</span></div>
                            <input type="text" placeholder="请输入密码" >
                            </label>
                        </div>
                        <button  type="submit" v-if="tips" :class="this.flag ? 'btn' : 'btn1'" @click.prevent="getPhoneNum" >获取短信验证码</button>
                        <button  type="submit" v-if="!tips" :class="this.flag ? 'btn' : 'btn1'" @click.prevent="getLogin" >登录</button>
                    </form>
                </div>
                <div class="login_password" v-if="tips" @click="hasPasswordLogin()"><span>密码登录</span></div>
                <div class="login_password" v-if="!tips" @click="hasVerLogin()"><span>验证码登录</span></div>
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
            flag:true,
            phone:'',
            TEL_REGEXP:/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
            tips:true
            // verification:'',
        }
    },
    methods:{
        //当输入的手机号格式正确时，发送验证码的按钮恢复颜色
        changePhone(){
            if(this.TEL_REGEXP.test(this.phone)){
                $("button[type='submit']").removeAttr("abled");
                    this.flag=true
            }
        },
        getPhoneNum(){
            //把手机号传到发送验证码的页面
            this.Observer.$emit("getPhone",this.phone)
            // var TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
            //正则验证
            if(this.TEL_REGEXP.test(this.phone)){
                $("button[type='submit']").removeAttr("abled");
                    //请求后端发送验证码
                    this.flag=true
                    // this.http.get('/check_code/?phone='+this.phone).then(res=>{
                    //     console.log(res)
                    //     if(res.code==200){
                    //         this.$router.push({name:'LoginMessageVerification'})
                    //     }else{
                    //         $("button[type='submit']").attr("disabled");
                    //         this.flag=false
                    //     }
                    // }) 
                    this.$router.push({name:'LoginMessageVerification'})  
            }else{
                    $("button[type='submit']").attr("disabled");
                    this.flag=false
                }
        },

        // 使用密码登录
        hasPasswordLogin(){
            this.tips=false
        },
        //使用验证码登录
        hasVerLogin(){
            this.tips=true
        },
        getLogin(){
        
            axios.get('/users.json').then(res=>{
                const data = res.data
                const users=[]
                for(let key in data){
                    const user = data[key]
                    users.push(user)
                }
                //实现过滤
                let result = users.filter((user)=>{
                    return user.phone===this.phone && user.password===this.password
                })
                //判断result的长度是否大于0
                if(result != null && result.length>0){
                    this.flag=true
                    this.$store.dispatch("setUser",result[0].phone)
                    this.$router.push('/mine')
                }else{
                    alert("账号或密码错误")
                    this.$store.dispatch("setUser",null)
                }
            })
        
        }
        
    }

}
</script>

<style scoped>
input{
    outline:none;
    padding-left:.1rem;
    font-size:.35rem;
    border:none
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
    border-bottom:1px solid rgb(193,193,193);
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
    outline:none;
}
.btn1{
    width:100%;
    padding:.2rem;
    border-radius:.5rem;
    font-size:.3rem;
    margin-top:.4rem;
    outline:none;
    background:rgb(197, 197, 196);
}
.login_password{
    
    padding-left:.5rem;
    padding-right:.5rem;
    color:#333;
}
.login_password>span{
    color:rgb(255,189,39);
}
.password{
    margin-top:.8rem;
    display:flex;
    border-bottom:1px solid rgb(193,193,193);
    font-size:.3rem;
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