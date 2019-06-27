<template>
                                <!-- 头部 -->
    <div class="orderhead">
        <a class="orderhead-l" href="#">跑腿订单</a>
        <h3>订单</h3>
        <div  class="orderhead-r">
            <router-link to="/OrderOrderSearch" class="orderhead-search"></router-link>
            <router-link to="/OrderOrderNews" class="orderhead-news"></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"orderhead"
}
</script>

<style>
.orderhead{
    width:100%;
    height:0.9rem;
    line-height:0.9rem;
    display:flex;
    justify-content:space-between;
    background:white;
    position:fixed;
    z-index:10;
    top:0;
}
.orderhead-l{
    font-size:0.24rem;
    color:#2f2f2f;
    margin-left:0.2rem;
}
.orderhead h3{
    font-size:0.3rem;
    color:#2f2f2f;
    font-weight:800;
}
.orderhead-r{
    display:flex;
    justify-content:space-between;
    margin-top:0.25rem;
    margin-right:0.2rem;
}
.orderhead-r a{
    width:0.46rem;
    height:0.46rem;
}
.orderhead-search{
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-2.03rem 0rem;
    margin-right:0.2rem;
}
.orderhead-news{
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-0.03rem -0.95rem;
}
</style>
