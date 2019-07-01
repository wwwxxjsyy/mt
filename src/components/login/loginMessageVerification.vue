<template>
    <div class="card">
        <mt-login-header/>
        <div class="content">
            <p class="tips">输入验证码</p>
            <p class="tipsPhone">验证码已发送至 
                <span>+86 {{phone}}</span>
            </p>
         <div class="input-box checkedCode">
      <div class="input-content getCodeMsg">
        <input v-model.trim.number="input0" maxlength="1" pattern="[0-9]*" ref="input0" @keydown.8="deleteValue('input0','input0')" @keyup="changeValue($event,'input0','input1')" type="tel" >
        <input v-model.trim.number="input1" maxlength="1" pattern="[0-9]*" ref="input1" @keydown.8="deleteValue('input1','input0')" @keyup="changeValue($event,'input1','input2')" type="tel" >
        <input v-model.trim.number="input2" maxlength="1" pattern="[0-9]*" ref="input2" @keydown.8="deleteValue('input2','input1')" @keyup="changeValue($event,'input2','input3')" type="tel" >
        <input v-model.trim.number="input3" maxlength="1" pattern="[0-9]*" ref="input3" @keydown.8="deleteValue('input3','input2')" @keyup="changeValue($event,'input3','input4')" type="tel" >
        <input v-model.trim.number="input4" maxlength="1" pattern="[0-9]*" ref="input4" @keydown.8="deleteValue('input4','input3')" @keyup="changeValue($event,'input4','input5')" type="tel" >
        <input v-model.trim.number="input5" maxlength="1" pattern="[0-9]*" ref="input5" @keydown.8="deleteValue('input5','input4')" @keyup="changeValue($event,'input5','input5')" type="tel">
      </div>
    </div>
     <div class="send">   
        <span v-if="sendMsgDisabled">{{time+' 秒后重新获取验证码'}}</span>
        <span v-if="!sendMsgDisabled" @click="send()" class="repeat">重新获取验证码</span>
    </div>
    </div>
</div>
  
</template>
<script src="../../../static/js/jquery-3.4.0.min.js"></script>
<script>

import MtLoginHeader from "./loginHeader";
export default {
  name: "MtLoginVrification",
  components: {
    "mt-login-header": MtLoginHeader
  },
  data(){
    return {
      time: 10, // 发送验证码倒计时
      sendMsgDisabled: true,
      phone:null,
      numArr:[],
      valueList:'',
      simpleInput0: '',
      simpleInput1: '',
      input0: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: ''
    }
  },
  methods:{
    send() {
        this.input0=""
        this.input1=""
        this.input2=""
        this.input3=""
        this.input4=""
        this.input5=""
        this.numArr=[]
        this.valueList=''
        this.sendMsgDisabled = true;
        let me = this;
        let interval = window.setInterval(function() {
        if ((me.time--) <= 0) {
          me.time = 10;
          this.sendMsgDisabled = true;
          window.clearInterval(interval);
        }
      }, 1000)

    },
    deleteValue (inputValue, previousItem) { // 键盘按下时$event，当前input，上一个input
      // console.log(this[inputValue], this[previousItem])
      if (this[inputValue].length > 0) { // 当前有值，清空之
        this[inputValue] = ''
      } else { // 当前没有值，光标跳转到上一个input，并清空该input值
        this.$nextTick(() => {
          this.$refs[previousItem].focus()
          this[previousItem] = ''
          this[inputValue] = ''
        })
      }
    },
    changeValue (e, inputValue, nextItem) { // 键盘抬起时$event，当前input，下一个input
      // console.log(e.keyCode, this[inputValue], this[nextItem])
      if (e.keyCode !== 8) {
        this.$nextTick(() => {
          this.$refs[nextItem].focus() // 截取当前值最后一位，跳到下一个input
          this[inputValue] = (this[inputValue]).toString().slice(-1)
        })
      }
      //将获得的数字push进数组中
      this.numArr.push(this[inputValue])

      
      for(var i = 0;i<this.numArr.length;i++){
       
          //判断数组是否为空，为空的话将长度减1
          if(this.numArr==''&&this.numArr==null&&typeof(this.numArr[i])==undefined){
              this.numArr.splice(i,1);
              i=i-1;
              console.log("验证码不符合规则")
          }else{
                //判断数组长度为6
            if(this.numArr.length===6){
            //将数组合并成字符串
            this.valueList=this.numArr.join('')
            // this.Observer.$on("getPhone",(phone)=>{
            //   this.$nextTick(()=>{
            //     this.phone=phone
            //   })
            //   console.log(this.phone)
            // })
            var formData={
              "phone":"18821687723",
              "code":this.valueList
            }
              // console.log(this.valueList)
              // console.log(this.phone)
              // 接口
              //------ this.$axios.post('/user/code_login/',{"phone":"18821687723","code":this.valueList}).then(res=>{
                //----- if(res.code==200){
                  //打印登陆成功信息   登陆成功
                  // ---console.log(res.msg)
                  //存储在vuex中
                // this.$store.dispatch("setUser",'T123')
                this.$router.push('/mine')
                // 发送请求比对成功，跳转路由，我的页面
                //---- }
              //----- })
            }
          }
          
      }
    },
      
  },
  created(){
    

      
    
    let me = this;
    let interval = window.setInterval(function() {
      
        if ((me.time--) <= 0) {
          me.time = 10;
          me.sendMsgDisabled=false
          window.clearInterval(interval);
        }
    }, 1000)
  }
  
}
  //  data(){
  //     return {
  //         phone:'',
  //         verification:'',
  //     }
  // },
  // methods:{
  //     onSubmit(){

  //             const formData = {
  //                 phone:this.phone,
  //                 verification:this.verification
  //             }
  //             axios.post('http://localhost:5000/api/users/register',formData)
  //             .then(res=>{
  //                 console.log(res)
  //                 this.$router.push({name:'loginLink'})
  //             })

  //     }
  // }
// };
</script>

<style scoped>

.card {
  height: 100%;
  background: #fff;
}
.content {
  padding: 1rem 0.8rem 5rem;
}
.tips {
  font-size: 0.6rem;
  line-height: 1.2rem;
}
.tipsPhone {
  font-size: 0.3rem;
}
.tipsPhone > span {
  font-size: 0.35rem;
}

.checkedCode{
    margin-top:.5rem;
    margin-bottom:.5rem;
}
.iptCodeTip {
  color: #000;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
}
.checkedCode {
  /* padding: 0 48px; */
  overflow: hidden;
}
.checkedCode a {
  float: right;
  font-size: 13px;
  color: #000000;
  text-decoration: underline;
  line-height: 13px;
}
.checkedCode input {
  padding-bottom: 0.1rem;
  margin: 10px 0;
  width: 12%;
  margin-right: 5.6%;
  text-align: center;
  display: block;
  float: left;
  height: 1rem;
  outline:none;
  caret-color: rgb(255,189,39);
  font-size: .44rem;
  border:none;
  border-bottom: solid 1px #898989;
}
.checkedCode input:focus{
  border-bottom: solid 2px #333;
}
.checkedCode input:last-child {
  margin-right: 0;
}
.send{
  margin-top:1.5rem;
}
.repeat{
  color:rgb(255,189,39);
}
</style>