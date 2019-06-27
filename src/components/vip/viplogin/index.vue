<template>
    <div class="vipLogin">
        <div class="vipLogin-content">
            <!-- header -->
            <div class="vipLogin-header">
                <span>会员</span>
                <!-- 这里需要跳转到购买记录 -->
                <a href="#">购买记录</a>

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
                    剩余<span>5<i>/6张</i></span>
                    <!-- 需要跳转到剩余的红包 -->
                    <i class="iconfont icon-qianjin"></i>
                </div>
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
                        <li v-for="(item,index) in list" class=" redPacket-pay" :key="index">
                            <span>{{item.price}}</span> x
                            <i>{{item.num}}</i>
                            <p>{{item.money}}</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'VipLogin',
    data() {
        return {
            list:[
                {
                    price:'￥5',
                    num:'2张',
                    money:'9.9',
                },
                 {
                    price:'￥5',
                    num:'2张',
                    money:'9.9',
                },
                 {
                    price:'￥5',
                    num:'2张',
                    money:'9.9',
                },
                 {
                    price:'￥5',
                    num:'2张',
                    money:'9.9',
                }
            ]
        }
    },
}
</script>

<style>
.vipLogin{
    width: 100%;
    height: 100%;
    background: #efefef;
}
.vipLogin-content{
    /* margin: 0 0.2rem; */
    padding: 0 0.25rem;
    /* background: red; */
    height: 4.9rem;
    background: url('../../../assets/img/vipImg/bbg.png')
}
.vipLogin-header{
    display:inline-flex;
    justify-content: flex-end;
    width: 100%;
    margin: 0.4rem 0;
}
.vipLogin-header a{
    margin-right: 0.15rem;
}
.vipLogin-header span{
    font-size:0.41rem;
    color: #323232;
    margin-right: 2rem;
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
    font-size: 0.4rem;
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
  height: 1.5rem;
  display: block;
  margin: 0 auto;
  /* margin: 0 0.2rem; */
  /* padding-bottom: 0.2rem; */
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
    font-size: 0.36rem;
}
.vipLogin-left-common span{
    color: #868686;
    font-size: 0.27rem;
    padding-top:0.1rem;
}
.vipLogin-right{
    font-size: 0.3rem;
    line-height: 0.8rem;
}
.vipLogin-right span{
    font-size: 0.36rem;
    font-weight: 600;
}
.vipLogin-right span i{
    font-size: 0.28rem;
    color: #868686;   
}
.vipLogin-right .iconfont{
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
    /* flex: 1; */
}
.redPacket-list li{
  
    background: url('../../../assets/img/vipImg/redpacket_bg.png') no-repeat;
     background-size: 100% 100%;
     display: block;
     width: 35%;
    height: 2.2rem;

    /* display: flex; */
}
</style>
