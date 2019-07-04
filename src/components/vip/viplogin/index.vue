<template>
    <div class="vipLogin">
        <div class="vipLogin-content">
            <!-- header -->
            <div class="vipLogin-header" >
                <div class="headerBar" :class="{Active:isTrue}">
                    <span>会员</span>
                    <!-- 这里需要跳转到购买记录 -->
                    <!-- <a href="#">购买记录</a> -->
                    <router-link tag='a' to='viphistory'>购买记录</router-link>
                </div>
                

            </div>
            <!-- 会员头像信息 -->
            <div class="vip-bg">
                <div class="user-photo">
                    <a href="#"><img src="../../../assets/img/vipImg/vip.png" alt=""></a>
                    <div class="user">
                        <img src="../../../assets/img/vipImg/vip.png" alt="">
                        <span>
                            美团会员
                        </span>
                        <i class="iconfont icon-wenhao"></i>
                        <p>有效期到2019年7月17号</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 美团腾讯会员 -->
        <div class="vip-mttx">
            <img src="../../../assets/img/vipImg/vip-tx.jpg" alt>
        </div>
        <!-- 会员权益 -->
        <div class="vipLogin-foot">
            <div class="vipLogin-redPacket">
                <div class="vipLogin-left-common">
                    <h1>会员红包</h1>
                    <span>可与其他优惠叠加使用</span>
                </div>
                <div class="vipLogin-right">
                    <!-- 剩余<span>5<i>/6张</i></span> -->
                    <!-- 需要跳转到剩余的红包 -->
                    <!-- <i class="iconfont icon-qianjin"></i> -->
                    <router-link tag='a' to="vipredpack" >
                        剩余<span>6<i>/6张</i></span>
                    <!-- 需要跳转到剩余的红包 -->
                    <i class="iconfont icon-qianjin"></i>
                    </router-link>
                </div>
                <!-- <router-link tag='div' to='vipredpacket'>
                    剩余<span>5<i>/6张</i></span>
                    需要跳转到剩余的红包
                    <i class="iconfont icon-qianjin"></i>
                </router-link> -->
            </div>
            <div class="vipLogin-exclusive">
                <img src="../../../assets/img/vipImg/packet.png" alt="">
                <img src="../../../assets/img/vipImg/packet.png" alt="">
            </div>
            <div class="vipLogin-redpacket-limit">
                <div class="vipLogin-left-common toTop">
                    <h1>限时抢购加量包</h1>
                    <span>仅限在本期会员有效期内购买、使用</span>
                    <!-- 点击事件 @click="handlePay-->
                    <ul class="redPacket-list" >
                        <li @click="changeShow" v-for="(item,index) in listImages" :key="index">
                            <img :src="item.image">
                        </li>  
                    </ul>
                    <!-- 点击弹出支付框 -->
                </div>
            </div>
            <!-- 会员红包升级 -->
            <div class="vipLogin-redUp">
                <div class="vipLogin-left-up">
                    <h1>会员红包金额升级</h1>
                    <span>以下商家支持红包金额升级</span>  
                    <ul class="shoplist-up" style="margin-top:0.1rem;">
                        <li v-for="(item,index) in shopList" :key="index">
                            <div class="left">
                                 <!-- <img src="http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg" alt=""> -->
                            </div>
                            <div class="center">
                                <div class="shopName">
                                    <h1>{{item.shopsName}}</h1><i class="iconfont icon-qianjin"></i>
                                </div>
                                <span class="center-one"><i class="iconfont icon-star_full"></i>{{item.stars}}</span>
                                月售
                                <span class="saleNum">{{item.sales}}</span>
                                <p><i>优惠可叠加</i>  <span>{{item.discounts}}</span></p>
                            </div>
                            <div class="right">
                                <div class="right-price">
                                    ￥<span>5</span><i class="iconfont icon-right-arrow"></i>￥<span class="priceP">{{item.price}}</span>
                                </div>
                                <a href="#">升级</a>
                                <span class="right-last">需1张会员红包</span>
                            </div>
                          
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <van-popup v-model="show"  position="bottom" :style="{ height: '56%'}">
            <div class="show-content">
                <div class="show-header">
                    <h1>购买加量包</h1>
                    <i class="iconfont icon-X1" @click="handleClose"></i>
                </div>
                <div class="show-img">
                    <img src="../../../assets/img/vipImg/redpack.png" alt="">
                </div>
                <div class="details">
                    <div class="sale-pricr">
                        <p>售卖价</p>
                        <div class="sale-pricr-left">
                            <span>限时特惠</span>
                            <i>￥9</i>
                            ￥5
                        </div>
                    </div>
                    <div class="pack">
                        <span>加量包抵扣券</span>
                        <i>暂无可用</i>
                    </div>
                </div>
                <div class="show-page-pay">
                    <div class="pay-bg">
                        <i class="iconfont icon-tanhao"></i>
                        <span>购买后<i>27天内</i>可用</span>
                    </div>
                    <div class="vipPay-content">
                            <span><i>已优惠</i>￥4</span>
                            <!-- <a href="#">去支付</a> -->
                            <a href="#">去支付￥<i>5</i></a>
                    </div> 
                </div>
                        
            </div>
        </van-popup>
    </div>
