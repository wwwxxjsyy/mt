<template>
    <div class="orderstate">
        <div class="state-head">
            <p @click="back" class="state-head-l"></p>
            <p class="state-head-r"></p>
        </div>
        <OrderStateAchieve v-if="isfulfill"/>
        <OrderStateCancel v-if="!isfulfill"/>
        <a class="state-yaoqing" href="#">
            <img src="../../../static/img/order/yaoqing.png" alt="">
        </a>
        <div class="state-shopdetail">
            <div class="shopdetail-name">
                <p>{{similaritynow.shopname}}</p>
                <i></i>
            </div>
            <div class="shopdetail-shops">
                <!-- 商品 -->
                <ul>
                    <li v-for="(itme,index) in similaritynow.commodity">
                        <div class="shopdetails">
                            <img :src='itme.commoditypicture' alt="">
                            <div class="shopdetails-count">
                                <p class="shopname"><span>折</span>{{itme.commodityname}}</p>
                                <p class="shopcount">×<span>{{itme.commoditycount}}</span></p>
                            </div>
                        </div>
                        <div class="shopprice">
                            <p class="shopprice-oprice">￥<span>40.9</span></p>
                            <p class="shopprice-pprice">￥<span>21.8</span></p>
                        </div>
                    </li>
                </ul>
                <!-- 额外费用 -->
                <div class="other-price">
                    <div class="otherprice">
                        <div class="otherprice-every">
                            <p class="otherprice-every-name">包装费</p>
                            <div class="otherprice-num">
                                <p class="shopprice-pprice"><span>￥3.5</span></p>
                            </div>
                            
                        </div>
                        <div class="otherprice-every">
                            <p class="otherprice-every-name">配送费</p>
                            <div class="otherprice-num">
                                <p class="shopprice-oprice">{{similaritynow.postprice}}</p>
                                <p class="shopprice-pprice">{{similaritynow.postprice}}</p>
                            </div>
                        </div>
                        <div class="otherprice-every">
                            <p class="otherprice-every-name">准时宝（商家赠送）</p>
                            <div class="otherprice-num">
                                <p class="shopprice-pprice">￥<span>0</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 优惠 -->
                <div class="reduced-price">
                    <div class="reducedprice">
                        <div class="discounts">
                            <p class="discounts-name"><span class="name-jin">津</span>津贴优惠</p>
                            <p class="discounts-price">-￥<span>4</span></p>
                        </div>
                        <div class="discounts">
                            <p class="discounts-name"><span class="name-man">满</span>满减优惠</p>
                            <p class="discounts-price">-￥<span>17</span></p>
                        </div>
                    </div>
                </div>
                <!-- 总计 -->
                <div class="aggregate">
                    <p class="aggregate-p">
                        <span>已优惠</span>
                        <span class="aggregate-yh">￥24</span>
                    </p>
                    <p class="aggregate-p">
                        <span>合计</span>
                        <span class="aggregate-hj">￥14.3</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 完成
import OrderStateAchieve from "./OrderStateAchieve"
// 取消
import OrderStateCancel from "./OrderStateCancel"
export default {
    name:"orderstate",
    components:{
        OrderStateAchieve,
        OrderStateCancel
    },
    data(){
        return{
            allorder:[],
            shopid:"",
            isfulfill:Boolean,
            similaritynow:{}
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            vm.allorder=to.params.allorder
            vm.shopid=to.params.shopid
            vm.isfulfill=to.params.isfulfill
            for(var i in vm.allorder){
                if(vm.shopid==vm.allorder[i].shopid){
                    vm.similaritynow=vm.allorder[i]
                }
            }
            console.log(vm.similaritynow)
        })
    },
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>

<style>
.orderstate{
    width:100%;
    height:100%;
    position:relative;
    background:#f7f5f6;
}
.state-head{
    position:fixed;
    top:0;
    width:100%;
    height:0.9rem;
    background:#f7f5f6;
    display:flex;
    justify-content:space-between;
}
.state-head-l{
    width:0.6rem;
    height:0.6rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-2.9rem 0rem;
    margin-top:0.15rem;
    margin-left:0.3rem;
}
.state-head-r{
    width:0.6rem;
    height:0.6rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-0.69rem -1rem;
    margin-top:0.15rem;
    margin-right:0.3rem;
}

