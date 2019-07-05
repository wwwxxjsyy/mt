<template>
    <div class="ordermyorders">
        <OrderAllOrders :allorder="allorder"  :checknum="checknum" @order="one" @discuss="two"  @refund="three" v-if="hasmyorder"/>
        <OrderNotOrders v-else/>
    </div>
</template>

<script>
// 有订单
import OrderAllOrders from "./OrderAllOrders"
// 无订单
import OrderNotOrders from "./OrderNotOrders"
export default {
    name:"ordermyorders",
    props:["allorder","checknum"],
    components:{
        OrderAllOrders,
        OrderNotOrders
    },
    data(){
        return{
            hasmyorder:false,
        }
    },
    mounted(){
        let myorderlen=this.allorder.length;
        if(myorderlen<=0){
            this.hasmyorder=false;
        }else{
            this.hasmyorder=true;
        };
        this.Observer.$emit("allorder",this.allorders);
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
.ordermyorders{
    width:100%;
    height:100%;
}
</style>
