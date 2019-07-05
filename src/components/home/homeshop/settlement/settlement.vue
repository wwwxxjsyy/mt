<template>
    <div class="settlement">
        <Header :isLeft="true" title="提交订单"/>
        <div class="view-body" v-if="orderInfo">
            <div class>
                <!-- 收货地址 -->
                <section class="cart-address">
                <p class="title">
                    订单配送至
                    <span class="address-tag" v-if="userInfo && userInfo.tag">{{userInfo.tag}}</span>
                </p>
                <p class="address-detail">
                    <span
                    @click="$router.push('/myAddress')"
                    v-if="userInfo"
                    >{{userInfo.address}}{{userInfo.bottom}}</span>
                    <span v-else>
                    <span v-if="haveAddress" @click="$router.push('/myAddress')">选择收货地址</span>
                    <span v-else @click="addAddress">新增收货地址</span>
                    </span>
                    <i class="fa fa-angle-right"></i>
                </p>
                <h2 v-if="userInfo" class="address-name">
                    <span>{{userInfo.name}}</span>
                    <span v-if="userInfo.sex">({{userInfo.sex}})</span>
                    <span class="phone">{{userInfo.phone}}</span>
                </h2>
                </section>

                <!-- 送达时间 -->
                <Delivery :shopInfo="orderInfo.shopInfo"/>

                <!-- 点餐内容 -->
                <CartGroup :orderInfo="orderInfo" :totalPrice="totalPrice"/>

                <!-- 备注信息 -->
                <section class="checkout-section">
                <CartItem
                    @click="showTableware=true"
                    title="餐具份数"
                    :subHead="remarkInfo.tableware || '未选择'"
                />
                <CartItem
                    @click="$router.push('/remark')"
                    title="订单备注"
                    :subHead="remarkInfo.remark || '口味 偏好'"
                />
                <CartItem title="发票信息" subHead="不需要开发票"/>
                </section>

                <!-- 显示Tableware -->
                <Tableware :isShow="showTableware" @close="showTableware=false"/>
            </div>
        </div>
        <!-- 底部 -->
        <footer class="action-bar">
        <span>¥{{totalPrice}}</span>
        <button @click="handlePay()">去支付</button>
        </footer>

    </div>
</template>

<script>
import Header from "./Header"
import Delivery from "./Delivery";
import CartGroup from "./CartGroup";
import CartItem from "./CartItem";
import Tableware from "./Tableware";
import { Toast } from "mint-ui";
export default {
    name:"Settlement",
    data() {
        return {
        haveAddress: false,
        showTableware: false
        };
    },
    computed: {
        userInfo() {
            return this.$store.getters.userInfo;
        },
        orderInfo() {
            return this.$store.getters.orderInfo;
        },
        totalPrice() {
            return this.$store.getters.totalPrice;
        },
        remarkInfo() {
            return this.$store.getters.remarkInfo;
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
        if (!vm.userInfo) {
            vm.getData();
        }
        });
    },
    methods: {
        addAddress() {
        this.$router.push({
            name: "PlusAddress",
            params: {
            title: "新建收货地址",
            addressInfo: {
                name: "",
                sex: "",
                phone: "",
                address: "",
                bottom: "",
                tag: ""
            }
            }
        });
        },
        getData() {
            this.$axios(`/api/user/user_info/${localStorage.mt_login}`).then(res => {
                // console.log(res.data);
                if (res.data.myAddress.length > 0) {
                    this.haveAddress = true;
                } else {
                    this.haveAddress = false;
                }
            });
        },
        handlePay() {
        if (!this.userInfo) {
            Toast({
                message: "请选择收货地址",
                position: "bottom",
                duration: 2000
            });
            return;
        }
        this.$router.push("/pay");
        }
    },
    components:{
        Header,
        Delivery,
        CartGroup,
        CartItem,
        Tableware
    }
}
</script>


<style scoped>
.settlement {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 1rem;
}

.view-body {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  font-size: 0.3rem;
  color: #333;
  padding-bottom: 1rem;
  padding-left: .2rem;
  padding-right: .2rem;
  background-image: linear-gradient(
      0deg,
      #f5f5f5,
      #f5f5f5 65%,
      hsla(0, 0%, 96%, 0.3) 75%,
      hsla(0, 0%, 96%, 0)
    ),
    linear-gradient(270deg, #009eef, #009eef);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.cart-address {
  background-color: transparent;
  padding: .1rem .1rem .1rem .1rem;
  min-height: 2rem;
  color: #fff;
  overflow: hidden;
}
.cart-address .title {
  font-size: 0.3rem;
  line-height: 1.21;
  color: hsla(0, 0%, 100%, 0.8);
}
.cart-address .address-detail {
  font-size: 0.3rem;
  font-weight: 600;
  line-height: 1.88;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.address-detail > span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* max-width: calc(100% - 4vw); */
}
.address-detail > i {
  margin-left: .3rem;
}

/* 显示送货地址 */
.address-name {
  font-size: 0.3rem;
  line-height: 1.21;
  margin-bottom: .1rem;
}
.address-name .phone {
  margin-left: .1rem;
}
.address-tag {
  border: 2px solid hsla(0, 0%, 100%, 0.8);
  margin-left: .2rem;
  display: inline-block;
  padding: .1rem;
  white-space: nowrap;
  border-radius: .1rem;
  font-size: 0.6rem !important;
  line-height: .3rem;
}

.checkout-section {
  margin-bottom: .2rem;
  padding: 0 .2remvw;
  background: #fff;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05);
}

/* 底部支付样式 */
.action-bar {
  height: 1rem;
  position: fixed;
  left: .2rem;
  bottom: .3rem;
  width: 95%;
  background: #3c3c3c;
  z-index: 2;
  border-radius:.5rem;
  overflow:hidden;
 box-shadow: 0px 11px 17px 4px rgba(0, 0, 0, 0.3);
}
.action-bar > span {
  color: #fff;
  font-size: .4rem;
  line-height: .6rem;
  padding-left: .2rem;
  vertical-align: middle;
}
.action-bar > button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: #efb700;
  min-width: 28vw;
  padding: 0 .2rem;
  border: none;
  color: #fff;
  font-size: .35rem;
}
</style>

