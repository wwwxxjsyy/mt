<template>
    <div class="ordersearch">
        <div class="ordersearcht">
            <span></span>
            <div class="ordersearchi">
                <i></i>
                <input type="text" placeholder="输入订单中的商家或商品名称">
            </div>
            <a href="#">搜索</a>
        </div>
        <div class="ordersearchhistory">

        </div>
    </div>
</template>

<script>
export default {
    name:"ordersearch",
}
</script>

<style>
.ordersearch{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    background:#f6f6f6;
}
.ordersearcht{
    width:100%;
    height:1rem;
    background:white;
    display:flex;
    justify-content:space-between;
}
.ordersearcht span{
    width:0.4rem;
    height:0.6rem;
    background:url("../../../static/img/order/png.png");
    background-size:3.77rem 1.97rem;
    background-position:-0.78rem -0.2rem;
    margin-top:0.2rem;
    margin-left:0.22rem;
}
.ordersearchi{
    flex:1;
    height:0.62rem;
    margin-left:0.3rem;
    margin-right:0.16rem;
    background:#eaeaea;
    border-radius:0.04rem;
    margin-top:0.19rem;
    display:flex;
    justify-content:flex-start;
}
.ordersearchi i{
    width:0.31rem;
    height:0.31rem;
    background:url("../../../static/img/order/png.png");
    background-size:3.77rem 1.97rem;
    background-position:-1.7rem -0.29rem;
    margin:0.15rem;
}
.ordersearchi input{
    flex:1;
    height:100%;
    border:none;
    font-size:0.28rem;
    background:#ebebeb; 
}
.ordersearchi input:focus{
    outline:none;
}
.ordersearcht a{
    font-size:0.28rem;
    color:#323232;
    line-height:1rem;
    margin-right:0.16rem;
}
.ordersearchhistory{
    width:100%;
    flex:1;
}
</style>
