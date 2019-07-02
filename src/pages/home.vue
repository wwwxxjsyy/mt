<template>
    <div class="mt-home">
        <mt-home-address/>
        <mt-home-search/>
        <mt-home-recommend :homeData="data"/>
        <mt-home-banner :homeData="data"/>
        <mt-home-class/>
        <homeShop></homeShop>
        <mt-home-class :homeData="data" :classpic='cartinfo'/>
        <mt-home-optimization :homeData="data"/>
        <mt-home-discount :homeData="data"/>
        <mt-home-goodshop :homeData="data"/>
        <mt-home-toshop :homeData="data"/>
        <mt-home-moreshop :homeData="data"/>
        <!-- <homeShop></homeShop> -->
    </div>
</template>

<script>
import Address from '../components/home/homeIndex/mt-home-adress'
import Search from '../components/home/homeIndex/mt-home-search'
import Recommend from '../components/home/homeIndex/mt-home-recommend'
import Banner from '../components/home/homeIndex/mt-home-banner'
import Class from '../components/home/homeIndex/mt-home-class'
import Optimization from '../components/home/homeIndex/mt-home-optimization'
import Ddiscount from '../components/home/homeIndex/mt-home-discount'
import Goodshop from '../components/home/homeIndex/mt-home-goodshop'
import Toshop from '../components/home/homeIndex/mt-home-toshop'
import Moreshop from '../components/home/homeIndex/mt-home-moreshop'
export default {
     name:"MtHome",
     data(){
         return{
             cartinfo:{}
         }
     },
     components:{
        "mt-home-address":Address,
        "mt-home-search":Search,
        "mt-home-recommend":Recommend,
        "mt-home-banner":Banner,
        "mt-home-class":Class,
        "mt-home-optimization":Optimization,
        "mt-home-discount":Ddiscount,
        "mt-home-goodshop":Goodshop,
        "mt-home-toshop":Toshop,
        "mt-home-moreshop":Moreshop,
        //  homeShop
     },
     data(){
         return {
             data:{}
         }
     },
     created(){
         this.http.post('/api/home/').then(res=>{
            console.log(res)
            this.data=res
            })
    }
     
     
    
}
</script>

<style scoped>
.mt-home{
    padding: .2rem;
    width:100%;
    height: 100%;
    /* -webkit-overflow-scrolling: touch; */
}
</style>
