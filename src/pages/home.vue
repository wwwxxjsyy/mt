<template>
    <div class="mt-home">
        <!-- <mt-home-address/>
        <mt-home-search/>
        <mt-home-recommend/>
        <mt-home-banner/>
        <mt-home-class/> -->
        <homeShop></homeShop>
    </div>
</template>

<script>
import homeShop from "../components/home/homeshop/homeShop"

export default {
     name:"MtHome",
     components:{
        // "mt-home-address":Address,
        // "mt-home-search":Search,
        // "mt-home-recommend":Recommend,
        // "mt-home-banner":Banner,
        // "mt-home-class":Class,
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