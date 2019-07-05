<template>
  <section class="checkout-section cart-group">
    <h3>{{poiInfo.setPoiInfo.name}}</h3>
    <ul>
      <li v-for="(food,index) in orderInfo.shopFoods" :key="index">
        <img :src="food.picture" alt>
        <div class="cart-group-info">
          <span>{{food.name}}</span>
          <span>x {{food.count}}</span>
          <span>{{food.min_price}}</span>
        </div>
      </li>
      <li class="cart-group-total">
        <div class="fee">配送费</div>
        <div>{{poiInfo.setPoiInfo.shipping_fee_tip}}</div>
      </li>
      <li class="cart-group-total">
        <div class="discounts"></div>
        <div class="subtotal">
          <span>小计 ¥</span>
          <span class="price">{{totalPrice}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CartGroup",
  data(){
    return {
      fee:6,
    }
  },
  props: {
    orderInfo: Object,
    totalPrice: Number,
    poiInfo:Object
  }
};
</script>

<style scoped>
.checkout-section {
  margin-bottom: .2rem;
  padding: 0 .5rem;
  background: #fff;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.05);
}
.cart-group > h3 {
  padding: .4rem 0;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: .35rem;
  line-height: 1;
  font-weight: 700;
}
.cart-group > ul {
  margin-top: .1rem;
  color: #333;
  font-size: 0.3rem;
}
.cart-group > ul > li {
  display: flex;
  align-items: center;
  width: 100%;
  padding: .3rem 0;
  border-bottom: 1px dotted #eee;
  color: inherit;
}
.cart-group > ul > li > img {
  width: .9rem;
  height: .9rem;
}
.cart-group-info {
  margin-left: .2rem;
  overflow: hidden;
  flex: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-group-total {
  justify-content: space-between;
  padding: .4ren 0 .4rem !important;
}
.cart-group .fee{
  font-weight:600;
}
.discounts {
  color: #bbb;
}
.subtotal .price {
  font-size: .4rem;
  font-weight: 500;
}
</style>
