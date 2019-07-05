<template>
    <div class="ordersimilarity">
        <div class="similarity-head">
            <i @click="back"></i>
            <span></span>
            <p>相似商家</p>
        </div>
        <div class="similarity-body">
            <router-link to="" class="similarity-now">
                <img :src='similaritynow.shoppicture' alt="">
                <div class="similarity-now-d">
                    <p class="now-d-t">{{similaritynow.shopname}}</p>
                    <div class="now-d-b">
                        <div class="now-moneyoff">
                            <p v-for="(tabls,index) in similaritynow.moneyoff">{{tabls}}</p>
                        </div>
                        <p v-show="similaritynow.isnothreshold" class="now-d-bwmk">8元无门槛红包</p>
                        <p v-show="similaritynow.isfastrefund" class="now-d-btk">极速退款</p>
                        <p v-show="similaritynow.isinvite" class="now-d-bzq">支持自取</p>
                    </div>
                </div>
            </router-link>
            <div class="similarity-more">
                <span></span>
                <p>为您找到以下相似商家</p>
                <span></span>
            </div>
            <div class="similarity-shops">
                <router-link to="" v-for="(item,index) in similaritymerchant" :key="index">
                    <img :src='item.pic' alt="">
                    <div class="shops-detail">
                        <p class="shops-detail-name">{{item.merchantname}}</p>
                        <div class="shops-detail-sell">
                            <div class="sell-px">
                                <p class="sell-px-pj"><i></i><span>{{item.grade}}</span></p>
                                <p class="sell-px-xl">月售<span>{{item.onsale}}</span></p>
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
                            <p>{{item.commoditytheme}}</p>
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
    name:"ordersimilarity",
    props:["allorders"],
    data(){
        return{
            allorder:[],
            discus:[],
            shopid:Number,
            shopform:"",
            similaritynow:{},
            similaritymerchant:[
                {
                    // 店铺id
                    shopid:"01001",
                    // 商品
                    commodity:[
                        {
                            // 商品id
                            commodityid:"001",
                            // 商品数量
                            commoditycount:1
                        },
                        {
                            commodityid:"001",
                            commoditycount:2
                        },
                        {
                            commodityid:"001",
                            commoditycount:3
                        }
                    ],
                    // 图片
                    pic:"../../../static/img/order/1.png",
                    // 店名
                    merchantname:"麻辣空间（高新美道城店）",
                    // 购买次数
                    buycount:1,
                    // 评分
                    grade:4.4,
                    // 月售
                    onsale:1000,
                    // 时间
                    duration:"35分钟",
                    // 距离
                    distance:"1.2公里",
                    // 起送费
                    sendingprice:"￥20",
                    // 配送费
                    postprice:"￥4",
                    // 高峰配送
                    highpostance:"￥7",
                    // 免费配送
                    isfreepost:true,
                    // 人均
                    capite:"￥22",
                    // 准时宝
                    ispunctuality:true,
                    // 美团专送
                    ismeituancourier:false,
                    // 高分店铺
                    ishighshop:true,
                    // 商品评论
                    commoditycomment:"擀面皮类面筋类的都很好吃",
                    // 店铺主题
                    commoditytheme:"冒菜",
                    // 满减
                    moneyoff:[
                        "5减3",
                        "29减6",
                        "39减13",
                        "55减18"
                    ],
                    // 无门槛
                    isnothreshold:true,
                    nothreshold:"6元无门槛红包",
                    // 极速退款
                    isfastrefund:true,
                    // 支持自取
                    isinvite:false
                },
                {
                    shopid:"01002",
                    commodity:[
                        {
                            commodityid:"001",
                            commoditycount:1
                        },
                        {
                            commodityid:"001",
                            commoditycount:2
                        },
                        {
                            commodityid:"001",
                            commoditycount:3
                        }
                    ],
                    pic:"../../../static/img/order/2.png",
                    merchantname:"小馋虫麻食（高新四路店）",
                    buycount:2,
                    grade:4.1,
                    onsale:900,
                    duration:"25分钟",
                    distance:"800米",
                    sendingprice:"￥18",
                    postprice:"￥2",
                    highpostance:"￥5",
                    isfreepost:false,
                    capite:"￥15",
                    ispunctuality:false,
                    ismeituancourier:true,
                    ishighshop:false,
                    commoditycomment:"面筋类的都很好吃",
                    commoditytheme:"面皮",
                    moneyoff:[
                        "5减3",
                        "29减6",
                        "39减13",
                        "55减18"
                    ],
                    isnothreshold:false,
                    nothreshold:"5元无门槛红包",
                    isfastrefund:true,
                    isinvite:false
                },
                {
                    shopid:"01003",
                    commodity:[
                        {
                            commodityid:"001",
                            commoditycount:1
                        },
                        {
                            commodityid:"001",
                            commoditycount:2
                        },
                        {
                            commodityid:"001",
                            commoditycount:3
                        }
                    ],
                    pic:"../../../static/img/order/3.png",
                    merchantname:"约点饭（捞饭中式简餐）",
                    buycount:3,
                    grade:4.2,
                    onsale:800,
                    duration:"30分钟",
                    distance:"1.1公里",
                    sendingprice:"￥20",
                    postprice:"￥4",
                    highpostance:"￥7",
                    isfreepost:true,
                    capite:"￥22",
                    ispunctuality:true,
                    ismeituancourier:false,
                    ishighshop:true,
                    commoditycomment:"擀面皮类的都很好吃",
                    commoditytheme:"中式简餐",
                    moneyoff:[
                        "5减3",
                        "29减6",
                        "39减13",
                        "55减18"
                    ],
                    isnothreshold:true,
                    nothreshold:"4元无门槛红包",
                    isfastrefund:true,
                    isinvite:false
                },
                {
                    shopid:"01004",
                    commodity:[
                        {
                            commodityid:"001",
                            commoditycount:1
                        },
                        {
                            commodityid:"001",
                            commoditycount:2
                        },
                        {
                            commodityid:"001",
                            commoditycount:3
                        }
                    ],
                    pic:"../../../static/img/order/1.png",
                    merchantname:"麻辣空间（高新四路店）",
                    buycount:2,
                    grade:4,
                    onsale:600,
                    duration:"38分钟",
                    distance:"1.7公里",
                    sendingprice:"￥20",
                    postprice:"￥4",
                    highpostance:"￥7",
                    isfreepost:false,
                    capite:"￥22",
                    ispunctuality:false,
                    ismeituancourier:true,
                    ishighshop:false,
                    commoditycomment:"都很好吃",
                    commoditytheme:"冒菜",
                    moneyoff:[
                        "5减3",
                        "29减6",
                        "39减13",
                        "55减18"
                    ],
                    isnothreshold:false,
                    nothreshold:"4元无门槛红包",
                    isfastrefund:true,
                    isinvite:false
                },
                {
                    shopid:"01005",
                    commodity:[
                        {
                            commodityid:"001",
                            commoditycount:1
                        },
                        {
                            commodityid:"001",
                            commoditycount:2
                        },
                        {
                            commodityid:"001",
                            commoditycount:3
                        }
                    ],
                    pic:"../../../static/img/order/2.png",
                    merchantname:"小馋虫麻食（高新四路店）",
                    buycount:5,
                    grade:4.6,
                    onsale:1200,
                    duration:"37分钟",
                    distance:"1.6公里",
                    sendingprice:"￥20",
                    postprice:"￥4",
                    highpostance:"￥7",
                    isfreepost:false,
                    capite:"￥22",
                    ispunctuality:true,
                    ismeituancourier:true,
                    ishighshop:true,
                    commoditycomment:"好吃",
                    commoditytheme:"面皮",
                    moneyoff:[
                        "5减3",
                        "29减6",
                        "39减13",
                        "55减18"
                    ],
                    isnothreshold:true,
                    nothreshold:"2元无门槛红包",
                    isfastrefund:true,
                    isinvite:false
                },
                {
                    shopid:"01006",
                    commodity:[
                        {
                            commodityid:"001",
                            commoditycount:1
                        },
                        {
                            commodityid:"001",
                            commoditycount:2
                        },
                        {
                            commodityid:"001",
                            commoditycount:3
                        }
                    ],
                    pic:"../../../static/img/order/3.png",
                    merchantname:"约点饭（捞饭中式简餐）",
                    buycount:6,
                    grade:4.7,
                    onsale:2000,
                    duration:"24分钟",
                    distance:"900米",
                    sendingprice:"￥20",
                    postprice:"￥4",
                    highpostance:"￥7",
                    isfreepost:false,
                    capite:"￥22",
                    ispunctuality:true,
                    ishighshop:false,
                    commoditycomment:"擀面皮类面筋类的都很好吃",
                    commoditytheme:"中式简餐",
                    moneyoff:[
                        "5减3",
                        "29减6",
                        "39减13",
                        "55减18"
                    ],
                    isnothreshold:true,
                    nothreshold:"1元无门槛红包",
                    isfastrefund:true,
                    isinvite:false
                }
            ]
        }
    },
    methods:{
        back(){
            this.$router.back();
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            vm.allorder=to.params.allorder
            vm.shopid=to.params.shopid
            vm.shopform=to.params.shopform
            vm.discus=to.params.allorder
            for(var i in vm.allorder){
                if(vm.shopid==vm.allorder[i].shopid){
                    vm.similaritynow=vm.allorder[i]
                }
            }
        })
    },
    beforeCreate(){
        console.log(this.allorder)
        console.log(this.shopform)
    },
    created(){
        console.log(this.allorder)
        console.log(this.shopform)
    },
    beforeMount(){
        console.log(this.allorder)
        console.log(this.shopform)
    },
    mounted(){
        console.log(this.allorder)
        console.log(this.shopform)
    },
    beforeUpdate(){
        console.log(this.allorder)
        console.log(this.shopform)
    },
    updated(){
        console.log(this.allorder)
        console.log(this.shopform)
    },
    activated(){
        console.log(this.allorder)
        console.log(this.shopform)
    },
    deactivated(){
        console.log(this.allorder)
        console.log(this.shopform)
    },
    beforeDestroy(){
        console.log(this.allorder)
        console.log(this.shopform)
    },
    destroyed(){
        console.log(this.allorder)
        console.log(this.shopform)
    }
}
</script>

