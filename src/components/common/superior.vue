<template>
    <div class="home-moreshop-foodlist">
            <ul>
                <li v-for="(items,index) in foodslist" :key="index"> 
                    <!-- <img :src="items.foodpic"> -->
                    <div class="home-moreshop-foodinfo">
                        <div class="home-moreshop-img"></div>
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
                        <div class="home-goods-img-left">111</div>
                        <div class="home-goods-img-right">
                            <div>1111</div>
                            <div>1111</div>
                        </div>
                    </div>
                    <div class="home-moreshop-comment">
                        <div>顾客说<span>骑士辛苦了</span></div> 
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
            ]
        }
    }

}
</script>

<style scoped>
img{
    width:inherit;
    height:inherit;
}
.home-moreshop-foodlist{
    width:100%;
    background: #eee;
    padding:.2rem;
}
.home-moreshop-foodlist ul {
    width: 100%;
    margin-top: .3rem;
    margin-bottom: 1rem;
    background: #fff;
    border-radius: .2rem;
    box-shadow: 3px 3px 3px 0px #ccc;

}
.home-moreshop-foodlist ul li{
    width: 100%;
    /* height: 3rem; */
    display: flex;
    flex-direction: column;
    align-items: space-around;
    padding:.2rem;
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
    width: 2.8rem;
    height: 1.5rem;
}
.home-moreshop-foodlist ul li b span{
    font-size: .4rem;

}
.home-moreshop-foodlist ul li p{
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
    background: #e9a43f;
    margin-right: .2rem;
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
    background: #ffd574;
    margin-right: 1px;
}
.home-goods-img-right{
    width:40%;
    background: #fde8b6;
}
.home-moreshop-comment{
    height:.6rem;
    background: #ccc;
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
