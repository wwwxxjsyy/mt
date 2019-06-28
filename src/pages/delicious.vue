<template>
<div class="delicious">
    <delicous-search/>
    <div class="warp">
        <delicious-recommend/>
        <mt-home-moreshop/>
    </div>
</div>
</template>

<script>
import Delicous from '../components/home/homedelicious/delicous-search'
import Recommend from '../components/home/homedelicious/delicious-recommend'
import Moreshop from '../components/home/homeIndex/mt-home-moreshop'

export default {
    name:"Goodfoods",
    components:{
        "delicous-search":Delicous,
        "delicious-recommend":Recommend,
        "mt-home-moreshop":Moreshop
    }
}
</script>

<style>
.warp {
  width: 100%;
  padding: 0 0.2rem;
}
</style>
