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
                        <p>
                            <span>起送￥{{items.pickup}} 配送￥{{items.giveprice}} 人均￥{{items.percapita}}</span>
                            <span :class="{'home-moreshop-delivery':items.give}">{{items.give}}</span>
                            <span :class="{'home-moreshop-ontime':items.timer}">{{items.timer}}</span>
                        </p>
                        <p><span class="home-moreshop-ranking iconfont">{{items.ranking}}</span></p>
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
                    foodpic:'https://p0.meituan.net/waimaipoi/f81249ddff71d0491bb18dceb02acf8f38552.jpg',
                    foodname:'泰熙家（高新万达店）',
                    give:"美团专送",
                    foodscore:'4.8',
                    foodnum:'9999+',
                    time:'50分钟 4.7km',
                    pickup:'30',
                    giveprice:'3.5',
                    percapita:'23',
                    ranking:'大众点评高分店铺',
                    offer:[
                        {
                            title:'20减8',
                            clolr:'red'
                        },
                        {
                            title:'24减9',
                            clolr:'green'
                        },
                        {
                            title:'45减14',
                            clolr:'red'
                        },
                        {
                            title:'支持自取',
                            clolr:'black'
                        }
                    ]
                },
                {
                    foodpic:'https://p0.meituan.net/waimaipoi/aea206c79c379477024aa9e0199431f029499.jpg',
                    foodname:'花枝唯希炖品（高新店）',
                    timer:'准时宝',
                    foodscore:'4.7',
                    foodnum:'2358',
                    time:'36分钟 1.7km',
                    pickup:'15',
                    giveprice:'4.5',
                    percapita:'25',
                    ranking:'雁塔区甜品人气第四名',
                    offer:[
                        {
                            title:'35减13',
                            clolr:'red'
                        },
                        {
                            title:'24减9',
                            clolr:'red'
                        },
                        {
                            title:'35减13',
                            clolr:'red'
                        },
                        {
                            title:'58减23',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://p0.meituan.net/waimaipoi/45cd3dac2d626f500ddc9fb15513bf7c50046.jpg',
                    foodname:'鱼小喵在成都（高新店）',
                    give:"美团专送",
                    foodscore:'4.9',
                    foodnum:'5484',
                    time:'42分钟 3.2km',
                    pickup:'20',
                    giveprice:'2',
                    percapita:'23',
                    ranking:'品牌加盟',
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
                            title:'30减11',
                            clolr:'red'
                        },
                        {
                            title:'58减23',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://p1.meituan.net/waimaipoi/3a74b132c6a8c5de1f5cd694fdb86ee327206.jpg',
                    foodname:'粥先生(高新店)',
                    foodscore:'4.8',
                    foodnum:'5754',
                    time:'45分钟 3.6km',
                    pickup:'20',
                    giveprice:'2.5',
                    percapita:'23',
                    ranking:'雁塔区销量第三名',
                    offer:[
                        {
                            title:'25减9',
                            clolr:'red'
                        },
                        {
                            title:'38减14',
                            clolr:'red'
                        },
                        {
                            title:'55减20',
                            clolr:'red'
                        },
                        {
                            title:'85减30',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://p0.meituan.net/business/2aa0f13eaf3e723a841f525858f91447124408.png',
                    foodname:'小六汤包（大寨路店）',
                    foodscore:'4.4',
                    foodnum:'3655',
                    time:'52分钟 4.2km',
                    pickup:'20',
                    giveprice:'3',
                    percapita:'23',
                    ranking:'点评高分店铺',
                    offer:[
                        {
                            title:'28减9',
                            clolr:'red'
                        },
                        {
                            title:'46减20',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://p0.meituan.net/business/52f180a996627833cdccbb7be2aeafaf31688.jpg',
                    foodname:'袁记肉夹馍（恒大店）',
                    timer:'准时宝',
                    foodscore:'4.6',
                    foodnum:'4156',
                    time:'65分钟 5.5km',
                    pickup:'20',
                    giveprice:'4',
                    percapita:'23',
                    ranking:'美食广场',
                    offer:[
                        {
                            title:'25减6',
                            clolr:'red'
                        },
                        {
                            title:'40减14',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://p0.meituan.net/business/46617277cd736b368e791f06910e1064233340.png',
                    foodname:'曼玲粥店（西安高新区店）',
                    give:"美团专送",
                    foodscore:'4.3',
                    foodnum:'5624',
                    time:'45分钟 3.7km',
                    pickup:'25',
                    giveprice:'2.5',
                    percapita:'30',
                    ranking:'快餐小吃',
                    offer:[
                        {
                            title:'20减8',
                            clolr:'red'
                        },
                        {
                            title:'30减10',
                            clolr:'red'
                        },
                        {
                            title:'46减18',
                            clolr:'red'
                        }
                    ]
                },
                {
                    foodpic:'https://p0.meituan.net/waimaipoi/2c7d876ec86537fe414c1b5095a41e2a30913.jpg',
                    foodname:'舍外轻食博物馆',
                    foodscore:'4.5',
                    foodnum:'2834',
                    time:'36分钟|4.0km',
                    pickup:'18',
                    giveprice:'2',
                    percapita:'20',
                    ranking:'点评高分店铺',
                    offer:[
                        {
                            title:'16减1',
                            clolr:'red'
                        },
                        {
                            title:'24减6',
                            clolr:'red'
                        },
                        {
                            title:'50减14',
                            clolr:'red'
                        },
                    ]
                }
            ]
        }
    },
    props:{
        nerbylists:{}
    }
}
</script>

<style scoped>
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
    width: 2rem;
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
    font-size: .2rem;
    float: right;
    background: #ffd574;
    border-radius: .15rem 0;
    padding: .02rem;
}
.home-moreshop-ontime{
    font-size: .2rem;
    float: right;
    color:#f1b150;
    border: 1px solid #f1b150;
    padding: .02rem; 
    box-sizing: border-box;
}
.home-moreshop-ranking{
    background: #f7a494;
    color: rgb(238, 52, 52);
    font-size: .22rem;
    padding:.03rem .1rem;
    border-radius: .05rem;
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
