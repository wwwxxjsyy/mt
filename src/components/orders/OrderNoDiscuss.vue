<template>
                                <!-- 待评价（总） -->
    <div class="ordernodiscu">
        <OrderHead/>
        <OrderNotDiscuss/>
    </div>
</template>

<script>
// 订单头部
import OrderHead from "./OrderHead"
// 待评价
import OrderNotDiscuss from "./OrderNotDiscuss"

export default {
    name:"OrderNoDiscuss",
    components:{
        OrderHead,
        OrderNotDiscuss
    }
}
</script>

<style>
.ordernodiscu{
    width:100%;
    height:100%;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    overflow:hidden;
    background:#f2f2f2;
}
</style>

