<template>
    <div class="orders">
        <OrderMyOrders :allorder="allorder" :checknum="checknum" @order="one" @discuss="two"  @refund="three" v-show="menucheck[0].ckeck"/>
        <OrderNoDiscuss :allorder="allorder" :checknum="checknum" @order="one" @discuss="two"  @refund="three" v-show="menucheck[1].ckeck"/>
        <OrderRefund :allorder="allorder" :checknum="checknum" @order="one" @discuss="two"  @refund="three" v-show="menucheck[2].ckeck"/>
    </div>
</template>

<script>
// 我的订单
import OrderMyOrders from "./allorder/OrderMyOrders"
// 未评价
import OrderNoDiscuss from "./discuss/OrderNoDiscuss"
// 退款
import OrderRefund from "./refund/OrderRefund"

export default {
    name:"orders",
    props:["allorder"],
    components:{
        OrderMyOrders,
        OrderNoDiscuss,
        OrderRefund
    },
    data(){
        return{
            checknum:0,
            menucheck:[
                {
                    ckeck:true
                },
                {
                    ckeck:false,
                },
                {
                    ckeck:false
                }
            ]
        }
    },
    methods:{
        one(checknum){
            for(var i in this.menucheck){
                this.menucheck[i].ckeck=false
            }
            this.menucheck[checknum].ckeck=true
        },
        two(checknum){
            for(var i in this.menucheck){
                this.menucheck[i].ckeck=false
            }
            this.menucheck[checknum].ckeck=true
        },
        three(checknum){
            for(var i in this.menucheck){
                this.menucheck[i].ckeck=false
            }
            this.menucheck[checknum].ckeck=true
        }
    }
}
</script>

<style>
.orders{ 
    width:100%;
    height:100%;
    margin-top:0.9rem;
    margin-bottom:1rem;
}
</style>
