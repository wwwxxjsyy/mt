<template>
    <div class="home-moreshop-foodlist">
            <div class="header">
                <span class="iconfont" @click="$router.back()">&#xe682;</span>
                <h3>为你优选</h3>
            </div>
            <ul @click="$router.push('/homegoods/goods')">
                <li v-for="(items,index) in foodslist" :key="index"> 
                    <div class="home-moreshop-foodinfo">
                        <div class="home-moreshop-img">
							<img :src="items.pic1" />
						</div>
                        <div class="home-moreshop-msg">
                            <b>{{items.foodname}}</b> 
                            <p><span>起送￥{{items.pickup}} 配送￥{{items.giveprice}} 人均￥{{items.percapita}}</span></p>
                            <p class="home-moreshop-offer">
                                <a v-for="(items,index) in items.offer" :key="index">{{items.title}}</a>
                            </p>
                        </div>
                        <div  class="home-moreshop-delivery">
                              <span>进店</span>
                        </div>
                        
                    </div>
                    <div class="home-goods-img">
                        <div class="home-goods-img-left">
							<img :src="items.pic2" />
						</div>
                        <div class="home-goods-img-right">
                            <div class="home-goods-img-top">
								<img :src="items.pic3" />
							</div>
                            <div class="home-goods-img-bottom">
								<img :src="items.pic4" />
							</div>
                        </div>
                    </div>
                    <div class="home-moreshop-comment">
                        <div>顾客说:<span> 骑士辛苦了</span></div> 
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    name:"Superior",
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
                       
                    ],
					
					pic1:"http://p0.meituan.net/xianfu/fd3a8462080c71f60f2581c2e7c1d3f43010.jpeg",
					pic2:"http://p1.meituan.net/xianfu/71f534915c7763796729a1d9721fb1f1389269.png",
					pic3:"http://p0.meituan.net/xianfu/35f41c0badc69352b886cc34080f1f9a232448.png",
					pic4:"http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png",
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
                     
                    ],
					pic1:"http://p0.meituan.net/xianfu/fd3a8462080c71f60f2581c2e7c1d3f43010.jpeg",
					pic2:"http://p1.meituan.net/xianfu/71f534915c7763796729a1d9721fb1f1389269.png",
					pic3:"http://p0.meituan.net/xianfu/35f41c0badc69352b886cc34080f1f9a232448.png",
					pic4:"http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png",
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
                            title:'16减4',
                            clolr:'red'
                        }
                    ],
					pic1:"http://p0.meituan.net/xianfu/fd3a8462080c71f60f2581c2e7c1d3f43010.jpeg",
					pic2:"http://p1.meituan.net/xianfu/71f534915c7763796729a1d9721fb1f1389269.png",
					pic3:"http://p0.meituan.net/xianfu/35f41c0badc69352b886cc34080f1f9a232448.png",
					pic4:"http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png",
                },
            ]
        }
    }

}
</script>

<style scoped>
.iconfont{
    font-size: .35rem;
    color:rgb(192, 189, 189);
}
img{
    /* width:80%; */
    /* height:inherit; */
}
.header{
    width:100%;
    height:1rem;
    line-height: 1rem;
    position: fixed;
    top:0;
    z-index:9;
    display: flex;
    justify-content:center;
    background: rgb(244, 244, 244);
    box-shadow: 2px 2px 3px #ccc;
}
.header span{
    position:absolute;
    left:0;
}
.header h3{
    font-weight: 600;
    color:lightcoral;
    text-align: center;
    font-size: .35rem;
}
.home-moreshop-foodlist{
    width:100%;
    background: #eee;
}
.home-moreshop-foodlist ul {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: .2rem;
    background: #eee;
    border-radius: .2rem;
    padding:.2rem;
    

}
.home-moreshop-foodlist ul li{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    padding:.2rem;
    margin-bottom:.2rem;
    background: #fff;
    border-radius: .2rem;
    box-shadow: 5px 5px 5px #ccc;
}
.home-moreshop-foodlist ul li b{
    width: 100%;
    font-size: .28rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    line-height: .5rem;

}
.home-moreshop-foodlist ul li img{
    width: 80%;
    /* height: 1.5rem; */
}
.home-moreshop-foodlist ul li b span{
    font-size: .4rem;
    width:100%;

}
.home-moreshop-foodlist ul li p{
    width:100%;
        display: inline-block;
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
    border-radius: .1rem;
    padding: 0 .3rem;
    font-weight: normal;
    color:#333;
    width:1.5rem;
    height:.5rem;
    text-align: center;
    line-height: .5rem;
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
.home-moreshop-foodinfo{
    width:100%;
    display: flex;
    justify-content: space-around;
}
.home-moreshop-img{
    width:3rem;
    height:1.5rem;
    /* background: #e9a43f; */
    margin-right: .2rem;
	display: flex;
	justify-content: center;
	align-items: center;
    /* display: flex; */
    
}
.home-goods-img{
    display: flex;
    border-radius:.1rem;
    overflow: hidden;
    height:3rem;
    margin-top:.1rem;
}
.home-goods-img-left{
    width:60%;
    /* background: #ffd574; */
	display: flex;
	justify-content: center;
	align-items: center;
    margin-right: 1px;
    height:3rem;
}
.home-goods-img-right{
    width:40%;
     height:3rem;
    /* background: #fde8b6; */
}
.home-goods-img-top{
    width:100%;
    height:50%;
    /* background: #eee2c6; */
}
.home-goods-img-top img{
	width: 100%;
	height: 100%;
}
.home-goods-img-bottom{
    width:100%;
    height:50%;
    /* background: #b6b4b0; */
}
.home-goods-img-bottom img{
	width: 100%;
	height: 100%;
}
.home-moreshop-comment{
    height:.6rem;
    background: #eee;
    margin-top: .1rem;
    border-radius: .1rem;
    padding-left:.2rem;
    padding-right:.2rem;
   
}
.home-moreshop-comment div{
    font-size: .2rem;
    font-weight: bolder;
    line-height: .6rem;
    box-sizing: border-box;
}
.home-moreshop-comment div span{
    font-weight: normal;
}
</style>
