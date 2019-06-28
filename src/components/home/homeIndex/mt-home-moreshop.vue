<template>
    <div class="moreshop">
        <h2>附近商家</h2>
        <div class="home-moreshop-menu">
                <b class="iconfont">综合排序&#xe60d;</b> 
                <span>销量</span>
                 <span>距离</span>
                <span class="home-moreshop-filter iconfont">筛选&#xe60d;</span>
        </div>
        <div class="home-menu-option">
            <span>减配送费</span>
            <span>会员红包</span>
            <span>津贴联盟</span>
            <span>满减优惠</span>
        </div>
        <div class="home-moreshop-foodlist">
            <ul>
                <li v-for="(items,index) in foodslist" :key="index"> 
                    <img :src="items.foodpic">
                    <div class="home-moreshop-foodinfo">
                        <b>{{items.foodname}} <span class="iconfont">&#xe615;</span></b> 
                        <p><span class="iconfont home-moreshop-score">&#xe612;{{items.foodscore}} <i>月售{{items.foodnum}}</i></span><span class="home-moreshop-time">{{items.time}}</span></p>
                        <p><span>起送￥{{items.pickup}} 配送￥{{items.giveprice}} 人均￥{{items.percapita}}</span> <span class="home-moreshop-delivery">美团专送</span></p>
                        <p><span class="home-moreshop-ranking">{{items.ranking}}</span></p>
                        <p class="home-moreshop-offer">
                            <a v-for="(items,index) in items.offer" :key="index">{{items.title}}</a>
                        </p>
                    </div>
                </li>
                <div class="endline">
                    <span>
                       已经到底啦
                    </span>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"Moreshop",
    data(){
        return{
            foodslist:[
                {
                    foodpic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1649352314,3326472692&fm=15&gp=0.jpg',
                    foodname:'一只酸奶牛(唐延路T11店)',
                    foodscore:'4.7',
                    foodnum:'1045',
                    time:'38分钟 2.7km',
                    pickup:'20',
                    giveprice:'3.5',
                    percapita:'23',
                    ranking:'雁塔区甜品人气第四名',
                    offer:[
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'24减9',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1649352314,3326472692&fm=15&gp=0.jpg',
                    foodname:'一只酸奶牛(唐延路T11店)',
                    foodscore:'4.7',
                    foodnum:'1045',
                    time:'38分钟 2.7km',
                    pickup:'20',
                    giveprice:'3.5',
                    percapita:'23',
                    ranking:'雁塔区甜品人气第四名',
                    offer:[
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'24减9',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1649352314,3326472692&fm=15&gp=0.jpg',
                    foodname:'一只酸奶牛(唐延路T11店)',
                    foodscore:'4.7',
                    foodnum:'1045',
                    time:'38分钟 2.7km',
                    pickup:'20',
                    giveprice:'3.5',
                    percapita:'23',
                    ranking:'雁塔区甜品人气第四名',
                    offer:[
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'24减9',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1649352314,3326472692&fm=15&gp=0.jpg',
                    foodname:'一只酸奶牛(唐延路T11店)',
                    foodscore:'4.7',
                    foodnum:'1045',
                    time:'38分钟 2.7km',
                    pickup:'20',
                    giveprice:'3.5',
                    percapita:'23',
                    ranking:'雁塔区甜品人气第四名',
                    offer:[
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'24减9',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1649352314,3326472692&fm=15&gp=0.jpg',
                    foodname:'一只酸奶牛(唐延路T11店)',
                    foodscore:'4.7',
                    foodnum:'1045',
                    time:'38分钟 2.7km',
                    pickup:'20',
                    giveprice:'3.5',
                    percapita:'23',
                    ranking:'雁塔区甜品人气第四名',
                    offer:[
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'24减9',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1649352314,3326472692&fm=15&gp=0.jpg',
                    foodname:'一只酸奶牛(唐延路T11店)',
                    foodscore:'4.7',
                    foodnum:'1045',
                    time:'38分钟 2.7km',
                    pickup:'20',
                    giveprice:'3.5',
                    percapita:'23',
                    ranking:'雁塔区甜品人气第四名',
                    offer:[
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'24减9',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1649352314,3326472692&fm=15&gp=0.jpg',
                    foodname:'一只酸奶牛(唐延路T11店)',
                    foodscore:'4.7',
                    foodnum:'1045',
                    time:'38分钟 2.7km',
                    pickup:'20',
                    giveprice:'3.5',
                    percapita:'23',
                    ranking:'雁塔区甜品人气第四名',
                    offer:[
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'24减9',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1649352314,3326472692&fm=15&gp=0.jpg',
                    foodname:'一只酸奶牛(唐延路T11店)',
                    foodscore:'4.7',
                    foodnum:'1045',
                    time:'38分钟 2.7km',
                    pickup:'20',
                    giveprice:'3.5',
                    percapita:'23',
                    ranking:'雁塔区甜品人气第四名',
                    offer:[
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'24减9',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        },
                        {
                            title:'16减4',
                            clolr:'red'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>
.moreshop{
    width: 100%;
}
.moreshop h2{
    width: 100%;
    font-weight: 900;
    font-size: .3rem;
}
.home-moreshop-menu{
    width: 100%;
    height: .5rem;
    line-height: .5rem;
}
.home-moreshop-menu b{
    font-weight: bold;
    font-size: .22rem;
}
.home-moreshop-menu span{
    font-size: .2rem;
    margin-left: .2rem;
}
.home-moreshop-menu .home-moreshop-filter{
    float: right;
}
.home-menu-option{
    width: 100%;
    height: .6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.home-menu-option span{
    width: 23%;
    height: .4rem;
    text-align: center;
    background: #d4d2d2;
}
.home-moreshop-foodlist{
    width: 100%;
    height: 6rem;
}
.home-moreshop-foodinfo{
    width: 100%;
    padding: 0 .2rem;
    box-sizing: border-box;
}
.home-moreshop-foodinfo p{
    margin-top: .1rem;
}
.home-moreshop-foodlist ul {
    width: 100%;
    margin-top: .3rem;
    margin-bottom: 1rem;
}
.home-moreshop-foodlist ul li{
    width: 100%;
    height: 2.7rem;
    display: flex;
}
.home-moreshop-foodlist ul li b{
    width: 100%;
    font-size: .28rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
}
.home-moreshop-foodlist ul li img{
    width: 2.8rem;
    height: 1.5rem;
}
.home-moreshop-foodlist ul li b span{
    font-size: .3rem;
    line-height: .4rem;
}
.home-moreshop-score{
    font-size: .25rem;
    color: #e9a43f;
}
.home-moreshop-score i{
    color: #333;
    font-size: .22rem;
}
.home-moreshop-time{
    font-size: .22rem;
    float: right;
}
.home-moreshop-delivery{
    font-size: .22rem;
    float: right;
    background: #ffd574;
    border-radius: .15rem 0;
    padding: .02rem;
}
.home-moreshop-ranking{
    background: #f7a494;
    color: rgb(238, 52, 52);
    padding:0 .1rem;
}
.home-moreshop-offer{
    width: 100%;
    margin-top: .1rem;
}
.home-moreshop-offer a{
    background: #ffe4ff;
    padding:0 .1rem;
    border-radius: .05rem;
    color: #ff7905;
    margin-right: .1rem;
}
.endline{
    width: 100%;
    height: .6rem;
    /* background: red; */
    border-top: 1px solid rgb(117, 112, 112);
    text-align: center;
}
.endline span{
    background: #fff;
    position: relative;
    top: -.15rem;
    width: 2rem;
    padding: 0 .2rem;
}
</style>
