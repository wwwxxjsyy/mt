<template>
    <div class="mt-order">
        <!-- <h2>mt-order</h2> -->
        <OrderHead/>
        <Orders :allorder="allorder"/>
    </div>
</template>

<script>
// 订单头部
import OrderHead from "../components/orders/OrderHead";
import Orders from "../components/orders/Orders";

export default {
    name:"MtOrder",
    components:{
        OrderHead,
        Orders
    },
    data(){
        return{
            allorder:[
                {
                    // 店铺id
                    shopid:"001",
                    // 店铺图片
                    shoppicture:"https://fuss10.elemecdn.com/1/4d/3e9f705f5802c88392894168fec6fpng.png",
                    // 店铺名称
                    shopname:"毛记冒菜(科技四路店)",
                    // 店铺主打商品
                    shopform:"冒菜",
                    // 店铺评分
                    shopgrade:4.5,
                    // 商品评论
                    commoditycomment:"味道很好，推荐",
                    // 月售
                    shoponsale:1960,
                    // 配送时间
                    duration:"34分钟",
                    // 距离
                    distance:"1.94公里",
                    // 起送费
                    sendingprice:"￥15",
                    // 配送费
                    postprice:"￥4",
                    // 高峰配送
                    highpostance:"￥7",
                    // 免费配送
                    isfreepost:false,
                    // 人均
                    capite:"￥22",
                    // 准时宝
                    ispunctuality:true,
                    // 美团专送
                    ismeituancourier:false,
                    // 高评价店铺
                    ishighshop:true,
                    // 满减
                    moneyoff:[
                        "35减18",
                        "58减27",
                        "80减33"
                    ],
                    // 支持自取
                    isinvite:false,
                    // 购买次数
                    buycount:1,
                    // 商品
                    commodity:[
                        {
                            // 商品id
                            commodityid:"001001",
                            // 商品图片
                            commoditypicture:"https://cube.elemecdn.com/7/6b/c00c8fef400efc92bb15626a17847jpeg.jpeg",
                            // 商品名称
                            commodityname:"单人荤素冒菜+主食套餐",
                            // 商品数量
                            commoditycount:1
                        },
                        {
                            commodityid:"001002",
                            commoditypicture:"https://cube.elemecdn.com/c/3a/dc28810398897e5e383dbe90a3a05jpeg.jpeg",
                            commodityname:"康师傅冰红茶(单点不送)",
                            commoditycount:1
                        }
                    ],
                    // 订单状态(完成/取消)
                    isfulfill:true,
                    // 订单总价
                    totalvalue:"￥27.1",
                    // 订单评论
                    iscomment:true
                },
                {
                    shopid:"002",
                    shoppicture:"https://fuss10.elemecdn.com/c/91/40bb22268a52a4790d28d20130383jpeg.jpeg",
                    shopname:"邢老四肉丸胡辣汤腊牛肉夹馍",
                    shopform:"胡辣汤",
                    shopgrade:4.7,
                    commoditycomment:"味道很好，推荐",
                    shoponsale:1189,
                    duration:"33分钟",
                    distance:"1.4公里",
                    sendingprice:"￥15",
                    postprice:"￥2.6",
                    highpostance:"￥4",
                    isfreepost:true,
                    capite:"￥18",
                    ispunctuality:true,
                    ismeituancourier:true,
                    ishighshop:false,
                    moneyoff:[
                        "28减5",
                        "58减10"
                    ],
                    isinvite:true,
                    buycount:6,
                    commodity:[
                        {
                            commodityid:"002001",
                            commoditypicture:"https://cube.elemecdn.com/5/0f/0db1af09af9b51bd502fb6b5f15a6jpeg.jpeg",
                            commodityname:"肉丸胡辣汤 大",
                            commoditycount:1
                        },
                        {
                            commodityid:"002002",
                            commoditypicture:"https://cube.elemecdn.com/1/23/5e77abd01ffd7565b638be8a22b5ejpeg.jpeg",
                            commodityname:"腊牛肉夹馍 纯瘦",
                            commoditycount:2
                        }
                    ],
                    isfulfill:true,
                    totalvalue:"￥28",
                    iscomment:true
                },
                {
                    shopid:"003",
                    shoppicture:"https://fuss10.elemecdn.com/4/bf/01d58259d50d75a163c81c9fda2fcjpeg.jpeg",
                    shopname:"张存伟道口烧鸡（太白南路店）",
                    shopform:"卤味",
                    shopgrade:4.6,
                    commoditycomment:"",
                    shoponsale:100,
                    duration:"30分钟",
                    distance:"2.01公里",
                    sendingprice:"￥20",
                    postprice:"￥4",
                    highpostance:"￥6",
                    isfreepost:false,
                    capite:"￥22",
                    ispunctuality:true,
                    ismeituancourier:false,
                    ishighshop:false,
                    moneyoff:[
                        
                    ],
                    isinvite:true,
                    buycount:2,
                    commodity:[
                        {
                            commodityid:"003001",
                            commoditypicture:"https://cube.elemecdn.com/9/50/6fe278480c78a53ea7f1a652d447fjpeg.jpeg",
                            commodityname:"张存伟道口烧鸡",
                            commoditycount:1
                        }
                    ],
                    isfulfill:false,
                    totalvalue:"￥32.38",
                    iscomment:false
                },
                {
                    shopid:"004",
                    shoppicture:"https://fuss10.elemecdn.com/0/5b/a7e9d4a9b3277067781bb7e7bf6d5png.png",
                    shopname:"杭州小笼包",
                    shopform:"其他快餐",
                    shopgrade:4.8,
                    commoditycomment:"",
                    shoponsale:158,
                    duration:"37分钟",
                    distance:"1.49公里",
                    sendingprice:"￥15",
                    postprice:"",
                    highpostance:"",
                    isfreepost:true,
                    capite:"￥24",
                    ispunctuality:false,
                    ismeituancourier:false,
                    ishighshop:false,
                    moneyoff:[
                        "30减58",
                        "40减4"
                    ],
                    isinvite:true,
                    buycount:15,
                    commodity:[
                        {
                            commodityid:"004001",
                            commoditypicture:"https://cube.elemecdn.com/3/64/06bcf38fc6c52676c10192f4e0aa6jpeg.jpeg",
                            commodityname:"鲜肉小笼包",
                            commoditycount:1
                        },
                        {
                            commodityid:"004002",
                            commoditypicture:"https://cube.elemecdn.com/9/33/a856508efda63288773e51209b5a2jpeg.jpeg",
                            commodityname:"小笼包蘸料",
                            commoditycount:1
                        },
                        {
                            commodityid:"004003",
                            commoditypicture:"https://cube.elemecdn.com/a/2b/0119a8cc0324725ab08928c533ebejpeg.jpeg",
                            commodityname:"茶叶蛋",
                            commoditycount:2
                        }
                    ],
                    isfulfill:true,
                    totalvalue:"￥15.86",
                    iscomment:false
                },
                {
                    shopid:"005",
                    shoppicture:"https://fuss10.elemecdn.com/3/a0/b4b317d65ec89abb61de248c71ad7jpeg.jpeg",
                    shopname:"茗典蛋糕工厂",
                    shopform:"甜品",
                    shopgrade:4.6,
                    commoditycomment:"味道很好，推荐",
                    shoponsale:120,
                    duration:"34分钟",
                    distance:"1.48公里",
                    sendingprice:"￥45",
                    postprice:"￥8",
                    highpostance:"",
                    isfreepost:false,
                    capite:"￥46",
                    ispunctuality:false,
                    ismeituancourier:true,
                    ishighshop:true,
                    moneyoff:[],
                    isinvite:true,
                    buycount:1,
                    commodity:[
                        {
                            commodityid:"005001",
                            commoditypicture:"https://cube.elemecdn.com/4/87/fcc8e5f4b79d9d3854e2f7d55cc3ajpeg.jpeg",
                            commodityname:"娇羞蓝莓。",
                            commoditycount:1
                        }
                    ],
                    isfulfill:false,
                    totalvalue:"￥128",
                    iscomment:false
                }
            ]
        }
    },
    created(){
        this.Observer.$emit("handlat",this.allorder);
    }
}
</script>

<style scoped>
.mt-order{
    width:100%;
    height:100%;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    overflow:hidden;
    background:#f2f2f2;
}
</style>