<template>
<div>
    <div class="mywallet-content">
      <p class="mt-money">美团钱包</p>
      <div class="remind">
        <i class="iconfont">{{"&#xe660;"}}</i>
        <span>为了您的资金安全,请完善实名信息</span>
        <em class="iconfont">{{'&#xe60a;'}}</em>
      </div>
      <div class="balance">
        <router-link to="/Balance" class="balance-left" tag="div">
          <p class="balance-left-money">
            <span>余额(元)</span>
            <span class="iconfont">{{'&#xe60a;'}}</span>
          </p>
          <p class="money">0.00</p>
        </router-link>

        <div class="balance-right">
          <p class="balance-left-money">
            <span>银行卡</span>
            <span class="iconfont">{{'&#xe60a;'}}</span>
          </p>
          <p class="immed">立即绑定安全便捷</p>
        </div>
      </div>
    </div>
    <div class="discount">
      <a href="#" v-for="(item,index) in disList" :key="index">
        <img :src="item.imgUrl" alt>
        <span>{{item.desc}}</span>
      </a>
    </div>
    <div class="borrow">
      <div class="borrow-money">
        <p class="borrow-money-top">
          <img src="../../../assets/minePic/borrow.png" alt>
          <span>借钱</span>
          <i class="iconfont">{{'&#xe60a;'}}</i>
        </p>
        <p class="card">
          <a href="#" class="max-money">
            <span>4,000</span>
            <span>大约可借(元)</span>
          </a>
          <a href="#" class="earn">获取额度</a>
        </p>
      </div>
      <div class="creditList">
        <img src="../../../assets/minePic/credit.png" alt="">
        <img src="../../../assets/minePic/credit.png" alt="">
      </div>
    </div>

    <div class="moreserve">
        <p class="more">更多服务</p>
        <p class="list">
            <a href="#" v-for="(item,index) in serveList" :key="index">
        <img :src="item.imgUrl" alt>
        <span>{{item.desc}}</span>
      </a> 
        </p>
    </div>


    <div class="last">
        <p class="last-top">美团钱包</p>
        <p class="last-bottom">-美团旗下金融服务平台-</p>
    </div>

</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      disList: [
        {
          imgUrl: require("../../../assets/minePic/discount.png"),
          desc: "签到赢现金"
        },
        {
          imgUrl: require("../../../assets/minePic/discount.png"),
          desc: "银行卡立减"
        },
        {
          imgUrl: require("../../../assets/minePic/discount.png"),
          desc: "现金券"
        }
      ],
      serveList:[
        {
          imgUrl: require("../../../assets/minePic/discount.png"),
          desc: "每日1题"
        },
        {
          imgUrl: require("../../../assets/minePic/discount.png"),
          desc: "信用卡还款"
        },   
        {
          imgUrl: require("../../../assets/minePic/discount.png"),
          desc: "美闪支付"
        }, 
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style  scoped>
.mywallet-content {
  padding-top: 1.04rem;
}
.mywallet-content .mt-money {
  font-size: 0.5rem;
  color: black;
}
.mywallet-content .remind {
  margin: 0.86rem 0 0.64rem;
}
.mywallet-content .remind > i {
  font-size: 0.3rem;
  color: #f18d2f;
}
.mywallet-content .remind > span {
  font-size: 0.3rem;
  color: #363636;
}
.mywallet-content .remind > em {
  font-size: 0.4rem;
  color: black;
  float: right;
}

.mywallet-content .balance {
  width: 100%;
  height: 3rem;
  display: flex;
  background: #01cfcf;
  font-size: 0.19rem;
  align-items: center;
  padding: 0 0.6rem 0 0.3rem;
  border-radius: 0.18rem;
}
.mywallet-content .balance .balance-left {
  margin-right: 1.65rem;
}
.mywallet-content .balance .balance-left .balance-left-money {
  display: flex;
  margin-bottom: 0.2rem;
}
.mywallet-content .balance .balance-left-money > span {
  font-size: 0.3rem;
}
.mywallet-content .balance .balance-left .money {
  font-size: 0.58rem;
}
.mywallet-content .balance .balance-right .immed {
  font-size: 0.25rem;
  width: 2.8rem;
  height: 0.7rem;
  text-align: center;
  line-height: 0.7rem;
  border: 1px solid #fff;
  border-radius: 0.35rem;
}
.mywallet-content .balance .balance-right .balance-left-money {
  display: flex;
  margin-bottom: 0.25rem;
}

.discount {
  margin: 0.7rem 0.52rem 0.47rem 0.42rem;
  display: flex;
  justify-content: space-between;
}
.discount a {
  width: 1.8rem;
  height: 1.6rem;
  text-align: center;
}
.discount a img {
  width: 0.9rem;
  height: 0.7rem;
  margin: 0 auto;
  margin-bottom: 0.4rem;
}
.discount a > span {
  font-size: 0.28rem;
}

.borrow .borrow-money {
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  font-size: 0.19rem;
  padding: .42rem;
  border-radius: 0.18rem;
}
.borrow .borrow-money .borrow-money-top{
    margin-bottom: .5rem;
    display: flex;
}
.borrow .borrow-money .borrow-money-top>img{
    width: .4rem;
    height: .4rem;
    margin-right:.26rem;
}
.borrow .borrow-money .borrow-money-top>span{
    font-size:.32rem;
    color:black;
}
.borrow .borrow-money .borrow-money-top>i{
    font-size:.4rem;
    color:black;
    margin-left: 4.4rem;
}
.borrow .borrow-money .max-money>span:first-child{
    font-size:.46rem;
    color: black;
}
.borrow .borrow-money .max-money>span:last-child{
    font-size:.36rem;
    color: #929292;
}
.creditList{
    display: flex;
    margin-top:.4rem;
    justify-content: space-between;
}
.creditList>img{
    width:3.4rem; 
    height: 1.9rem;
}

.moreserve .more{
    font-size: 0.5rem;
  color: black;
  margin:.56rem 0;
}
.moreserve .list{
    display: flex;
    margin-left:.36rem;
}
.moreserve .list>a{
    width: 1.8rem;
    height: 1.6rem;
    text-align: center;
}
.moreserve a img {
  width: 0.9rem;
  height: 0.7rem;
  margin: 0 auto;
  margin-bottom: 0.4rem;
}
.moreserve a > span {
  font-size: 0.28rem;
}

.last{
    margin-top: 1.11rem;
    width: 100%;
    text-align: center;
}
.last .last-top{
    font-size:.4rem;
    color:#959595;
    margin-bottom: .2rem;
}
.last .last-bottom{
    font-size:.3rem;
    color:#b5b5b5; 
}

.borrow .borrow-money .earn{
      display: inline-block;
    width: 2.2rem;
    height: .75rem;
    border-radius: .35rem;
    text-align: center;
    line-height: .75rem;
    background: #01cfcf;
    font-size: .38rem;
    color: #fff;
    margin-left: 1.8rem;
    margin-top: .3rem;
  }
    .borrow .borrow-money .card{
      display: flex;
    }
  .borrow .borrow-money .max-money>span{
    display: block;
  }
</style>