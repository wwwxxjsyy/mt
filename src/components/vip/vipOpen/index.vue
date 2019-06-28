<template>
    <div class="vip-open">
        <div class="vip-open-header">
            <div class="vip-back">
               <i class="iconfont icon-fanhui" @click="handleBack"></i> 
               <span>开通会员</span>
            </div>
            <div class="user-photp">
                <a href="#"><img src="../../../assets/img/vipImg/vip.png" alt=""></a>
                <div class="user">
                    <span>185****1777</span>
                    <p>您当前还不是会员</p>
                </div>
            </div>             
        </div>
        <div class="monthCard">
            <div class="monthCard-content">
                <div class="card">
                    <span>月卡</span>
                    <h1><i>￥</i>15</h1>
                </div>
                <span><img src="../../../assets/img/vipImg/tanhao.png" alt="">若当月已是会员，续费的红包权益会在下月发放</span>
            </div>
            <div class="monthCard-title">
                <div class="monthCard-title-city">
                    <p class="city-left">城市使用范围</p>
                    <p class="city-right">全国通用</p>
                </div>
                <div class="monthCard-title-packet">
                    <p class="packet-left">会员抵扣红包</p>
                    <p class="packet-right">暂无抵用券可用</p>
                </div>
            </div>
        </div>
        <div class="vipRule">
            <a href="#">会员规则</a>
            <span>|</span>
            <a href="#">会员服务条款</a>
        </div>
        <div class="vipPay">
            <div class="vipPay-content">
                <span><i>月卡仅需</i>￥15</span>
                <!-- <a href="#">去支付</a> -->
                <router-link to='viplogin' tag='a'>去支付</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'VipOpen',
    data() {
        return {
            
        }
    },
    methods: {
        handleBack(){
             this.$router.back();
        }
    },
}
</script>

<style scoped>
#app{
    background: gray;
}
/* .vip-open{
    background: #ffffff;
} */
.vip-open-header{
    background:#1b1714;
    height: 2.3rem;
}
.vip-open-header>p{
    font-size: 0.22rem;
    color: #868686;
}
.vip-back{
    color: #fefffe;
    padding-top: 0.4rem;

    align-items: center;
    display: flex;
    justify-content:flex-start;
}
.vip-back span{
    font-size: 0.34rem;
    margin-left: 2.5rem;
    
}
.icon-fanhui{
    font-size: 0.34rem;
     margin-left: 0.2rem; 
}
.user-photp{
    display: flex;
    margin-top: 0.2rem;
}
.user-photp a{
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    background: #46413d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 0.2rem; */
    margin-left: 0.25rem;
}
.user-photp a img{
    width: 0.35rem;
    display: block;
    /* margin: 0.2rem auto; */

    width: 0.35rem;
    height: 0.35rem;
}
.username{
    color: #fefffe;
    font-size: 0.3rem;
    padding-top: 0.1rem;
}
.user{
    margin-left: 0.2rem;
}
.user span{
    font-size: 0.3rem;
    color: #fbfcf7;
}
.user p{
    font-size: 0.21rem;
    color:#939393;
}

.monthCard{
  height: 6rem;
  background: #ffffff;
  border-bottom: 0.01rem solid #eeeeee;
}
.monthCard-content{
    height: 4rem;
    border-bottom: 0.01rem solid #eeeeee;
}
.monthCard-content span{
    font-size: 0.26rem;
    color: #a1a1a1;
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
}
.monthCard-content span img{
    margin-left: 0.2rem;
    /* margin-top: 0.3rem; */
    padding-right:0.1rem;
}
.card{
    margin-left: 0.2rem;
    margin-top: 0.3rem;
    width: 2rem;
    height: 3rem;
    background: linear-gradient(to right, rgba(248,243,236,0), rgba(241,229,221,1));
    border-radius: 0.1rem;
    border:0.03rem solid #e9d9cd;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
}
.card span{
    font-size:0.35rem ;
    color: #9c7a5f;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
}
.card h1{
    font-size:0.5rem ;
    color: #784d2d;
    font-weight: 700;
}
.card h1 i{
    font-size: 0.34rem;
    font-weight: 700;
}
.monthCard-title{
    margin:0 0.2rem;
}
.monthCard-title-city{
    display: flex;
    height: 1rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.01rem solid #eeeeee;
}
.city-left{
    font-size: 0.34rem;   
}
.city-right{
    font-size: 0.3rem;
    color: #999999;
}
.monthCard-title-packet{
    display: flex;
    height: 1rem;
    align-items: center;
    justify-content: space-between;
}
.packet-left{
    font-size: 0.34rem;
}
.packet-right{
    font-size: 0.3rem;
    color: #999999;
}
.vipRule{
    text-align: center;
    margin-top: 0.2rem;
    font-size: 0.24rem;
}
.vipRule span{
padding: 0 0.1rem;
}

.vipPay{
    width: 100%;
    position: fixed;
    bottom: 0.1rem;
    display: flex;
    justify-content: center;
        padding: 0 36px;
  
}
.vipPay-content{
    width: 100%;
    height: 0.76rem;
    display: flex;
    justify-content: space-between;

 
}
.vipPay-content>span{
    color: #e85b4d;
    line-height: 0.76rem;
    /* text-align: center; */
    padding-left: 0.66rem;
    display: block;
    background: #ffffff;
    width: 68%;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
    font-size: .3rem;
    font-weight: 700;
}
.vipPay-content>span>i{
    color:#9a9a9a;
    padding-right: 0.2rem;
    font-size: .22rem;
}
.vipPay-content>a{
    color: #573c29;
    line-height: 0.76rem;
    text-align: center;
    display: block;
    width: 32%;
    background: linear-gradient(to right, rgba(248,243,236,0), rgba(208,163,132,1));
     border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    font-size: .34rem;

}
</style>
