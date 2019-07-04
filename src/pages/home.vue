<template>
    <div class="mt-home">
        <mt-home-address/>
        <mt-home-search/>
        <mt-home-recommend />
        <mt-home-banner :wheel="data.wheel"/>
        <!-- <mt-home-class/> -->
        <!-- <homeShop></homeShop> -->
        <mt-home-class :main_type_img="data.main_type_img" :main_small_img="data.main_small_img"/>
        <mt-home-optimization :foodlist= "data.foodlist" :goodfood="data.goodfood" />
        <mt-home-discount />
        <mt-home-goodshop />
        <mt-home-toshop />
        <mt-home-moreshop :nerbylists = "data.nerbylists" />
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
            //  position:"",
             lat:"",
             lng:"",
             data:"",
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
     
     computed:{
         position(){
            return this.$store.getters.location.position 
        }
     },
    watch:{
        position(newName, oldName){
            // console.log(newName.lat)
            // console.log(newName.lng)
            this.lat=newName.lat,
            this.lng=newName.lng,
            // console.log(this.position)
             this.$axios.post('/api/home/',{lat:this.lat,lon:this.lng}).then(res=>{
                 console.log(this.position)
                console.log(res.data.data)
                this.data=res.data.data
                })

        }
    },
    methods:{
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