</template>

<script>
import { Popup } from 'vant';
export default {
    name:'VipLogin',
    data() {
        return {
           listImages:[
               {
                   image:require('../../../assets/img/vipImg/redpack.png')
               },
                {
                   image:require("../../../assets/img/vipImg/redpack-1.png")
               },
                {
                   image:require("../../../assets/img/vipImg/redpack.png")
               },
                {
                   image:require("../../../assets/img/vipImg/redpack.png")
               },
                {
                   image:require("../../../assets/img/vipImg/redpack.png")
               }
           ],
           isTrue:false,
             shopList:[
               {
                   shopsName:'钟记老砂锅',
                   stars:'4.3',
                   sales:721,
                   discounts:'满20减3;满30减5',
                   price:'7'
               },
                {
                   shopsName:'钟记老砂锅',
                   stars:'4.3',
                   sales:721,
                   discounts:'满20减3;满30减5',
                   price:'7'
               },
               {
                   shopsName:'钟记老砂锅',
                   stars:'4.3',
                   sales:721,
                   discounts:'满20减3;满30减5',
                   price:'7'
               },
               {
                   shopsName:'钟记老砂锅',
                   stars:'4.3',
                   sales:721,
                   discounts:'满20减3;满30减5',
                   price:'7'
               },
               {
                   shopsName:'钟记老砂锅',
                   stars:'4.3',
                   sales:721,
                   discounts:'满20减3;满30减5',
                   price:'7'
               },
               {
                   shopsName:'钟记老砂锅',
                   stars:'4.3',
                   sales:721,
                   discounts:'满20减3;满30减5',
                   price:'7'
               }
           ],
           show:false
        }
    },components:{
        "van-popup":Popup
    },
    methods: {
        changeShow(){
            this.show = true;
        },
        handleClose(){
            this.show = false;
        },
          handleScroll(){
            this.scrollTop = document.documentElement.scrollTop;
            if(this.scrollTop>70){
                this.isTrue = true
            }else{
                 this.isTrue = false
            }
        }
    },
    mounted() {
        window.addEventListener("scroll",this.handleScroll)
    },
}
</script>

