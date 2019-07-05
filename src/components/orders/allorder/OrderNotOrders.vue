<template>
    <div class="ordernotorders">
        <div class="notordermenu">
            <router-link to="/order">
                全部订单<span></span>
            </router-link>
            <router-link to="/OrderOrderNoDiscuss">待评价</router-link>
            <router-link to="/OrderOrderRefund">退款</router-link>
        </div>
        <div class="notorderdelite">
            <img src="../../../../static/img/order/orderk1.png" alt="">
            <p class="notorderdelite-t">一个订单都没有哦~</p>
            <p class="notorderdelite-b">给自己定一个小目标，先下一单</p>
            <a href="#">去逛逛</a>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"ordernotorders"
}
</script>

<style>
.ordernotorders{
    width:100%;
    height:100%;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
/* menu */
.notordermenu{
    width:100%;
    height:1.2rem;
    line-height:1.2rem ;
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
    width:0.6rem;
    height:0.04rem;
    background:#fbd48f;
    border-radius:0.02rem;
    bottom:20%;
    left:20%;
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
.notorderdelite-b{
    font-size:0.22rem;
    color:#989898;
    text-align:center;
    line-height:0.5rem;
}
.notorderdelite a{
    width:2.4rem;
    height:0.45rem;
    background:#ffc43a;
    border-radius:0.04rem;
    font-size:0.24rem;
    color:#343436;
    text-align:center;
    line-height:0.45rem;
    margin:0.25rem auto 0;
}
</style>
