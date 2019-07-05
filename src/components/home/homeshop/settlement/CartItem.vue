<template>
  <div class="cart-item" @click="$emit('click')">
    <div class="cart-item-title">{{title}}</div>
    <div class="cart-item-right" v-if="subHead">
      <span>{{subHead}}</span>
      <i class="iconfont">&#xe60a;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    title: String,
    subHead: String
  }
};
</script>

<style scoped>
.iconfont{
  font-size:.3rem
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .3rem .4rem;
  font-size: .3rem;
  color: #333;
  border-bottom: 1px dotted #eee;
}
.cart-item-title {
  font-weight: 600;
  flex: none;
  margin-right:.2rem;
}
.cart-item-right {
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  color: #bbb;
  font-size: .3rem;
  max-width: 6rem;
}
.cart-item-right > span {
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
  white-space: nowrap;
}
.cart-item-right > i {
  font-size: .35rem !important;
  margin-left: 5px;
}
</style>
