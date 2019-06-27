<template>
    <div class="discount">
         <h2>优惠专区</h2>
        <ul>
            <li class="home-discount-top" v-for="(items,index) in discountlist" :key="index" :style=" 'background-image :  url( ' + items.backgroundimg+' ) ' ">     
                <p class="home-discount-date">{{items.title}}</p>
                <span>{{items.name}}</span>
                <p class="home-discount-goodshop">{{items.discount}}</p>     
            </li>
            <li class="home-discount-btm" v-for="(items,index) in moreslist" :key="index+99">
                <div class="home-discount-btm-title">
                     <b>{{items.name}}</b>
                     <span>{{items.title}}</span>
                </div>
                <div class="home-discount-btm-pic">
                    <img :src="items.imgs" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Discount",
    data(){
        return{
            discountlist:[
                {
                    title:'天天特惠',
                    name:'今夜不打烊',
                    discount:'满减两折起',
                    backgroundimg:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=130943566,2416302647&fm=11&gp=0.jpg'
                },
                {
                    title:'餐餐特价',
                    name:'经典人气宵夜',
                    discount:'精选小食5折',
                    backgroundimg:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=130943566,2416302647&fm=11&gp=0.jpg'
                }
            ],
            moreslist:[
                {
                    name:"安全可靠",
                    title:'24小时送药',
                    imgs:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561489353908&di=e28e9547f53e88b205d37cb1a068810f&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn4%2Fjfs%2Ft8962%2F104%2F1404008905%2F281435%2F522b649c%2F59b8a529N2164d192.jpg'
                },
                {
                    name:"必吃",
                    title:'6折觅好味',
                    imgs:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561488566784&di=f6c541996682ed8fd53a16b0d6a62376&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F22%2F20150422H2139_YwBTZ.thumb.224_0.jpeg'
                },
                {
                    name:"生日花礼",
                    title:'鲜花低至99',
                    imgs:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1003086202,1774654568&fm=15&gp=0.jpg'
                },
                {
                    name:"跑腿帮买",
                    title:'24小时为您服务',
                    imgs:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561488566784&di=f6c541996682ed8fd53a16b0d6a62376&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F22%2F20150422H2139_YwBTZ.thumb.224_0.jpeg'
                }
            ]
        }
    }
}
</script>

<style scoped>
.discount{
    width: 100%;
    height: 5rem;
}
.discount h2{
    font-weight: bold;
    width: 100%;
    height: 1rem;
    font-size: .3rem;
    line-height: 1rem;
    margin-top: .1rem;
}
.discount ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.discount ul .home-discount-top{
    width: 48%;
    height: 2rem;
    background: yellowgreen;
    flex-direction: column;
    background-size: cover;
    border-radius: .1rem;
}
.discount ul .home-discount-btm{
    width: 24%;
    height: 2rem;
    background: #fff;
    margin-top: .2rem;
}
.home-discount-date{
    width: 1.2rem;
    height: .4rem;
    padding-left: .1rem;
    background: rgb(74, 66, 64);
    line-height: .4rem;
    color: rgb(234, 203, 144);
    border-radius: .1rem 0 .2rem 0;
    opacity: .9;
}
.home-discount-top span{
    display: inline-block;
    /* width: 1.5rem; */
    height: .4rem;
    font-size: .25rem;
    color: #fff;
    line-height: .4rem;
    padding-left: .1rem;
    padding-right: .1rem;
    margin-top: .3rem;
    background: rgb(73, 60, 51);
    opacity: .8;
    border-radius:0 0 .2rem 0 ;
}
.home-discount-top .home-discount-goodshop{
    width: 1.3rem;
    height: .3rem;
    font-size: .19rem;
    background: rgb(255, 73, 6);
    opacity: .8;
    color: #fff;
    border-radius:0 0 .2rem 0 ;
    padding-left: .1rem;
}
.home-discount-btm-pic img{
    width: 1.2rem;
    height: .98rem;
    float: right;
    margin-top: .3rem;
}
.home-discount-btm-title{
    display: flex;
    flex-direction:column;
}
.home-discount-btm-title b{
    padding-left: .1rem;
    line-height: .5rem;
    font-weight: bolder;
    font-size: .25rem;
}
.home-discount-btm-title span{
    padding-left: .1rem;
    font-size: .2rem;
}
</style>
