<template>
    <div class="mt-order">
        <!-- <h2>mt-order</h2> -->
        <OrderHead/>
        <OrderAllOrders/>
    </div>
</template>

<script>
// 订单头部
import OrderHead from "../components/orders/OrderHead"
// 全部订单
import OrderAllOrders from "../components/orders/OrderAllOrders"

export default {
    name:"MtOrder",
    components:{
        OrderHead,
        OrderAllOrders
    }
}
</script>

<style scoped>
.mt-order{
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