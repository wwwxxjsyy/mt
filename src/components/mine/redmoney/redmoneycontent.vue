<template>
  <div>
    <p class="remind">
      <span>
        <img src="../../../assets/minePic/remind.png" alt>
      </span>
      <span>美团红包、商家代金券使用说明</span>
    </p>

    <div class="mainContent">
      <div class="coupon" v-for="(item,index) in  couponList" :key="index">
        <div class="coupon-title">
          <div class="coupon-title-top">
            <div class="coupon-title-top-left">{{item.desc1}}</div>
            <div class="coupon-title-top-right">{{item.desc2}}</div>
          </div>
          <div class="coupon-title-bottom">
            <div>{{item.desc3}}</div>
            <div>{{item.desc4}}</div>
          </div>
        </div>
        <div class="coupon-content">{{item.desc5}}</div>
      </div>

      <div class="morecoupon">
        <div class="none">没有更多有效红包了</div>
        <div class="search">查看失效红包</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      couponList: [
        {
          desc1: "下午茶红包",
          desc2: "￥10",
          desc3: "有效期至2019.06.27",
          desc4: "满50可用",
          desc5:
            "限非到店自取订单，13:00-16:59，西安地区，下午茶频道使用。限登录和收餐手机号为13363959776使用。"
        },
        {
          desc1: "夜宵红包",
          desc2: "￥10",
          desc3: "有效期至2019.06.27",
          desc4: "满60可用",
          desc5:
            "限非到店自取订单，21:00-23:59、00:00-04:59，西安地区，夜宵频道使用。限登录和收餐手机号为13363959776使用。"
        },
        {
          desc1: "新客首单红包",
          desc2: "￥14",
          desc3: "有效期至2019.06.27",
          desc4: "满15可用",
          desc5:
            "限非到店自取订单，新用户（手机号、设备、账号均未在美团外卖下过单）使用。限登录和收餐手机号为13363959776使用。"
        },
        {
          desc1: "通用红包",
          desc2: "￥4",
          desc3: "有效期至2019.06.27",
          desc4: "满35可用",
          desc5:
            "限非到店自取订单，西安地区使用。限登录和收餐手机号为13363959776使用。"
        },
         {
          desc1: "通用红包",
          desc2: "￥4",
          desc3: "有效期至2019.06.27",
          desc4: "满35可用",
          desc5:
            "限非到店自取订单，西安地区使用。限登录和收餐手机号为13363959776使用。"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {},
 
};
</script>
<style  scoped>
.remind {
  background: #fff8e9;
  color: #666;
  width: 100%;
  height: 0.7rem;
  display: flex;
  align-items: center;
  font-size: 0.25rem;
  padding-left: 0.4rem;
}

.remind img {
  width: 0.24rem;
  height: 0.24rem;
  margin-right: 0.15rem;
  vertical-align: middle;
}

.mainContent {
  margin-top: 0.3rem;
  margin-bottom: .3rem;
}

.coupon {
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: .25rem .35rem;
  border-radius: 0.2rem;
}

.coupon .coupon-title {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.3rem 0 0.3rem;
  position: relative;
}

.coupon .coupon-title .coupon-title-top {
  font-size: 0.38rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.coupon .coupon-title .coupon-title-top ::before {
     content: "";
    display: block;
    position: absolute;
    bottom: 0.05rem;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    left: -35px;
    background: #eee;
}
.coupon .coupon-title .coupon-title-top ::after {
      content: "";
    display: block;
    position: absolute;
    bottom: 0.05rem;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    right: -35px;
    background: #eee;
}

.coupon .coupon-title .coupon-title-top-left {
  color: red;
}

.coupon .coupon-title .coupon-title-top-right {
  color: red;
}

.coupon .coupon-title .coupon-title-bottom {
  font-size: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.3rem;
  color: #ccc;
}
.coupon .coupon-content {
  margin-top: 0.3rem;
  padding: 0.3rem;
  line-height: 0.4rem;
  color: #444;
  font-size: 0.25rem;
}

.morecoupon {
  display: flex;
  flex-direction: row;
  margin-top: .1rem;
  margin-bottom: .2rem;
}
.morecoupon .none {
  box-sizing: border-box;
  width: 50%;
  border-right: 1px solid #9a9a9a;
  text-align: right;
  padding-right: .2rem;
  color: #9a9a9a;
  font-size: .3rem;
}
.morecoupon .search {
  flex-grow: 1;
  padding-left: .2rem;
  color: #466899;
  font-size: .3rem;
}
</style>