<template>
                            <!-- 我的订单（总） -->
    <div class="orderallroders">
        <OrderOftenBuy/>
        <OrderMyOrder/>
    </div>
</template>

<script>
// 最近常买
import OrderOftenBuy from "./OrderOftenBuy"
// 我的订单
import OrderMyOrder from "./OrderMyOrder"

export default {
    name:"orderallorders",
    components:{
        OrderOftenBuy,
        OrderMyOrder
    }
}
</script>

<style>
.orderallroders{
    width:100%;
    height:100%;
    margin-top:0.9rem;
    margin-bottom:1rem;
    overflow-y:auto;
}
.orderallroders::-webkit-scrollbar{
    display:none;
}
</style>

