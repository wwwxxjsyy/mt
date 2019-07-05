<template>
<div>
    <PlusAddressHeader/>
    <PlueAddressContrnt/>
</div>
</template>

<script>
import PlusAddressHeader from '../plusaddress/plusAddressHeader'
import PlueAddressContrnt from '../plusaddress/plusAddressContent'
export default {
components: {
    PlusAddressHeader,
    PlueAddressContrnt
},
data() {
<<<<<<< HEAD
    return {
        addressInfo: {
        },
        iconfont:"&#xe61a;",
        // title:"",
        tags:["家","学校","公司"],
        sexes:["先生","女士"],
        showSearch: false,
        title:"新建收货地址"
=======
return {
>>>>>>> 449dd4b2850738ae71b5e2e26d23204d009a1545

};
},
computed: {},
watch: {},
methods: {

},

<<<<<<< HEAD
      // 存储数据
        if (this.title == "新建收货地址") {
          this.addAddress();
        } else {
          // this.addAddress();
          this.editAddress();
        }
    },
    showMsg(msg) {
      Toast({
        message: msg,
        position: "center",
        duration: 2000
      });
    },
    //发送地址请求
    addAddress() {
      let user_id=localStorage.getItem('mt_login')
       this.$axios
         .post('/user/add_address/?token='+user_id,this.addressInfo)
         .then(res => {
           console.log(res)
          if (!this.$store.getters.userInfo) {
            this.$store.dispatch("setUserInfo", this.addressInfo);
           }
          this.$router.push("/Address");
         })
         .catch(err => console.log(err));
    },
    //修改地址请求
    editAddress() {
      console.log(this.addressInfo)
       let user_id=localStorage.getItem('mt_login')
       this.$axios
        .post('/user/address/up_address/?token='+user_id,this.addressInfo)
        .then(res => {
          this.$router.push("/Address");
         });
    }
  }
}

//  beforeRouteEnter(to, from, next){
//      console.log(to.params.addressInfo)
//      next(vm =>{
//          vm.addressInfo = vm.$route.params.addressInfo
//          vm.title = vm.$route.params.title
//          vm.iconfont = vm.$route.params.iconfont
//          console.log(vm.iconfont)
//      })
//    }

//  }

=======
}
>>>>>>> 449dd4b2850738ae71b5e2e26d23204d009a1545
</script>
<style  scoped>

</style>