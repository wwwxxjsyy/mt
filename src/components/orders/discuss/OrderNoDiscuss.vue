<template>
                                <!-- 待评价（总） -->
    <div class="ordernodiscu">
        <OrderNotDiscuss v-if="hasdiscuss" :allorder="allorder" :discus="discus" :checknum="checknum" @order="one" @discuss="two"  @refund="three"/>
        <OrderNotDiscusss v-if="!hasdiscuss"/>
    </div>
</template>

<script>
// 订单头部
// 待评价(有数据)
import OrderNotDiscuss from "./OrderNotDiscuss"
// 待评价（无数据）
import OrderNotDiscusss from "./OrderNotDiscusss"

export default {
    name:"ordernodiscuss",
    props:["allorder","checknum"],
    data(){
        return{
            hasdiscuss:false,
            discussnum:0,
            discus:[]
        }
    },
    created(){
        this.Observer.$on("allorder",(val)=>{
            this.allorders=val;
        })
    },
    mounted(){
        for(var i in this.allorder){
            if(this.allorder[i].isfulfill==true){
                if(this.allorder[i].iscomment==false){
                    ++this.discussnum;
                    this.discus.push(this.allorder[i]);
                }
            }
        }
        if(this.discussnum<=0){
            this.hasdiscuss=false;
        }else{
            this.hasdiscuss=true;
        }
    },
    components:{
        OrderNotDiscuss,
        OrderNotDiscusss
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
.ordernodiscu{
    width:100%;
    height:100%;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    background:#f2f2f2;
}
</style>

