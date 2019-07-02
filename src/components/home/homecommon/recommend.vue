<template>
<div>
    <div class="goodshop" v-for="(items,index) in goodsshop" :key="index">
        <div class="home-goodshop-top">
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
                <li>
                    <img :src="items.foodpic">
                    <i>
                         <p>{{items.foodname}}</p>
                         <span>{{items.foodprice}} <del>{{items.originalprice}}</del></span>
                    </i>
                </li>
                 <li>
                    <img :src="items.foodpic">
                    <i>
                         <p>{{items.foodname}}</p>
                         <span>{{items.foodprice}} <del>{{items.originalprice}}</del></span>
                    </i>
                </li>
                 <li>
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
    name:"Test",
    data(){
        return{
            goodsshop:[
                {
                    shopname:'大尚龙虾.烧烤.虾尾',
                    shopimgs:'../../../../static/imgs/banner/banner2.png',
                    shoppic:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3422724315,104055540&fm=26&gp=0.jpg',
                    discount:[
                        '5减5',
                        '50减25',
                        '100减50',
                        '200减100'
                    ],
                    shoptheme:'麻辣.鲜香 挑战您的味蕾',
                    foodpic:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=312258124,3153780786&fm=26&gp=0.jpg',
                    foodname:'秘制！麻辣大龙虾 鲜香美味的小龙虾',
                    foodprice:'￥16.0',
                    originalprice:'￥32.8'
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
    background-image: url("../../../../static/imgs/banner/banner2.png");
    background-size: cover;
    opacity: .9;
    /* position: relative; */
}
.home-goodshop-btm{
    width: 100%;
    height: 3rem;
    border-radius: 0 0 .2rem .2rem;
}
.home-goodshop-shoppic{
    width: 70%;
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
    padding-left: .2rem;
}
.home-goodshop-shopname{
    color: #fff;
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
