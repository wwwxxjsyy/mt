<template>
                                    <!-- 退款(总)-->
    <div class="orderrefund">
           <OrderHead/>
           <OrderReimburse/>
           <OrderNotRefund v-show="false"/>                        
    </div>
</template>

<script>
import OrderHead from "./OrderHead"
// 退款(有数据)
import OrderReimburse from "./OrderReimburse"
// 退款（无数据）
import OrderNotRefund from "./OrderNotRefund"

export default {
    name:"orderrefund",
    components:{
        OrderHead,
        OrderReimburse,
        OrderNotRefund
    }
}
</script>

<style>
.orderrefund{
    width:100%;
    height:100%;
    background:#f2f2f2;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
</style>
