<template>
    <div class="vip-content-text">
        <div class="vip-content-txt">
            <span class="privi">特权3</span><h1>会员红包金额升级</h1>
            <p class="vip-common">会员红包可以在以下商家升级成更大金额的红包</p> 
            <ul class="oul">
                <li v-for="(item,index) in shopList" :key="index">
                   <div class="price">
                       <span>{{item.money}}</span>无门槛
                   </div>
                   <div class="shops">
                       <img :src="item.imgs" alt="">
                       <span>{{item.names}}</span>
                   </div>
                </li>
            </ul>
             
        </div>

    
    </div>
    
</template>

<script>
export default {
    name:'VipContentshop',
    data(){
        return{
            shopList:[
                {
                    money:'￥7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                {
                    money:'￥7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                {
                    money:'￥7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                }
            ]
        }
    }
}
</script>

<style scoped>
.vip-content-text{
    background: #f2f2f2;

}
ul>li{
    display: block;
     width: 33%;
    height: 2.7rem;
  
    background: url('../../../assets/img/vipImg/bgc_wps.png') no-repeat;
      background-size: 100% 100%;
}
.price{
    font-size: 0.3rem;
    color: #777777;
    text-align: center;
    margin-bottom: 0.1rem;
}
.price span{
    font-size: 0.4rem;
    color: #e85b4d;
}
.shops>img{
    width: 1.5rem;
    height: 1.2rem;
    margin-top: 0.1rem;
}
.oul{
    display: flex;
}
.oul>li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0.2rem;
}
.shops{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.shops>span{
    overflow:hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
    width:1.9rem;
    font-size: 0.3rem;
    color: #33312e;
}
</style>
