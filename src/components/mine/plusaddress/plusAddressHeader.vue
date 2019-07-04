<template>
   <div class="plus-address-header">
        <div class="back">
           <i class="iconfont goback" @click="returnOut">&#xe607;</i>
            <span v-if="title? tit=title:tit='新增收货地址'">{{tit}}</span>
            <i class="iconfont del" v-html="iconfont" @click="handleDelete()"></i>
        </div>
   </div>
</template>

<script>

export default {
components: {},
data() {
    return {
        tit:"",
    };
},
props:{
    title:String,
    iconfont:String,
    addressInfo:Object,
   
},
computed: {},
watch: {},
methods: {
     returnOut(){
        window.history.back()
    },
    //删除地址
    handleDelete(address, index) {
        if(localStorage.mt_login){
            this.$axios
        .delete('/api/user/address/',{id:address._id})
        .then(res => {
          this.addressInfo=null;
        });
        }
      
    },
},

}
</script>
<style scoped>
.plus-address-header {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fafafa;
    padding-left: .39rem;
    position:sticky;
    top:0;
    left:0;
    z-index: 2000;
}

.plus-address-header .back {
    display: flex;
    
}
.plus-address-header .back .iconfont{
    font-size: .5rem;
}
.goback {
    
    color: #333;

}
.del {
    color: #333;
    margin-left:1.7rem;

}
.plus-address-header .back>span {
    margin-left: 2rem;
    font-size: .35rem;
    color: black;
}
</style>