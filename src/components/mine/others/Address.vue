<template>
<div class="mt-address">
    <AddressHeader/>
    <AddressContent :allAddress="allAddress"/>
</div>
</template>

<script>
import AddressHeader from '../address/addressHeader'
import AddressContent from '../address/addressContent'
export default {
components: {
    AddressHeader,
    AddressContent
},
data() {
    return {
        allAddress:[]
    };
},
computed: {},
watch: {},
  beforeRouteEnter(to,from,next){
      next(vm=>vm.getData())
  },
methods: {
     getData(){
        //请求数据
        // localStory.mt_login获取token验证是否是登录状态
        let user_id=localStorage.getItem('mt_login')
        this.$axios('/user/address/?token='+user_id).then(res=>{
            console.log(res.data.data)
              this.allAddress=res.data.data
          })
          .catch(err=>{

          })
     
    },
},

}
</script>
<style  scoped>
.mt-address{
    background: #fff;
}
</style>