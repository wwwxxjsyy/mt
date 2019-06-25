<template>
    <div class="mt-vip">
        <!-- <h2>mt-vip</h2> -->
        <VipHeader/>
        <VieContent/>
        <VipContent1/>
        <VipContent2/>  
    </div>
</template>

<script>
import VipHeader from '../components/vip/vipHeader'
import VieContent from '../components/vip/vipContent/'
import VipContent1 from '../components/vip/vipContent-1/'
import VipContent2 from '../components/vip/vipContent-2'

export default {
    name:"MtVip",
    components:{
        VipHeader,
        VieContent,
        VipContent1,
        VipContent2
    }
}
</script>

<style scoped>
.mt-vip{
    margin-bottom: 4rem;
}
</style>