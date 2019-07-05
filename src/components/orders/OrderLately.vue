<template>
    <div class="orderlately">
        <div class="lately-head">
            <span @click="back"></span>
            <h3>最近常买</h3>
        </div>
        <div class="lately-body">
            <div class="lately-shops">
                <router-link to="" v-for="(item,index) in allorder" :key="index"> 
                    <img :src='item.shoppicture' alt="">
                    <div class="shops-detail">
                        <p class="shops-detail-name">{{item.shopname}}</p>
                        <div class="shops-detail-sell">
                            <div class="sell-px">
                                <p class="sell-px-pj"><i></i><span>{{item.shopgrade}}</span></p>
                                <p class="sell-px-xl">月售<span>{{item.shoponsale}}</span></p>
                            </div>
                            <div class="sell-sj">
                                <p>{{item.duration}}</p>
                                <p>{{item.distance}}</p>
                            </div>
                        </div>
                        <div class="shops-delivery">
                            <div class="delivery-price">
                                <p>起送<span class="defalut">{{item.sendingprice}}</span></p>
                                <p>配送<span class="defalut">{{item.postprice}}</span></p>
                                <p v-show="!item.isfreepost">高峰配送<span class="price-special">{{item.postprice}}</span><span class="price-defalut">{{item.highpostance}}</span></p>
                                <p v-show="item.isfreepost">免费配送</p>
                                <p>人均<span class="defalut">{{item.capite}}</span></p>
                            </div>
                            <div class="delivery-outer">
                                <p v-show="item.ispunctuality" class="delivery-zhb">准时宝</p>
                                <i v-show="item.ismeituancourier"></i>
                            </div>
                        </div>
                        <div v-show="item.ishighshop" class="shops-gaofen">
                            <p class="shops-gaofen-pj">{{item.commoditycomment}}</p>
                            <p>点评高分店铺</p>
                        </div>
                        <div v-show="!item.ishighshop" class="shops-class">
                            <i></i>
                            <p>{{item.shopform}}</p>
                        </div>
                        <div class="shops-label">
                            <div class="moneyoff">
                                <p v-for="(tabl,index) in item.moneyoff">{{tabl}}</p>
                            </div>
                            <p v-show="item.isnothreshold" class="label-wmk">{{item.nothreshold}}</p>
                            <p v-show="item.isfastrefund" class="label-tk">极速退款</p>
                            <p v-show="item.isinvite" class="label-zq">支持自取</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="similarity-last">
                <span></span>
                <p>已经到底了</p>
                <span></span>
            </div>
        </div>
    </div>   
</template>

<script>

