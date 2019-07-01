<template>
<div>
    <div class="goodshop" v-for="(items,index) in goodsshop" :key="index">
        <div class="home-goodshop-top" :style=" 'background-image :  url( ' + items.shopimgs+' ) ' " >
            <div class="home-goodshop-shoppic">
                <img :src="items.shoppic" alt="">
                <span class="home-goodshop-information">
                    <p class="home-goodshop-shopname">{{items.shopname}}</p>
                    <b>
                        <a v-for="items in items.discount" :key="items">{{items}}</a>
                    </b>
                </span>
            </div>
        </div>
        <div class="home-goodshop-btm">
            <h3>{{items.shoptheme}}</h3>
            <ul>
                <li v-for="(items,index) in items.foodinfo" :key="index">
                    <img :src="items.foodpic">
                    <i>
                         <p>{{items.foodname}}</p>
                         <span>{{items.foodprice}} <del>{{items.originalprice}}</del></span>
                    </i>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:"Goodshop",
    data(){
        return{
            goodsshop:[
                {
                    shopname:'大尚龙虾.烧烤.虾尾',
                    shopimgs:'http://img4.imgtn.bdimg.com/it/u=543139140,1104626788&fm=26&gp=0.jpg',
                    shoppic:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3422724315,104055540&fm=26&gp=0.jpg',
                    discount:[
                        '5减5',
                        '50减25',
                        '100减50',
                        '200减100'
                    ],
                    shoptheme:'麻辣.鲜香 挑战您的味蕾',
                    foodinfo:[
                        {
                            foodpic:'http://img2.imgtn.bdimg.com/it/u=39505531,2473249177&fm=26&gp=0.jpg',
                            foodname:'秘制！麻辣大龙虾 鲜香美味的小龙虾',
                            foodprice:'￥35.0',
                            originalprice:'￥58.8'
                        },
                        {
                            foodpic:'http://p4.ssl.cdn.btime.com/t01a720786a90975af0.jpg?size=1255x700',
                            foodname:'飘香馋嘴蛙 (进店必买品)',
                            foodprice:'￥86.0',
                            originalprice:'￥128.8'
                        },
                        {
                            foodpic:'http://5b0988e595225.cdn.sohucs.com/images/20171231/e2ce7ee5389a41938e9972adf7adef45.jpeg',
                            foodname:'招牌油焖大虾',
                            foodprice:'￥66.5',
                            originalprice:'￥95.8'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>
.goodshop{
    width: 100%;
    /* height: 9rem; */
    background: #fff;
    margin-top: .9rem;
    border-radius: .2rem;
}
.home-goodshop-top{
    width: 100%;
    height: 1.5rem;
    background: red;
    border-radius: .2rem .2rem 0 0;
    /* background-image: url("http://img4.imgtn.bdimg.com/it/u=543139140,1104626788&fm=26&gp=0.jpg"); */
    background-size: 100% 100%;
    opacity: .95;
    /* position: relative; */
}
.home-goodshop-btm{
    width: 100%;
    height: 3rem;
    border-radius: 0 0 .2rem .2rem;
}
.home-goodshop-shoppic{
    /* width: 70%; */
    height: .9rem;
    /* background: yellowgreen; */
    display: flex;
    position: relative;
    left: .2rem;
    top: 1rem;
}
.home-goodshop-information{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.home-goodshop-shoppic img{
    width: .9rem;
    height: .9rem;
}
.home-goodshop-information b{
    margin-right: .2rem;
}
.home-goodshop-shopname{
    color: rgb(241, 233, 233);
    padding-left: .2rem;
    font-size: .3rem;
}
.home-goodshop-information b a{
    background: rgb(230, 98, 98);
    color: #fff;
    margin-left: .1rem;
}
.home-goodshop-btm h3{
    font-size: .33rem;
    font-weight: bold;
    margin-top: .5rem;
    padding-left: .1rem;
}
.home-goodshop-btm ul{
    width: 100%;
    height: 2.1rem;
    margin-top: .2rem;
    display: flex;
    justify-content: space-around;;
}
.home-goodshop-btm ul li {
    width: 31%;
    height: 1.5rem;
    background: gold;
}
.home-goodshop-btm ul li img{
    width: 100%;
    height: 100%;
    border-radius: .1rem;
}
.home-goodshop-btm ul li i span{
    font-size: .25rem;
    color: red;
}
.home-goodshop-btm ul li i span del{
    font-size: .2rem;
    color: #a59b9b;
    
}
.home-goodshop-btm ul li i p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
