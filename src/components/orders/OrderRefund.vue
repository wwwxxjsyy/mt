<template>
                                    <!-- 退款(总)-->
    <div>
           <OrderHead/>
           <OrderReimburse/>
           <OrderNotRefund/>                        
    </div>
</template>

<script>
import OrderHead from "./orderhead"
// 退款(有数据)
import OrderReimburse from "./orderreimburse"
// 退款（无数据）
import OrderNotRefund from "./ordernotrefund"

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

</style>