<style scoped>
.vipLogin{
    width: 100%;
    background: #efefef;
    padding-bottom: 1rem;
}
.vipLogin-content{
    height: 4.9rem;
    background: url('../../../assets/img/vipImg/bbg.png');
}
.vipLogin-header{
    display:inline-flex;
    justify-content: flex-end;
    width: 100%;
    /* margin: 0.4rem 0; */
    height: 1.3rem;
    line-height: 1.3rem;
}
.vipLogin-header a{
    margin-top: 0.1rem;
    margin-right: 0.15rem;
}
.vipLogin-header span{
    font-size:0.41rem;
    color: #323232;
    margin-right: 2.3rem;
}
.headerBar{
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.user-photo{
    padding: 0.6rem 0;
    display: flex;
}
.user-photo img{
    display: inline-block;
    width: 0.3rem;
}
.user-photo a{
    display: block;
    width: 1rem;
    height: 1rem;
    background: #46413d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.3rem;
    margin-right:0.15rem;
    margin-left: 0.25rem;
    
}
.user-photo a img{
    display: block;
    width: 0.35rem;

}
.vip-bg{
    background: url('../../../assets/img/vipImg/bqc.9.png');
    background-size: 100% 100%;
    color: #897a77;
}
.user span{
    font-size: 0.32rem;
    color: #dab49d;
    
}
.user p{
    margin-top: 0.1rem;
    font-size: 0.3rem;
}
.icon-wenhao{
    font-size: 0.36rem;
}
.vip-mttx {
  height: 1.8rem;
  background: #ededed;
  margin-top: -1.6rem;

  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}
.vip-mttx img {
  width: 7rem;
  display: block;
  margin: 0 auto;
}
.vipLogin-foot{
    padding: 0 0.25rem;
    color: #302f2d;
}
.vipLogin-redPacket{
    width: 100%;
    display: flex;
    justify-content: space-between;

}
.vipLogin-left-common h1{
    font-size: 0.34rem;
}
.vipLogin-left-common span{
    color: #868686;
    font-size: 0.24rem;
    padding-top:0.1rem;
}
.vipLogin-right{
    font-size: 0.3rem;
    line-height: 0.8rem;
}
.vipLogin-right a{
    color: #313131;
}
.vipLogin-right a span{
    font-size: 0.36rem;
    font-weight: 600;
    /* color:black;  */

}
.vipLogin-right a span i{
    font-size: 0.28rem;
    color: #868686;   
}
.vipLogin-right a .iconfont{
    font-size: 0.3rem;
    color:black; 
    font-weight: 700;
}
.vipLogin-exclusive{
    display: flex;
    justify-content: space-between;
    margin-top: 0.15rem;
}
.vipLogin-exclusive img{
    width: 3.4rem;
    height: 1.8rem;
}
.toTop{
    margin-top: 0.2rem;
}


.redPacket-list{
    display: flex;
    overflow-x: auto;

}
.redPacket-list>li{
    /* padding-left :0.25rem; */
    /* margin: 0 .2rem; */
    margin-right: 0.2rem;
}
.redPacket-list>li>img{
    width: 2.7rem;
    height: 2.3rem;
    margin-top: 0.15rem;
}
/* 会员红包升级 */
.vipLogin-redUp{
    margin-top: 0.2rem;
}
.vipLogin-left-up h1{
    font-size: 0.34rem;
}
.vipLogin-left-up span{
     color: #868686;
    font-size: 0.22rem;
    padding-top:0.075rem;
}
.shoplist-up>li{
    display: flex;
    background: #ffffff;
    width: 7rem;
    height: 1.6rem;
    border-radius: 0.2rem;
    margin-bottom: 0.2rem;
    align-items: center;
    justify-content: space-between;
    position: relative;
}
.shoplist-up>li::before{
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: -6%;
    right: 26%;
    background: #efefef;
}
.shoplist-up>li::after{
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    bottom: -5%;
    right: 26%;
    background: #efefef;
}
.left{
    width: 1rem;
    height: 1rem;
    border-radius: 0.2rem;
    background:url('http://p0.meituan.net/waimaipoi/9c7d800065e94a2a6863b31729365a4810966.jpg') center;
    background-size: 1.3rem 1.1rem;
    margin-left: 0.2rem;
}
.center{
    margin-left: 0.3rem;
}
.shopName{
    display: flex;
    width: 3rem;
}
.shopName h1{
    font-size: 0.3rem;
    color: #343635;
    width: 2.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.shopName .icon-qianjin{
    font-size: 0.3rem;
    margin-top: 0.05rem;
    margin-left: -0.2rem;
}
.center .center-one{
    color: #ffcf66;
    /* margin-right: 0.2rem; */   
}
.center-one i{
    margin-right: 0.05rem;
}
.center p{
    width: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
}
.center p span{
    width: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.center p i{
    display: block;
    width: 1.25rem;
    height: 0.35rem;
    color: #e45d49;
    background: #ffe4f1;
    text-align: center;
    border: 2px solid #fecdd0;
    margin-top: 0.068rem;
    margin-right: 0.05rem;
}
.right{
    width: 2rem;
    height: 100%;
    text-align: center;
    /* background: #302f2d; */
}
.right::after{
    content: "";
    width: 1px;
    height: 1.15rem;
    position: absolute;
    top: 12.5%;
    left:72%;
    border-left: 1px dashed #f7f7f7;
}
.right-price{
        text-align: center;
        font-size: 0.4rem;
        color: red;
        margin-top: 0.1rem;
}
.right-price span{
    color: red;
    font-size: 0.36rem;
}
.right-price .icon-right-arrow{
    font-size: 0.25rem;
    margin-left: 0.1rem;
    color: #f8ada8;
    /* background: linear-gradient(to right, #ee5448,#f8ada8);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent; */

}
.right-price .priceP{
    color: red;
    font-size: 0.42rem;

}
.right a{
    display: block;
    margin: 0 auto;
    width: 1.4rem;
    height: 0.45rem;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 0.45rem;
    color: #fff9ff;
    background: linear-gradient(to right, #ee5448,#f8ada8);
    font-size: 0.2rem;
    margin-bottom: 0.05rem;
}
.right .right-last{
    font-size: 0.18rem;
   text-align: center;
}

/* show页面 */
.show-content{
    background: #fefefe;
    padding: 0 0.2rem;
}
.show-header{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 0.8rem;
    border-bottom: 0.03rem solid #efedee;
}
.show-header h1{
    font-size: 0.34rem;
    margin-right: 2.3rem;
}
.show-header .icon-X1{
    font-size: 0.4rem;
    color: #cdcdcd;
}
.show-img{
    border-bottom: 0.03rem solid #efedee;
}
.show-img img{
    margin: 0.2rem auto;
    width: 2.8rem;
    height: 2.1rem;
}
.sale-pricr{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 0.6rem;
}
.sale-pricr p{
    font-size: 0.28rem;
}
.sale-pricr-left{
    display: flex;
    /* font-size: 0.3rem; */
}
.sale-pricr-left span{
    display: block;
    width: 1.2rem;
    text-align: center;
    border-radius: 0.1rem;
    color: #fffaf4;
    margin-bottom: 0.05rem;
    margin-right: 0.05rem;
    background: linear-gradient(to right, #ff8350,#ff5361);
}
.sale-pricr-left i{
    text-decoration:line-through;
    color: #909291;
    font-size: 0.24rem;
    margin: 0 .05rem;
}
.pack{
    display: flex;
    justify-content: space-between;
    font-size: 0.28rem;
    margin-top: 0.15rem;
}
.pack i{
    color: #969696;
}
.show-page-pay{
    height: 1.1rem;
    background: #fff6ef;
    border-radius: 0.1rem;
    margin-top: 0.2rem;
}
.pay-bg {
    text-align: center;
    color: #513f35;
    /* margin-top: .5rem; */
    padding-top: .15rem;
    padding-bottom: .05rem;
}
.pay-bg span i{
    color: #ee5448;
    
}
.pay-bg .icon-tanhao{
    font-size: .26rem;
}
.vipPay-content{
    width: 100%;
    height: .9rem;
    display: flex;
    justify-content: space-between;

 
}
.vipPay-content>span{
    color: #e85b4d;
    line-height: 0.9rem;
    /* text-align: center; */
    padding-left: 0.66rem;
    display: block;
    background: #322d2a;
    width: 68%;
    border-top-left-radius: 70px;
    border-bottom-left-radius: 70px;
    font-size: .22rem;
    font-weight: 700;
    font-size: .22rem;
     color:#f7f6f4;
}

.vipPay-content>a{
    color: #4c311e;
    line-height: 0.9rem;
    text-align: center;
    display: block;
    width: 32%;
    background: linear-gradient(to right, rgba(231,191,166,0.3), rgba(214,154,118,1));
     border-top-right-radius: 70px;
    border-bottom-right-radius: 70px;
    font-size: .3rem;
}
.vipPay-content>a>i{
    font-size: .42rem;
}
.Active{
    background: #ffffff;
    border-bottom: none;
}
</style>