export default {
    name:"ordersearchoften",
    data(){
        return{
            allorder:[]
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            vm.allorder=to.params.allorder
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
.orderlately{
    width:100%;
    height:100%;
    position:relative;
}
.lately-head{
    position:fixed;
    top:0;
    width:100%;
    height:1.1rem;
    border-bottom:0.03rem solid #cacaca;
    display:flex;
    justify-content:flex-start;
    background:white;
}
.lately-head span{
    width:0.4rem;
    height:0.6rem;
    background:url("../../../static/img/order/png.png");
    background-size:3.77rem 1.97rem;
    background-position:-0.78rem -0.2rem;
    margin-top:0.25rem;
    margin-left:0.4rem;
    margin-right:0.3rem;
}
.lately-head h3{
    font-size:0.34rem;
    color:#232323;
    line-height:1.1rem;
}
.lately-body{
    width:100%;
    flex:1;
    overflow-y:auto;
    margin-top:1.2rem;
}
.lately-shops{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.lately-shops a{
    width:100%;
    height:2.56rem;
    display:flex;
    justify-content:space-between;
}
.lately-shops a:last-child{
    margin-bottom:0.6rem;
}
.lately-shops a img{
    width:1.72rem;
    height:1.28rem;
    background:cornflowerblue;
    margin-top:0.3rem;
    margin-left:0.34rem;
}
.shops-detail{
    flex:1;
    height:100%;
    margin-right:0.28rem;
    margin-left:0.24rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
.shops-detail-name{
    font-size:0.3rem;
    color:#353535;
    width:84%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.shops-detail-sell{
    width:100%;
    height:0.36rem;
    display:flex;
    justify-content:space-between;
    margin-top:0.06rem;
}
.sell-px{
    height:100%;
    line-height:0.36rem;
    display:flex;
    justify-content:space-between;
}
.sell-px p{
    font-size:0.24rem;
    display:flex;
}
.sell-px p i{
    width:0.22rem;
    height:0.24rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-7.9rem -0.19rem;
    margin-top:0.06rem;
    margin-right:0.02rem;
}
.sell-px-pj{
    color:#fab614;
    margin-right:0.14rem;
}
.sell-px-xl{
    color:#909090;
}
.sell-sj{
    height:100%;
    line-height:0.36rem;
    display:flex;
    justify-content:space-between;
}
.sell-sj p{
    font-size:0.24rem;
    color:#909090;
}
.sell-sj p:first-child{
    margin-right:0.14rem;
}
.shops-delivery{
    width:100%;
    height:0.36rem;
    display:flex;
    justify-content:space-between;
    margin-top:0.06rem;
}
.delivery-price{
    float:left;
    flex:1;
    max-width:2.8rem;
    overflow:hidden;
    text-overflow:ellipsis;
    height:0.36rem;
    margin-right:0.2rem;
    display:flex;
    justify-content:flex-start;
}
.delivery-price p{
    font-size:0.22rem;
    color:#8a8a8a;
    margin-right:0.06rem;
    white-space: nowrap;
};
.price-defalut{
    margin-left:0.08rem;
    color:#bebebe;
    text-decoration:line-through;
}
.price-special{
    color:#bebebe;
    text-decoration:line-through;
}
.delivery-outer{
    height:100%;
    display:flex;
    justify-content:flex-end;
}
.delivery-zhb{
    font-size:0.22rem;
    color:#f4ac46;
    padding:0.04rem;
    border:0.01rem solid #e7d09a;
    margin-right:0.03rem;
    line-height:0.3rem;
    white-space: nowrap;
}
.delivery-outer i{
    width:1.1rem;
    height:0.36rem;
    background:url("../../../static/img/order/png.png");
    background-size:9.77rem 5.97rem;
    background-position:-3.3rem -2rem;
    margin-right:0.02rem;
}
.shops-gaofen{
    width:100%;
    height:0.36rem;
    display:flex;
    justify-content:flex-start;
    margin-top:0.06rem;
}
.shops-gaofen p{
    font-size:0.2rem;
    line-height:0.34rem;
    color:#ff7232;
    border:0.01rem solid #faeee1;
}
.shops-gaofen-pj{
    margin-right:0.1rem;
}
.shops-class{
    width:100%;
    height:0.36rem;
    display:flex;
    justify-content:flex-start;
    margin-top:0.06rem;
}
.shops-class i{
    width:0.28rem;
    height:0.28rem;
    background:url("../../../static/img/order/png.png");
    background-size:9.77rem 5.97rem;
    background-position:-9.31rem -0.25rem;
    margin-top:0.04rem;
    margin-right:0.06rem;
}
.shops-class p{
    font-size:0.22rem;
    color:#898989;
    line-height:0.36rem;
}
.shops-label{
    width:100%;
    height:0.36rem;
    max-width:4.6rem;
    overflow: hidden;
    display:flex;
    justify-content:flex-start;
    margin-top:0.06rem;
}
.moneyoff{
    height:100%;
    display:flex;
    justify-content:flex-start;
}
.moneyoff p{
    font-size:0.2rem;
    color:#fb9f9e;
    padding:0.04rem;
    border:0.01rem solid #e3e9ea;
    margin-right:0.1rem;
    white-space: nowrap;
}
.shops-label .label-wmk{
    font-size:0.2rem;
    color:#b39116;
    padding:0.04rem;
    border:0.01rem solid #e3e9ea;
    margin-right:0.1rem;
    white-space: nowrap;
}
.shops-label .label-tk{
    font-size:0.2rem;
    color:#666666;
    padding:0.04rem;
    border:0.01rem solid #e3e9ea;
    margin-right:0.1rem;
    white-space:nowrap;
}
.shops-label .label-zq{
    font-size:0.2rem;
    color:#666666;
    padding:0.04rem;
    border:0.01rem solid #e3e9ea;
    margin-right:0.1rem;
    white-space: nowrap;
}
.similarity-last{
    width:100%;
    height:0.8rem;
    line-height:0.8rem;
    display:flex;
    justify-content:center;
    margin-bottom:0.3rem;
}
.similarity-last span{
    width:2.2rem;
    height:0.03rem;
    background:#e7e2e3;
    margin-top:0.39rem;
}
.similarity-last p{
    font-size:0.23rem;
    color:#575757;
    margin-left:0.5rem;
    margin-right:0.5rem;
}
</style>