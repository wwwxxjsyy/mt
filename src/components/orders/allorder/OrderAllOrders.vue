<template>
                            <!-- 我的订单（总） -->
    <div class="orderallroders">
        <OrderOftenBuy :allorder="allorder"/>
        <OrderMyOrder :allorder="allorder" :checknum="checknum" @order="one" @discuss="two"  @refund="three"/>
    </div>
</template>

<script>
// 最近常买
import OrderOftenBuy from "./OrderOftenBuy"
// 我的订单
import OrderMyOrder from "./OrderMyOrder"

export default {
    name:"orderallorders",
    props:["allorder","checknum"],
    components:{
        OrderOftenBuy,
        OrderMyOrder
    },
    data(){
        return{
            
        }
    },
    methods:{
        one(checknum){
            this.$emit("order",checknum)
        },
        two(checknum){
            this.$emit("discuss",checknum)
        },
        three(checknum){
            this.$emit("refund",checknum)
        }
    }
}
</script>

<style>
.orderallroders{
    width:100%;
    height:100%;
    overflow-y:auto;
}
.orderallroders::-webkit-scrollbar{
    display:none;
}
</style>

