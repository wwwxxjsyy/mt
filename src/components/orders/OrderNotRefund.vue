<template>
    <div class="ordernotdiscusss">
        <div class="notordermenu">
            <router-link to="/order">全部订单</router-link>
            <router-link to="/OrderOrderNoDiscuss">待评价</router-link>
            <router-link to="/OrderOrderRefund">退款<span></span></router-link>
        </div>
        <div class="notorderdelite">
            <img src="../../../static/img/order/orderk2.png" alt="">
            <p class="notorderdelite-t">没有待退款的订单哦~</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.ordernotdiscusss{
    width:100%;
    height:100%;
    margin-top:0.9rem;
    margin-bottom:1rem;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
/* menu */
.notordermenu{
    width:100%;
    height:0.9rem;
    line-height:0.6rem;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    background:white;
}
.notordermenu a{
    font-size:0.26rem;
    color:#494949;
    position:relative;
}
.notordermenu a:first-child{
    margin-left:10%;
}
.notordermenu a:last-child{
    margin-right:10%;
}
.notordermenu span{
    position:absolute;
    display:block;
    width:0.4rem;
    height:0.04rem;
    background:#fbd48f;
    border-radius:0.02rem;
    bottom:20%;
    left:10%;
}
.notorderdelite{
    width:100%;
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.notorderdelite img{
    width:6.12rem;
    height:4.73rem;
    margin:0.5rem auto 0.25rem;
}
.notorderdelite-t{
    font-size:0.24rem;
    color:#666666;
    text-align:center;
    line-height:0.5rem;
}
</style>
