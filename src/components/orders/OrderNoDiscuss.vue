<template>
                                <!-- 待评价（总） -->
    <div class="ordernodiscu">
        <OrderHead/>
        <OrderNotDiscuss/>
        <OrderNotDiscusss/>
    </div>
</template>

<script>
// 订单头部
import OrderHead from "./OrderHead"
// 待评价(有数据)
import OrderNotDiscuss from "./OrderNotDiscuss"
// 待评价（无数据）
import OrderNotDiscusss from "./OrderNotDiscusss"

export default {
    name:"ordernodiscuss",
    components:{
        OrderHead,
        OrderNotDiscuss,
        OrderDotDiscusss
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

