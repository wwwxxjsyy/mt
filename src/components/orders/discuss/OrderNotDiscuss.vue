<template>
                        <!-- 待评价 -->
    <div class="ordernotdiscuss">
        <!-- menu -->
        <div class="notdiscussmenu">
            <a href="javascript:;" @click="one(checknum)">全部订单</a>
            <a href="javascript:;" @click="two(checknum)">待评价<span></span></a>
            <a href="javascript:;" @click="three(checknum)">退款</a>
        </div>
        <!-- 所有订单商品 -->
        <ul class="notdiscussdelite">
            <li v-for="(item,index) in discus">
                <!-- 单个订单商品详情 -->
                <div class="orderdelite-top">
                    <div class="orderdelite-top-shop">
                        <router-link  to=" " class="delite-shop">
                            <img :src='item.shoppicture' alt="">
                            <div class="delite-shopdelite">
                                <div class="shopdelite-name">
                                    <p>{{item.shopname}}</p>
                                    <p class="shopdelite-name-youjian"></p>
                                </div>
                                <div class="shopdelite-discount">
                                    <p v-for="(lab,index) in item.moneyoff">{{lab}}</p>
                                </div>
                            </div>    
                        </router-link> 
                        <a href="javascript:;" v-show="item.isfulfill" class="delitestate-my" @click="$router.push({name:'OrderOrderState',params:{allorder:allorder,shopid:item.shopid}})">订单已完成</a>
                    </div>
                </div>
                <!-- 单个订单商品价格 -->
                <div class="orderdelite-center">
                    <div class="delite-shopnames">
                        <p class="delite-shopname">
                            <span v-for="(commname,index) in item.commodity">{{commname.commodityname}}</span>
                        </p>
                        <p v-show="!allisonecommodity[index]" class="delite-shopcount">等<span>{{allcommoditylen[index]}}</span>件商品</p>
                    </div>
                    <p class="delite-shopprice">{{item.totalvalue}}</p>
                </div>
                <!-- 单个订单商品操作 -->
                <div class="orderdelite-bottom">
                    <a href="javascript:;" @click="$router.push({name:'OrderOrderSimilarity',params:{allorder:allorder,shopid:item.shopid,shopform:item.shopform}})">相似商家</a>
                    <router-link to="">再来一单</router-link>
                    <router-link to="" class="pj">评价</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"ordernotdiscuss",
    props:{
        allorder:Array,
        discus:Array,
        checknum:Number
    },
    data(){
        return{
            order:0,
            discuss:1,
            refund:2,
            allcommoditylen:[],
            allisonecommodity:[],
            isonecommodity:true,
            commoditycount:0
        }
    },
    mounted(){
        for(var i in this.discus){
            let allcommodity=this.discus[i].commodity;
            this.commoditycount=allcommodity.length;
            this.allcommoditylen.push(this.commoditycount);
        }
        for(var i in this.allcommoditylen){
            if(this.allcommoditylen[i]>1){
                this.isonecommodity=!this.isonecommodity;
                this.allisonecommodity.push(this.isonecommodity);
                this.isonecommodity=true;
            }else{
                this.allisonecommodity.push(this.isonecommodity);
            }
        }
    },
    methods:{
        one(checknum){
            checknum=this.order
            this.$emit("order",checknum)
        },
        two(checknum){
            checknum=this.discuss
            this.$emit("discuss",checknum)
        },
        three(checknum){
            checknum=this.refund
            this.$emit("refund",checknum)
        }
    }
}
</script>

