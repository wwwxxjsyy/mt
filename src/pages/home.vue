<template>
    <div class="mt-home">
        <!-- <mt-home-address/>
        <mt-home-search/>
        <mt-home-recommend/>
        <mt-home-banner/>
<<<<<<< HEAD
        <mt-home-class/> -->
        <homeShop></homeShop>
=======
        <mt-home-class/>
        <mt-home-optimization/>
        <mt-home-discount/>
        <mt-home-goodshop/>
        <mt-home-toshop/>
        <mt-home-moreshop/>
        <!-- <homeShop></homeShop> -->
>>>>>>> king
    </div>
</template>

<script>
<<<<<<< HEAD
<<<<<<< HEAD
import homeShop from "../components/home/homeshop/homeShop"

=======
// import Address from '../router/home/mt-home-adress'
// import Search from '../router/home/mt-home-search'
// import Recommend from '../router/home/mt-home-recommend'
// import Banner from '../router/home/mt-home-banner'
// import Class from '../router/home/mt-home-class'
import homeShop from "../components/home/homeShop"
>>>>>>> 0b083648dc06fde23709d77038c142e874bbede4
export default {
     name:"MtHome",
     components:{
        // "mt-home-address":Address,
        // "mt-home-search":Search,
        // "mt-home-recommend":Recommend,
        // "mt-home-banner":Banner,
        // "mt-home-class":Class,
         homeShop
=======
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
// import homeShop from "../components/home/homeIndex/homeShop"
export default {
     name:"MtHome",
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
        "mt-home-moreshop":Moreshop
        //  homeShop
>>>>>>> king

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