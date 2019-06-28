<template>
    <div class="mt-vip"  >
        <!-- <h2>mt-vip</h2> -->
        <VipHeader  />
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
    components:{
        VipHeader,
        VieContent,
        VipContentred,
        VipContentshop
    },
    data() {
        return {
            flag:false
    }
      
    },
    methods: {
        
    }
    // created() {
    //     this.$emit('scrollHeader',(flag)=>{
    //         this.flag=flag
    //         console.log(flag);
    //     })
    // },
}
</script>

<style scoped>
.mt-vip{
    margin-bottom: 1rem;
}
</style>