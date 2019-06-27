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
<<<<<<< HEAD:src/components/vip/vipContentshop/index.vue
                       <a href=""><img :src="item.imgs" alt=""></a>
                       <span>{{item.names}}</span>
                   </div>
                </li>
            </ul>     
        </div>
        <div class="vip-footer">
            <span>更多外卖可到美团外卖首页查看</span>
        </div>
=======
                       <img :src="item.imgs" alt="">
                       <span>{{item.names}}</span>
                   </div>
                </li>
            </ul>
             
        </div>

>>>>>>> lihao:src/components/vip/vipContent-2/index.vue
    
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
<<<<<<< HEAD:src/components/vip/vipContentshop/index.vue
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
                },
                {
                    money:'￥7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
=======
>>>>>>> lihao:src/components/vip/vipContent-2/index.vue
                }
            ]
        }
    }
}
</script>

<style scoped>
.vip-content-text{
<<<<<<< HEAD:src/components/vip/vipContentshop/index.vue
    background: #f3f4f4;
=======
    background: #f2f2f2;
>>>>>>> lihao:src/components/vip/vipContent-2/index.vue

}
ul>li{
    display: block;
<<<<<<< HEAD:src/components/vip/vipContentshop/index.vue
     width: 30%;
=======
     width: 33%;
>>>>>>> lihao:src/components/vip/vipContent-2/index.vue
    height: 2.7rem;
  
    background: url('../../../assets/img/vipImg/bgc_wps.png') no-repeat;
      background-size: 100% 100%;
}
.price{
    font-size: 0.3rem;
    color: #777777;
    text-align: center;
<<<<<<< HEAD:src/components/vip/vipContentshop/index.vue
    margin-bottom: 0.2rem;
=======
    margin-bottom: 0.1rem;
>>>>>>> lihao:src/components/vip/vipContent-2/index.vue
}
.price span{
    font-size: 0.4rem;
    color: #e85b4d;
}
.shops>img{
<<<<<<< HEAD:src/components/vip/vipContentshop/index.vue
    width: 1.2rem;
    height: 1rem;
=======
    width: 1.5rem;
    height: 1.2rem;
>>>>>>> lihao:src/components/vip/vipContent-2/index.vue
    margin-top: 0.1rem;
}
.oul{
    display: flex;
<<<<<<< HEAD:src/components/vip/vipContentshop/index.vue
    flex-wrap: wrap;
=======
>>>>>>> lihao:src/components/vip/vipContent-2/index.vue
}
.oul>li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
<<<<<<< HEAD:src/components/vip/vipContentshop/index.vue
    margin: 0.1rem 0.1rem 0.2rem 0.15rem; 
    
    /* width: 100%; */
=======
    margin-left: 0.2rem;
>>>>>>> lihao:src/components/vip/vipContent-2/index.vue
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
<<<<<<< HEAD:src/components/vip/vipContentshop/index.vue
.vip-footer{
    height: 1rem;
    text-align: center;
    font-size: 0.2rem;
    color: #777777;
}

=======
>>>>>>> lihao:src/components/vip/vipContent-2/index.vue
</style>
