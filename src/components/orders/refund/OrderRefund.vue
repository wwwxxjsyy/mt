<template>
                                    <!-- 退款(总)-->
    <div class="orderrefund">
           <OrderReimburse v-if="hasrefund" :allorder="allorder" :refunds="refunds"  :checknum="checknum" @order="one" @discuss="two"  @refund="three"/>
           <OrderNotRefund v-if="!hasrefund"/>                        
    </div>
</template>

<script>
// 退款(有数据)
import OrderReimburse from "./OrderReimburse"
// 退款（无数据）
import OrderNotRefund from "./OrderNotRefund"

export default {
    name:"orderrefund",
    props:["allorder","checknum"],
    data(){
        return{
            hasrefund:false,
            refundnum:0,
            refunds:[]
        }
    },
    created(){
        this.Observer.$on("allorders",(val)=>{
            this.allorders=val;
        })
    },
    mounted(){
        for(var i in this.allorder){
            if(this.allorder[i].isfulfill==false){
                ++this.refundnum;
                this.refunds.push(this.allorder[i]);
            }
        }
        if(this.refundnum<=0){
            this.hasrefund=false;
        }else{
            this.hasrefund=true;
        }
    },
    components:{
        OrderReimburse,
        OrderNotRefund
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
.orderrefund{
    width:100%;
    height:100%;
    background:#f2f2f2;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
</style>
