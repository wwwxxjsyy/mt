<template>
    <div class="card">
        <mt-login-header/>
        <div class="content">
            <p class="tips">输入验证码</p>
            <p class="tipsPhone">验证码已发送至 
                <span>+86 18821687723</span>
            </p>
    <div class="checkedCode">
        <div class="getCodeMsg">
            <input type="tel" maxlength="1" name="code" pattern="[0-9]*" />
            <input type="tel" maxlength="1" name="code" pattern="[0-9]*"/>
            <input type="tel" maxlength="1" name="code" pattern="[0-9]*"/>
            <input type="tel" maxlength="1" name="code" pattern="[0-9]*"/>
            <input type="tel" maxlength="1" name="code" pattern="[0-9]*"/>
            <input type="tel" maxlength="1" name="code" pattern="[0-9]*"/>
        </div>
    </div>
</div>
  
    </div>
</template>

<script>
import MtLoginHeader from "./loginHeader";
export default {
  name: "MtLoginVrification",
  components: {
    "mt-login-header": MtLoginHeader
  },
  created() {
    $(".getCodeMsg input").keyup(function(event) {
      // 删除往前 添加往后
      if ($(this).index() < 6) {
        if (event.keyCode == 46 || event.keyCode == 8) {
          $(this)
            .prev("input")
            .focus();
        } else {
          $(this)
            .next("input")
            .focus();
        }
      }
    });
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
};
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
  padding: 0.2rem;
  margin: 10px 0;
  width: 12%;
  margin-right: 5.6%;
  text-align: center;
  display: block;
  float: left;
  height: 35px;
  border-bottom: solid 1px #898989;
  border-radius: 0;
}
.checkedCode input:last-child {
  margin-right: 0;
}
</style>