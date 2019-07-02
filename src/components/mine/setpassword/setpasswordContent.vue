<template>
  <div class="setpassword-content">
    <div class="password">
      <label>密码</label>
      <input type="password" placeholder="请输入密码" v-if="showPwd" v-model="pwd">
      <input type="text" placeholder="请输入密码" v-else v-model="pwd">
      <i class="iconfont" v-if="isShow" @click="change">&#xe641;</i>
      <i class="iconfont" v-if="!isShow" @click="change">&#xe619;</i>
    </div>
    <div class="confirm">
      <label>确认密码</label>
      <input type="password" @input="inputText" placeholder="再次输入密码" v-if="showPwds" v-model="pwds">
      <input type="text" placeholder="再次输入密码" v-else v-model="pwds">
      <i class="iconfont" v-if="isShows" @click="changes">&#xe641;</i>
      <i class="iconfont" v-if="!isShows" @click="changes">&#xe619;</i>
    </div>
    <p>密码长度8~32位,须包含数字、字母、符号至少2中或以上元素</p>
    <div class="button">
      <i @click="handle" :class="this.flag?'btn':'btn1'">确认</i>
      <span>设置成功后,下次可以直接使用您的手机号和该密码登录账户</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showPwd: true,
      showPwds: true,
      pwd: "",
      pwds: "",
      isShow: true,
      isShows: true,
      PASSWORD_REGEXP: /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,16}$/,
      flag: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    change() {
      this.showPwd = !this.showPwd;
      this.isShow = !this.isShow;
    },
    changes() {
      this.showPwds = !this.showPwds;
      this.isShows = !this.isShows;
    },
    handle() {
        if(this.PASSWORD_REGEXP.test(this.pwd)){
            this.$router.push(
                {
                    path:"/Mine"
                }
            )
        }else{
            alert("密码格式不正确，请重新输入")
            this.pwd=""
            this.pwds=""
        }
    },
    inputText() {
      if (this.pwd === this.pwds) {
        this.flag = false;
      }
    }
  }
};
</script>
<style  scoped>
.setpassword-content {
  padding: 0.7rem 0.75rem 0 0.75rem;
}
.setpassword-content .password {
  height: 1.4rem;
  border-bottom: 1px solid #b3b3b3;
  line-height: 1.4rem;
  position: relative;
}
.setpassword-content .password label {
  font-size: 0.4rem;
  color: black;
}
.setpassword-content .password input {
  height: 1.2rem;
  border: none;
  font-size: 0.3rem;
  padding-left: 0.8rem;
  outline: 0;
}
.setpassword-content .password i {
  font-size: 0.5rem;
  position: absolute;
}
.setpassword-content .confirm i {
  font-size: 0.5rem;
  position: absolute;
}
.setpassword-content .confirm {
  height: 1.7rem;
  border-bottom: 1px solid #b3b3b3;
  line-height: 1.7rem;
  margin-bottom: 0.1rem;
}
.setpassword-content .confirm label {
  font-size: 0.4rem;
  color: black;
}
.setpassword-content .confirm input {
  height: 1.5rem;
  border: none;
  font-size: 0.3rem;
  outline: 0;
}
.setpassword-content p {
  font-size: 0.3rem;
  color: #5e5e5e;
  margin-bottom: 0.62rem;
}
.setpassword-content .button .btn {
  display: block;
  height: 1.1rem;
  border-radius: 0.55rem;
  background: #cccccc;
  text-align: center;
  line-height: 1.1rem;
  color: #fff;
  font-size: 0.4rem;
  margin-bottom: 0.2rem;
}
.setpassword-content .button .btn1 {
  display: block;
  height: 1.1rem;
  border-radius: 0.55rem;
  background: orange;
  text-align: center;
  line-height: 1.1rem;
  color: #fff;
  font-size: 0.4rem;
  margin-bottom: 0.2rem;
}
.setpassword-content .button {
  font-size: 0.3rem;
  color: #5e5e5e;
}
</style>