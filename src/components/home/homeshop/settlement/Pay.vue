<template>
  <div class="pay">
    <Header title="在线支付"/>
    <div class="main" v-if="orderInfo">
      <div class="tip">
        <p class="countdown-title">支付剩余时间</p>
        <h3 class="countdown-text">{{countDown}}</h3>
      </div>
      <section class="home">
        <ul class="list info-list">
          <li>
            <span class="order-name">{{poiInfo.setPoiInfo.name}}</span>
            <span class="text-highlight">¥{{totalPrice}}</span>
          </li>
        </ul>
        <div class="title">在线支付</div>
        <ul class="list payment-list">
          <li class="payment-list-item">
            <div class="icon">
              <img src="./wechart.jpg" alt>
              <span>微信</span>
            </div>
            <i class="iconfont">&#xe61c;</i>
          </li>
        </ul>
      </section>
      <button @click="pay" :disabled="timeOut" class="btn-submit">确认支付</button>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import { setInterval, clearInterval } from "timers";
export default {
  name: "Pay",
  data() {
    return {
      countDown: "00:15:00",
      timer: null,
      timeOut: false
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.countTimeDown();
      // vm.addOrder();
    });
  },
  computed: {
    orderInfo() {
      return this.$store.getters.orderInfo;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    userInfo() {
      return this.$store.getters.userInfo;
    },
    remarkInfo() {
      return this.$store.getters.remarkInfo;
    },
    poiInfo(){
      return this.$store.getters.poiInfo;
    }
  },
  methods: {
    countTimeDown() {
      let minute = 14;
      let second = 59;

      this.timer = setInterval(() => {
        second--;

        if (second == "00" && minute == "00") {
          this.countDown = "订单已超时";
          clearInterval(this.timer);
          this.timeOut = true;
          return;
        }

        if (second == "00") {
          second = 59;
          minute--;

          if (minute < 10) {
            minute = "0" + minute;
          }
        }

        if (second < 10) {
          second = "0" + second;
        }

        this.countDown = "00:" + minute + ":" + second;
      }, 1000);
    },
    pay() {
      const data = {
        body: "mt",
        out_trade_no: new Date().getTime().toString(),
        total_fee: 1
      };
      alert("进入到pay方法中");
      // 请求 http://www.thenewstep.cn/wxzf/example/jsapi.php
      fetch("http://www.thenewstep.cn/wxzf/example/jsapi.php", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          
        })
        .catch(err => {
           
          this.onBridgeReady();
          alert("请求成功");
         
        });
    },
    onBridgeReady() {
      // WeixinJSBridge.invoke("getBrandWCPayRequest", data, res => {
      //   //  == "get_brand_wcpay_request:ok"
      //   if (res.err_msg) {
      //     // 使用以上方式判断前端返回,微信团队郑重提示：
      //     //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      //     alert("支付成功");
      //     // 生成订单
          
      //   }else{
          this.addOrder();
      //   }
      // });
    },
    addOrder() {
      let orderlist = {
        orderInfo: this.orderInfo,
        userInfo: this.userInfo,
        totalPrice: this.totalPrice,
        remarkInfo: this.remarkInfo
      };
      // console.log(orderlist);
      // localhost.getItem('mt_Login')
      if(true){
         this.$router.push({name:'/order',params:orderlist});
      }
         
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.iconfont {
  font-size: .4rem ;
  color:#4cd964 !important;
}
.pay {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 1rem
}

.main {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.tip {
  display: block;
  text-align: center;
  background-color: #fff;
  color: #333;
  padding: .2rem;
  line-height: .6rem;
}
countdown-title {
  font-size: .35rem;
  color: #999;
}
.countdown-text {
  height: 1rem;
  color: #333;
  font-size: .45rem;
}
down-text {
  height: 2rem;
  color: #333;
  font-size: .38rem;
}
.list {
  border-bottom: 0.5px solid #ccc;
  background: #fff;
}
.info-list {
  padding: 0 .5rem;
}
.info-list li {
  border-top: 1px solid #c2c2c2;
  display: flex;
  padding: .15rem 0;
  font-size:.35rem;
  line-height: 1rem;
  justify-content: space-between;
}
.info-list li .order-name {
  color: #333;
  display: inline-block;
  vertical-align: bottom;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: .2rem;
  max-width: 60%;
}
.text-highlight {
  color: #ff6000;
}
.title {
  background-color: #f5f5f5;
  font-size: .3rem;
  line-height:.8rem;
  padding: 0 .2rem .1rem;
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.payment-list-item {
  border-bottom: 0.5px solid #eee;
  padding: .3rem .3rem;
  font-size: .35rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon {
  display: flex;
  align-items: center;
}
.payment-list-item img {
  width: .6rem;
  /* height: .6rem; */
  margin-right:.6rem;
}
.payment-list-item > i {
  font-size: .35;
  color: #eee;
}
.selected {
  color: #4cd964 !important;
}
.btn-submit-wrap {
  margin: .1rem auto;
  width: 90%;
}
.btn-submit {
  font-size: .3rem;
  line-height: .6rem;
  background-color: #efb700;;
  width: 100%;
  outline: none;
  border: none;
  color: #fff;
  border-radius: .1rem;
  padding: .1rem;
  box-sizing: border-box;
}

/* 不可点击btn */
.btn-submit[disabled] {
  background-color: #bbb !important;
}
</style>

