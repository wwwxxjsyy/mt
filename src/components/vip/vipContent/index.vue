<template>
  <div class="vip-content">
    <div class="immediately">
        <div class="vip-right">
            <div class="vip-logo">
            <img src="../../../assets/img/vipImg/vip.png" alt ="">
            <span class="mt-vip">美团会员</span>
            </div>
            <h2>开通会员，尊享3大特权</h2>
        </div>
        <div class="vip-left">
            <span>低至￥15/月</span>

            <router-link to="/vipOpen" tag="a">立即开通</router-link>
            <!-- <a href>立即开通</a> -->
        </div>
    </div>

    <div class="vip-mttx">
      <img src="../../../assets/img/vipImg/vip-tx.jpg" alt>
    </div>
<!-- 特权 -->
    <div class="vip-content-text">
        <div class="vip-content-txt">
            <span class="privi">特权1</span>
            <h1>免费得会员红包</h1>
            <p class="vip-common">共<i>6张</i>,可与优惠券叠加使用</p> 
            <img src="../../../assets/img/vipImg/redpacket.png" alt="" class="img1">
        </div>
    </div> 
    <!-- <div class="vip-content-text">
        <div class="vip-content-txt">
            <span class="privi">特权2</span><h1>限时抢购加量包</h1>
            <p class="vip-common">仅限在本期会员有效期内购买、使用</p> 
            <img src="../../assets/img/redpacket.png" alt="" >
        </div>
    </div> 
    <div class="vip-content-text">
        <div class="vip-content-txt">
            <span class="privi">特权3</span><h1>限时抢购加量包</h1>
            <p class="vip-common">会员红包金额升级</p> 
            <img src="../../assets/img/redpacket.png" alt="" >
        </div>
    </div>  -->
    

  </div>
</template>

<script>
export default {
  name: "VipContent"
};
</script>

<style spoced>

.vip-content{
    background: url('../../../assets/img/vipImg/bbg.png')
}
.immediately{
    height: 3rem;
    background: url('../../../assets/img/vipImg/bqc.9.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 0.2rem;
    display: flex;
}
.mt-vip{
    font-size: 0.28rem;
    color: #dbc0aa;
 
}
.vip-right img{
    width: 0.3rem;
    height: 0.3rem;
}
.vip-right h2{
    color: #dbc0aa;
    font-size: 0.36rem;
    font-weight: 500;
    /* margin-top: 0.1rem; */
    margin-left: 0.25rem;
    line-height: 0.8rem;
}
.vip-logo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    align-items: center;
    /* line-height: 0.5rem; */
    padding-top: 0.4rem;
    padding-left: 0.2rem;
}
.vip-logo img{
    
    margin-right: 0.1rem;

}
.vip-left span{
    font-size: 0.2rem;
    color:white;
    display: block;
    width: 1.4rem;
    height: 0.4rem;
    background: #ec6b51;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 0.5rem;
    margin-top: 0.4rem;
    margin-left: 0.7rem;
}
.vip-left span::after{
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 0.1rem solid transparent;
    border-top-color: #ec6b51;
    margin-left: 0.6rem;
}
.vip-left a{
    display: block;
    background: linear-gradient(to right, #d2a88b,#ede0d0);
    width: 1.8rem;
    height: 0.6rem;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 0.6rem;
    color: #573c29;
    font-size: 0.26rem;
    font-weight: 700;
    margin-top:0.1rem;
    margin-left: 0.5rem;
}

.vip-mttx {
  height: 1.8rem;
  background: white;
  margin-top: -1rem;

  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}
.vip-mttx img {
  width: 7.12rem;
  height: 100%;
  display: block;
  margin: 0 auto;
  /* margin: 0 0.2rem; */
  padding-bottom: 0.2rem;
}
/* 特权 */
.vip-content-text{
    background: white;
}
.vip-content-txt{
    padding-top: 0.3rem;
}
.vip-content-txt h1{
    display: inline;
    /* margin-top: .5rem; */
}
.vip-content-txt .privi{
    display: inline-block;
    height: 0.37rem;
    line-height: 0.37rem;
    background: #1b252f;
    color: #e3cdbc;
    font-size: 0.22rem;
    border-radius: 0.1rem;
    margin-left: 0.2rem;
    padding: 0.02rem 0.1rem;
}
.vip-content-txt h1{
    font-size: 0.34rem;
    font-weight: 600;
    color: #33312e;
    /* margin-left: 0.2rem; */
}
.vip-content-txt p{
    margin: 0.1rem 0.2rem;
    font-size: 0.22rem;
    color: #888888;
}
.vip-content-txt p i{
    color: #bb8f71;
}
.vip-content-text .img1{
    margin: 0.2rem;
    width: 7.1rem;
}
</style>
