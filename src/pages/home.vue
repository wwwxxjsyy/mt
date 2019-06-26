<template>
    <div class="mt-home">
        <homeShop></homeShop>
    </div>
</template>

<script>
import homeShop from "../components/home/homeshop/homeShop"

export default {
    name:"MtHome",
    components:{
         homeShop
     }
}
</script>

<style scoped>
    .mt-home{
        width:100%;
        height: 100%;
    }
</style>