.state-yaoqing{
    display:block;
    width:93%;
    height:2rem;
    margin:0 auto;
    border-radius:0.04rem;
    margin-top:0.15rem;
}
.state-yaoqing img{
    display:block;
    width:100%;
    height:100%;
}
.state-shopdetail{
    width:93%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    border-radius:0.06rem;
    margin:.15rem auto 0.15rem;
    background:white;
}
.shopdetail-name{
    width:100%;
    height:0.9rem;
    display:flex;
    justify-content:flex-start;
}
.shopdetail-name p{
    font-size:0.28rem;
    color:#2f2f2f;
    line-height:0.9rem;
    white-space:nowrap;
    max-width:70%;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-left:0.3rem;
}
.shopdetail-name i{
    width:0.22rem;
    height:0.28rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-0.46rem 0rem;
    margin-top:0.31rem;
    margin-left:0.3rem;
}
.shopdetail-shops{
    width:100%;
}
.shopdetail-shops ul{
    width:93%;
    padding-top:0.32rem;
    padding-bottom:0.32rem;
    border-top:0.01rem solid #efefef;
    border-bottom:0.01rem solid #efefef;
    margin:0 auto;
}
.shopdetail-shops ul li{
    width:100%;
    height:2.16rem;
    display:flex;
    justify-content:space-between;
}
.shopdetails{
    width:75%;
    height:100%;
    display:flex;
    justify-content:flex-start;
}
.shopdetails img{
    width:1.5rem;
    height:1.5rem;
    background:crimson;
    margin-top:0.33rem;
    margin-right:0.32rem;
    border-radius:0.04rem;
}
.shopdetails-count{
    flex:1;
    height:1.5rem;
    margin-top:0.33rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
.shopname{
    font-size:0.26rem;
    color:#323232;
    width:3rem;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    display:flex;
}
.shopname span{
    width:0.3rem;
    height:0.3rem;
    text-align:center;
    line-height:0.3rem;
    font-size:0.24rem;
    margin-top:0.03rem;
    margin-right:0.06rem;
    background:#b35bd2;
    color:white;
}
.shopcount{
    font-size:0.26rem;
    color:#979797;
}
.shopprice{
    display:flex;
    justify-content:flex-end;
}
.shopprice-oprice{
    font-size:0.2rem;
    color:#b1b1b1;
    margin-top:0.46rem;
    margin-right:0.13rem;
    text-decoration:line-through;
}
.shopprice-pprice{
    font-size:0.24rem;
    color:#303030;
    margin-top:0.44rem;
}
.other-price{
    width:93%;
    border-bottom:0.01rem solid #efefef;
    margin:0 auto;
}
.otherprice{
    width:100%;
    padding-top:0.33rem;
    padding-bottom:0.33rem;
}
.otherprice-every{
    width:100%;
    height:1.06rem;
    display:flex;
    justify-content:space-between;
}
.otherprice-every-name{
    font-size:0.26rem;
    color:#323232;
    line-height:1.06rem;
}
.otherprice-num{
    display:flex;
    justify-content:flex-end;
}
.reduced-price{
    width:93%;
    border-bottom:0.01rem solid #efefef;
    margin:0 auto;
}
.reducedprice{
    width:100%;
    padding-top:0.28rem;
    padding-bottom:0.28rem;
}
.discounts{
    width:100%;
    height:1.06rem;
    display:flex;
    justify-content:space-between;
}
.discounts-name{
    font-size:0.26rem;
    color:#323232;
    line-height:1.06rem;
}
.discounts-name span{
    width:0.3rem;
    height:0.3rem;
    text-align:center;
    line-height:0.3rem;
    font-size:0.24rem;
    margin-top:0.03rem;
    margin-right:0.06rem;
    color:white;
    padding:0.04rem;
}
.name-jin{
    background:#fa8d30;
}
.name-man{
    background:#ff4b43;
}
.discounts-price{
    font-size:0.26rem;
    color:#fd4b47;
    line-height:1.06rem;
}
.aggregate{
    width:93%;
    height:1.64rem;
    border-bottom:0.01rem solid #efefef;
    margin:0 auto;
    display:flex;
    justify-content:flex-end;
}
.aggregate-p{
    font-size:0.26rem;
    color:#313131;
    display:flex;
    line-height:1.64rem;
}
.aggregate-p:first-child{
    margin-right:0.35rem;
}
.aggregate-yh{
    font-size:0.25rem;
    color:#ed4f5d;
}
.aggregate-hj{
    font-size:0.35rem;
    color:#ed4f5d;
}
</style>
