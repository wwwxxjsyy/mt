<template>
  <section class="checkout-section">
    <div class="delivery" >
      <div class="deliver-left">
        <span class="delivery-time">送达时间</span>
        <div  v-if="shopInfo.length>0" class="delivery-extra">
          <span>美团专送</span>
        </div>
      </div>
      <div class="delivery-right">
        <span class="delivery-select">尽快送达 ({{deliveryTime()}}送达)</span>
        <i class="iconfont">&#xe60a;</i>
      </div>
    </div>
    <div class="cart-item">
      <div class="cart-item-title">支付方式</div>
      <div class="pay-text">在线支付</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Delivery",
  props: {
    shopInfo: {}
  },
  methods: {
    deliveryTime() {
      let date = new Date();
      date.setMinutes(date.getMinutes() + 30);
      return date.getHours() + ":" + date.getMinutes();
    }
  }
};
</script>

<style scoped>
.checkout-section {
  margin-bottom: .2rem;
  padding: 0 .5rem;
  background: #fff;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05);
}
.delivery {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dotted rgb(184, 182, 182);
  padding: .4rem 0;
}
.delivery-left {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.delivery-time {
  font-size: .3rem;
  font-weight: 600;
}
.delivery-extra {
  margin-top: .1rem;
  font-size: 0.35rem;
}
.delivery-extra > span {
  display: inline-block;
  word-spacing: 2pxvw;
  padding: .1rem .1rem;
  line-height: 1;
  background-image: linear-gradient(90deg, rgb(247, 212, 117), #ffae00);
  color: #fff;
  border-radius: 1px;
  font-size: .25rem;
}
.delivery-right {
  text-align: right;
}
.delivery-select {
  text-align: right;
  color: #efb700;
  font-weight: .3rem;
}
.delivery-right > i {
  margin-left: .1rem;
  color: #888;
  font-size: .3rem;
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .4rem 0 .5rem 0;
  font-size: .3rem;
  color: #333;
  font-weight: 600;
}
.cart-item .cart-item-title {
  font-weight: 600;
}
.pay-text {
  color: #ffa023;
}
</style>