<style>
.ordernotdiscuss{
    width:100%;
    height:100%;
    margin-bottom:2rem;
    overflow-y:auto;
}
/* menu */
.notdiscussmenu{
    height:0.9rem;
    line-height:0.6rem;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    background:white;
}
.notdiscussmenu a{
    font-size:0.26rem;
    color:#494949;
    position:relative;
}
.notdiscussmenu a:first-child{
    margin-left:10%;
}
.notdiscussmenu a:last-child{
    margin-right:10%;
}
.notdiscussmenu span{
    position:absolute;
    display:block;
    width:0.4rem;
    height:0.04rem;
    background:#fbd48f;
    border-radius:0.04rem;
    bottom:20%;
    left:25%;
}
/* 所有订单商品 */
.notdiscussdelite{
    width:100%;
}
/* 单个订单商品 */
.notdiscussdelite li{
    width:93%;
    height:3.9rem;
    margin:0.2rem auto 0;
    background:white;
    border-radius:0.06rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between
}
.notdiscussdelite li:last-child{
    margin-bottom:0.2rem;
}
/* 单个订单商品 */
.notdiscussdelite li{
    width:93%;
    height:3.9rem;
    margin:0.2rem auto 0;
    background:white;
    border-radius:0.06rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between
}
.myorderdelite li:last-child{
    margin-bottom:0.2rem;
}
/* 单个订单商品详情 */
.orderdelite-top{
    width:100%;
    height:1.4rem;
}
.orderdelite-top-shop{
    width:100%;
    height:100%;
    line-height:1.4rem;
    display:flex;
    justify-content:space-between;
}
.delite-shop{
    width:59%;
    height:100%;
    margin-left:0.28rem;
    margin-right:0.2rem;
    overflow: hidden;
    display:flex;
    justify-content:space-between;
}
.delite-shop img{
    width:0.72rem;
    height:0.72rem;
    background:chartreuse;
    margin-top:0.36rem;
    border-radius:50%;
}
.delite-shopdelite{
    width:78%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
.shopdelite-name{
    width:100%;
    height:0.4rem;
    line-height:0.4rem;
    display:flex;
    justify-content:flex-start;
    font-size:0.24rem;
    color:#353334;
    margin-bottom:0.06rem;
}
.shopdelite-name p:first-child{
    width:80%;
    overflow:hidden;
    white-space:nowrap; 
    text-overflow:ellipsis;
    margin-right:0.2rem;
}
.shopdelite-name-youjian{
    width:0.22rem;
    height:0.28rem;
    background:url("../../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-0.46rem 0rem;
    margin-top:0.06rem;
}
.shopdelite-discount{
    width:100%;
    height:0.4rem;
    display:flex;
    justify-content:flex-start;
    flex-wrap:nowrap;
    overflow:hidden;
}
.shopdelite-discount p{
    /* display:flex;
    float:left; */
    font-size:0.2rem;
    color:#df9d9f;
    white-space: nowrap;
    padding:0.06rem;
    line-height:0.28rem;
    border:0.01rem solid #df9d9f;
    margin-right:0.1rem;
    border-radius:0.02rem;
}
.delitestate-my{
    font-size:0.24rem;
    color:#242424;
    margin-right:0.28rem;
    white-space:nowrap;
}
/* 单个订单商品价格 */
.orderdelite-center{
    width:100%;
    flex:1;
    line-height:100%;
    display:flex;
    justify-content:space-between;
}
.delite-shopnames{
    display:flex;
    justify-content:flex-start;
}
.delite-shopname{
    line-height:1.2rem;
    font-size:0.24rem;
    color:#404040;
    margin-left:1.16rem;
    max-width:2.9rem;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.delite-shopname span{
    margin-right:0.1rem;
}
.delite-shopcount{
    line-height:1.2rem;
    font-size:0.24rem;
    color:#404040;
    margin-left:0.28rem;
}
.delite-shopprice{
    line-height:1.2rem;
    font-size:0.24rem;
    color:#313131;
    margin-right:0.28rem;
}
/* 单个订单商品操作 */
.orderdelite-bottom{
    width:100%;
    height:1.32rem;
    line-height:1.32rem;
    display:flex;
    justify-content:flex-end;
}
.orderdelite-bottom a{
    padding-left:0.3rem;
    padding-right:0.3rem;
    height:0.7rem;
    line-height:0.7rem;
    text-align:center;
    border:0.01rem solid #e5e5e5;
    font-size:0.24rem;
    color:#282828;
    margin-left:0.22rem;
    margin-top:0.32rem;
    white-space:nowrap;
}
.orderdelite-bottom a:last-child{
    margin-right:0.22rem;
}
.pj{
    background:#ffbf33;
}
</style>


