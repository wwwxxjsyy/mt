<template>
    <div class="ordernews">
        <div class="ordernewst">
            <span></span>
            <h3>消息中心</h3>
            <div></div>
        </div>
        <ul class="ordernewsmeau">
            <li>
                <img src="../../../static/img/order/17.png" alt="">
                <p>系统消息</p>
            </li>
            <li>
                <img src="../../../static/img/order/18.png" alt="">
                <p>售后通知</p>
            </li>
            <li>
                <img src="../../../static/img/order/19.png" alt="">
                <p>客服消息</p>
            </li>
            <li>
                <img src="../../../static/img/order/20.png" alt="">
                <p>商家代金券</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"ordernews"
}
</script>

<style>
.ordernews{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    background:#f4f4f4;
}
.ordernewst{
    width:100%;
    height:1rem;
    background:white;
    display:flex;
    justify-content:space-between;
    border-bottom:0.03rem solid #ededed;
}
.ordernewst span{
    width:0.4rem;
    height:0.6rem;
    background:url("../../../static/img/order/png.png");
    background-size:3.77rem 1.97rem;
    background-position:-0.78rem -0.2rem;
    margin-top:0.2rem;
    margin-left:0.22rem;
}
.ordernewst h3{
    font-size:0.3rem;
    color:#323232;
    line-height:1rem;
}
.ordernewsmeau{
    width:100%;
    background:white;
}
.ordernewsmeau li{
    float:right;
    width:96%;
    height:1.57rem;
    border-bottom:0.01rem solid #e6e6e6;
    display:flex;
    justify-content:flex-start;
}
.ordernewsmeau li img{
    width:0.95rem;
    height:0.95rem;
    margin-top:0.31rem;
    border-radius:0.06rem;
    margin-right:0.32rem;
}
.ordernewsmeau li p{
    font-size:0.3rem;
    color:#010101;
    line-height:1.57rem;
}
</style>