<template>
    <div class="mt-home">
        <mt-home-address/>
        <mt-home-search/>
        <mt-home-recommend/>
        <mt-home-banner/>
        <mt-home-class :classpic='cartinfo'/>
        <mt-home-optimization/>
        <mt-home-discount/>
        <mt-home-goodshop/>
        <mt-home-toshop/>
        <mt-home-moreshop/>
        <!-- <homeShop></homeShop> -->
    </div>
</template>

<script>
import homeShop from "../components/home/homeshop/homeShop"
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
       mounted(){
    this.http.post('/api/home/').then(res=>{
            this.data = res.data
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