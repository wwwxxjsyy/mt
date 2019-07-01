<template>
<div class='address-content'>
    <a href="#" v-if="flag">
        <img :src="imgUrl" alt="">
    </a>
    <ul v-if="!flag">
        <li></li>
    </ul>
</div>
</template>

<script>

export default {
components: {},
data() {
    return {
        flag:true,
        imgUrl:require('../../../assets/minePic/address.png'),
        addressInfo:[]
    };
},
computed: {},
watch: {},
methods: {
    getData(){
        //请求数据
    this.$axios.post('')
    .then(res=>{
        this.addressInfo=addressInfo
    })
    .catch(err=>{

    })
    }
},
beforeRouteEnter(to,from,next){
    next(vm=>vm.getData())
},
created(){
    
}
}
</script>
<style  scoped>
.address-content{
    margin-top: .08rem;
    flex: 1;
    background: #fff;
    text-align: center;
    padding:3rem 0;
}
.address-content img{
    width: 3rem;
    margin: auto;
}
</style>