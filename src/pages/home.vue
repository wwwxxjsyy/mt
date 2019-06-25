<template>
    <div class="mt-home">
        <mt-home-address/>
        <mt-home-search/>
        <mt-home-recommend/>
        <mt-home-banner/>
        <mt-home-class/>
        <homeShop></homeShop>
    </div>
</template>

<script>
import Address from '../router/home/mt-home-adress'
import Search from '../router/home/mt-home-search'
import Recommend from '../router/home/mt-home-recommend'
import Banner from '../router/home/mt-home-banner'
import Class from '../router/home/mt-home-class'
import homeShop from "../components/home/homeShop"
export default {
     name:"MtHome",
     components:{
        "mt-home-address":Address,
        "mt-home-search":Search,
        "mt-home-recommend":Recommend,
        "mt-home-banner":Banner,
        "mt-home-class":Class,
         homeShop

     }
}
</script>

<style scoped>
.mt-home{
    padding: .2rem;
        width:100%;
        height: 100%;
}
</style>