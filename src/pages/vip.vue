<template>
    <div class="mt-vip"  >
        <!-- <h2>mt-vip</h2> -->
        <VipHeader :isScrollTop="isScrollTop"/>
        <VieContent/>
        <VipContentred/>
        <VipContentshop/>  
    </div>
</template>

<script>
import VipHeader from '../components/vip/vipHeader'
import VieContent from '../components/vip/vipContent/'
import VipContentred from '../components/vip/vipContentred/'
import VipContentshop from '../components/vip/vipContentshop'

export default {
    name:"MtVip",
    data() {
        return {
            scrollTop:'',
            isScrollTop:false
            // isbg:true
        }
    },
    components:{
        VipHeader,
        VieContent,
        VipContentred,
        VipContentshop
    },
    methods: {
        handleScroll(){
            this.scrollTop = document.documentElement.scrollTop
            // console.log(this.scrollTop)
            if(this.scrollTop>70){
                this.isScrollTop = true
            }else{
                 this.isScrollTop = false
            }
        }
    },
    mounted() {
        window.addEventListener("scroll",this.handleScroll)
            // console.log(document.documentElement.scrollTop)
    },
}
</script>

<style scoped>
.mt-vip{
    margin-bottom: 1rem;
}
</style>