<style>
.ordersimilarity{
    width:100%;
    height:100%;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.similarity-head{
    position:fixed;
    width:100%;
    height:0.9rem;
    display:flex;
    justify-content:flex-start;
    background:white;
}
.similarity-head i{
    width:0.52rem;
    height:0.44rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-1.02rem -0.43rem;
    margin-top:0.23rem;
    margin-left:0.28rem;
}
.similarity-head span{
    width:0.02rem;
    height:0.26rem;
    background:#e4e4e4;
    margin-top:0.32rem;
    margin-left:.22rem;
    margin-right:0.22rem;
}
.similarity-head p{
    font-size:0.3rem;
    color:#222222;
    line-height:0.9rem;
}
.similarity-body{
    width:100%;
    flex:1;
    overflow-y:auto;
}
.similarity-now{
    width:100%;
    height:1.72rem;
    display:flex;
    justify-content:flex-start;
    margin-top:0.9rem;
}
.similarity-now img{
    width:1.72rem;
    height:1.28rem;
    background:chocolate;
    margin-top:0.22rem;
    margin-left:0.34rem;
}
.similarity-now-d{
    height:100%;
    flex:1;
    margin-right:0.28rem;
    margin-left:0.24rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
.now-d-t{
    font-size:0.3rem;
    color:#353535;
    width:84%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.now-d-b{
    width:100%;
    max-width:4.6rem;
    overflow: hidden;
    display:flex;
    justify-content:flex-start;
    margin-top:0.1rem;
}
.now-moneyoff{
    height:100%;
    display:flex;
    justify-content:flex-start;
}
.now-moneyoff p{
    font-size:0.2rem;
    color:#fb9f9e;
    padding:0.04rem;
    border:0.01rem solid #e3e9ea;
    margin-right:0.1rem;
    white-space: nowrap;
}
.now-d-b .now-d-bwmk{
    font-size:0.2rem;
    color:#b39116;
    padding:0.04rem;
    border:0.01rem solid #e3e9ea;
    margin-right:0.1rem;
    white-space: nowrap;
}
.now-d-b .now-d-btk{
    font-size:0.2rem;
    color:#666666;
    padding:0.04rem;
    border:0.01rem solid #e3e9ea;
    margin-right:0.1rem;
    white-space: nowrap;
}
.now-d-b .now-d-bzq{
    font-size:0.2rem;
    color:#666666;
    padding:0.04rem;
    border:0.01rem solid #e3e9ea;
    margin-right:0.1rem;
    white-space: nowrap;
}
.similarity-more{
    width:100%;
    height:0.8rem;
    line-height:0.8rem;
    background:#f8f3f5;
    display:flex;
    justify-content:center;
}
.similarity-more span{
    width:1.2rem;
    height:0.03rem;
    background:#e7e2e3;
    margin-top:0.39rem;
}
.similarity-more p{
    font-size:0.23rem;
    color:#575757;
}
.similarity-shops{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.similarity-shops a{
    width:100%;
    height:2.56rem;
    display:flex;
    justify-content:space-between;
}
.similarity-shops a:last-child{
    margin-bottom:0.6rem;
}
.similarity-shops a img{
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
.shops-labels i{
    width:0.2rem;
    height:0.16rem;
    background:url("../../../static/img/order/png.png");
    background-size:4.77rem 2.97rem;
    background-position:-4.25rem -0.39rem;
    margin-top:0.08rem;
    margin-right:0.14rem;
    margin-left:0.2rem;
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
