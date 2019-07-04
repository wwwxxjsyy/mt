<template>
    <div id="app">
        <mt-login-header/>
        <div class="title"><h6>欢迎登陆美团</h6></div>

        <div class="login_warp">
            <div class="loginbox fl">
                <div class="login_header">
                    <span @click="cur=1" :class="{active:cur==1}">账号登录</span>
                    <span @click="cur=0" :class="{active:cur==0}">短信登录</span>
                    <!-- <span @click="cur=2" :class="{active:cur==2}">扫码登录</span> -->
                </div>
                <div class="login_content">
                    <div v-show="cur==1" class="Cbody_item">
                        <div class="form_item"><input type="text" name="fname" placeholder="手机号" value="" v-model="phone"></div>
                        <div class="form_item">
                          <input type="password" name="fpassword" placeholder="密码" v-model="verifyCode">
                          <!-- <div class="errors" ref="errors2" v-show="errors">{{errors.msg}}</div> -->
                        </div>
                        <div class="form_item">
                            <!-- <div class="fl"><input type="checkbox">记住密码</div> -->
                            <div class="fr"><a href="javascript:;">忘记密码</a></div>
                        </div>
                        <div class="clear"></div>
                        <div class="form_item">
                            <input type="submit" name="" value="登录" @click="toggleLogin1()">
                        </div>
                    </div>
                    <div v-show="cur==0" class="Cbody_item">
                        <div class="form_item"><input type="text" name="fname" placeholder="手机号" v-model="phone"></div>
                        <div class="form_item">
                          <input type="password"  name="fpassword" placeholder="验证码"  v-model="verifyCode">
                          <!-- <input id="btnSendCode1" type="button" class="btn btn-default" value="获取验证码" @click="sendMessage1()" /> -->
                          <input class="btn btn-default" id="btnSendCode1"  @click="sendMessage1()" value="获取验证码">
                          <!-- <div class="errors" ref="errors" v-show="errors1">{{errors.msg}}</div> -->
                        </div>
                        <div class="clear"></div>
                        <div class="form_item">
                            <input type="submit" name="" @click="toggleLogin2()" value="登录">
                        </div>

                    </div>
                    <div v-show="cur==2" class="Cbody_item">
                        <div class="qcode"><img src="./img/qcode.png" width="160" height="160" alt="二维码" /></div>
                        <div class="beizhu">打开手机客户端扫码注册</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div class="center"><span class="iconfont wechat">&#xe638;</span></div>
            <div class="login_password center">登陆代表你已经同意<span>美团用户协议</span>、<span>隐私政策</span></div>
        </div>
    </div>
</template>
<script type="text/javascript" src="js/html5shiv.min.js"></script>
<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
import MtLoginHeader from "./loginHeader";
import qs from "qs"
export default {
  name: "RegisterLogin",
  components: {
    "mt-login-header": MtLoginHeader
  },
  data() {
    return {
      cur: 0, //默认选中第一个tab
      errors1: {},
      errors2: {},
      phone: "",
      verifyCode:"",
      password:"",
      phoneReg: /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/, //手机号正则
      count: 60, //间隔函数，1秒执行
      InterValObj1: null, //timer变量，控制时间
      curCount1: null //当前剩余秒数
    };
  },
  methods: {
    sendMessage1() {
      this.curCount1 = this.count;
      var phone = this.phone;
      if (!this.phoneReg.test(phone)) {
        alert(" 请输入有效的手机号码");
        return false;
      }
      //设置button效果，开始计时
      $("#btnSendCode1").attr("disabled", "true");
      $("#btnSendCode1").val(+this.curCount1 + "秒再获取");
      // $("#btnSendCode1").css({color:"#eee"})
       this.InterValObj1 = window.setInterval(this.SetRemainTime1, 1000); //启动计时器，1秒执行一次
      //向后台发送处理数据
      this.$axios
          .get("/user/check_code/?phone="+this.phone)
          .then(res => {
            console.log(res);
          });
    },
    SetRemainTime1() {
      if (this.curCount1 == 0) {
        window.clearInterval(this.InterValObj1); //停止计时器
        $("#btnSendCode1").removeAttr("disabled"); //启用按钮
        $("#btnSendCode1").val("重新发送");
      } else {
        this.curCount1--;
        $("#btnSendCode1").val(+this.curCount1 + "秒再获取");
      }
    },
    //点击登录按钮
    //验证码登录提交
    toggleLogin1(){
      // 取消错误提醒
        let formData={
            phone:this.phone,
            pwd:this.verifyCode
        }
        this.$axios.post('/user/pwd_login', {phone:this.phone,code:this.verifyCode}).then(res=>{
            //打印登陆成功信息   登陆成功
            localStorage.setItem("mt_login", res.token);
            //存储在vuex中
            //  this.$store.dispatch("setUser",this.phone)
            this.$router.push('/home')
        }).catch(err =>{  
          this.errors = {
              // code: err.response,
            };  
        }) 
    },
    //密码登录提交
    toggleLogin2(){
      this.errors = {};
        let formData={
            phone:this.phone,
            code:this.verifyCode,
        }
        this.$axios.post('/user/code_login/',formData).then(res=>{
            console.log(res)
            if(res.data.code==200){
              
                localStorage.setItem("mt_login", res.data.token);
                //存储在vuex中
                this.$store.dispatch("setUser",this.phone)
                
                this.$router.push('/home')
            }else{
                 this.errors = {
              // code: err.response,
            }; 
            }
        })
        
    }
  }
};
</script>

<style scoped>
@import "css/main.css";

.title {
  font-size: 0.45rem;
  padding-left: 2.4rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}
.wechat {
  font-size: 0.7rem;
  color: rgb(0, 200, 0);
  display: inline-block;
  margin-bottom: 0.4rem;
}
.bottom {
  margin-top: 2rem;
  text-align: center;
}
.code1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 94%;
  height: 1rem;
  background: none;
  margin:-.5rem 0 0;
  margin-left: 6px;
  font-size: .3rem;
  border: 1px solid #999;
  border-radius: 5px;
  padding-right: 16px;
 
}
.code1>input{
    display: block;
    width: calc(100% - 1rem);
    height: 1rem;
    position: relative;
    top:.5rem;
    outline: none;
    border: 1px solid #999;
    -webkit-transition: ease all 0.5s;
    transition: ease all 0.5s;
    border-radius: .2rem;
    font-size: 3rem;
}
.btn-default{
  border:none;
  float:right;
  position: relative;
  top:-.3rem;
  right:.2rem;
  color: #ffbd27;
  border:none;
  outline:none;
  font-size: .3rem;
  width:1.5rem;
  background:none;
}
#code1 {
  width: calc(100% - 1rem);
  height: 1rem;
  background: none;
  border: 0;
  outline: none;
  line-height: 55px;
  margin-top: -20px;
  font-size: 20px;
}
#btnSendCode1 {
  width: 1.8rem;
  height: 1rem;
  margin: -.3rem;
  font-size: .3rem;
  text-align: center;

}
.errors{
  position: relative;
  top:-.7rem;
  margin-left:.2rem;
  color:red;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
 font-size: .3rem;
  color: #333;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: .3rem;
  color: #333;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: .3rem;
  color: #333;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: .3rem;
  color: #333;
}
</style>
