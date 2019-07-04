<template>
    <div class="vip-content-text">
        <div class="vip-content-txt">
            <span class="privi">特权3</span>
            <h1>会员红包金额升级</h1>
            <p class="vip-common">会员红包可以在以下商家升级成更大金额的红包</p> 
            <div class="vip-footer">
                <ul class="oul">
                    <li v-for="(item,index) in shopList" :key="index">
                        <div class="price">
                            <span> <i>￥</i>{{item.money}}</span>无门槛
                        </div>
                        <div class="shops">
                            <a href=""><img :src="item.imgs" alt=""></a>
                            <span>{{item.names}}</span>
                        </div>
                    </li>
                </ul> 
                <span>更多外卖可到美团外卖首页查看</span>
            </div>
        </div>
        <div class="vip-open" v-show="flag">
            <!-- <a href=""></a> -->
            <router-link to='vipOpen' tag='a'><span>低至￥5/月</span>立即开通</router-link>
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
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                 {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                 {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                 {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                 {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                 {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                 {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
                {
                    money:'7',
                    imgs:"http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg",
                    names:'御品轩(枫叶新都市店)',
                    path:''
                },
            ],
            flag:true,
            timer:null
        }
       
    },
    methods: {
        handleScroll(){
            this.scrollTop = document.documentElement.scrollTop
            this.flag=false
            clearTimeout(this.timer)
            this.timer = setTimeout(()=>{
                this.flag=true;
            },1000)
        }
    },
    mounted() {
        window.addEventListener("scroll",this.handleScroll)
            // console.log(document.documentElement.scrollTop)
    },
    created() {
        
    },
}
</script>

<style scoped>
.vip-content-text{
    background: #f3f4f4;

}
ul>li{
    display: block;
     width: 30%;
    height: 2.7rem;
  
    background: url('../../../assets/img/vipImg/bgc_wps.png') no-repeat;
      background-size: 100% 100%;
}
.price{
    font-size: 0.2rem;
    color: #777777;
    height: 0.6rem;
    width: 2rem;
    line-height: 0.6rem;
    text-align: center;
    margin-bottom: 0.2rem; 
    border-bottom: 0.02rem dashed #e9e9e9;
}

.price span{
    font-size: 0.36rem;
    color: #e85b4d;
    margin-right: 0.05rem;
   
}
.price span i{
    font-size: 0.26rem;
    /* color: #777777; */
}

.oul{
    display: flex;
    justify-content:flex-start;
    /* align-items: center; */
    flex-wrap: wrap;
    position: relative;
    padding: 0 0.2rem;
    background: #f2f2f2;
}

.oul>li{
    display: flex;
    background: #ffffff;
    width: 2.1rem;
    /* height: 3rem; */
    border-radius: 0.1rem;
    flex-direction: column;
    align-items: center;
     margin: 0.1rem 0.1rem 0.2rem 0.15rem; 
     position: relative;
}
.oul>li::before{
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 18%;
    right: -5%;
    background: #f2f2f2;
}
.oul>li::after{
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 18%;
    left: -5%;
    background: #f2f2f2;
}
.shops{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.shops a img{
    width: 1.7rem;
    height: 1.2rem;
}
.shops>span{
    overflow:hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
    width:1.9rem;
    font-size: 0.24rem;
    color: #33312e;
    margin-top: 0.15rem;
    text-align: right;
}
.vip-footer{
    height: 1rem;
    text-align: center;
    font-size: 0.2rem;
    color: #777777;
}
.vip-open{
    position: fixed;
    bottom: 1rem;
    width: 7rem;
    height: 1rem;
    background: #322d29;
    margin-left: 0.2rem;
    border-radius: 0.7rem;
    /* text-align: center; */
    /* line-height: 1rem; */
}
.vip-open a {
    display: flex;
    width: 100%;
    height: 1rem;
    justify-content: center;
    align-items: center;
    color: #e4c4ac;
}
.vip-open a span{
    /* display: block; */
    width: 1.2rem;
    color: #3f362e;
    font-size: 0.2rem;
    border-radius: 0.1rem;
    text-align: center;
    height: 0.35rem;
    line-height: 0.35rem;
    margin-right: 0.1rem;
    background: linear-gradient(to right, rgba(208,164,134,1), rgba(234,219,200,1));
    }
</style>
