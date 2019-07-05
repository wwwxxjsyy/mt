<template>
                                   <!-- 完成 -->
<div class="orderstateachieve">
    <div class="state-finish">
        <div class="state-state">
            <p>订单已完成</p>
            <i></i>
        </div>
        <div class="state-survey">
            <i></i>
            <p>调查问卷</p>
        </div>
    </div>
    <div class="state-fulfill">
        <div class="state-fulfill-t">
            <p>感谢您对美团外卖的信任，期待再次光临。</p>
            <div class="fulfill-t">
                <router-link to="">再来一单</router-link>
                <router-link to="">评价</router-link>
            </div>
        </div>
        <div class="state-fulfill-b">
            <a href="#"><i class="callshops"></i><span>致电商家</span></a>
            <a href="#"><i class="callhorseman"></i><span>联系骑手</span></a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
.orderstateachieve{
    width:100%;
    margin-top:0.9rem;
}
.state-finish{
    width:100%;
    height:1.3rem;
    background:#f7f5f6;
    display:flex;
    justify-content:space-between;
}
.state-state{
    height:1.3rem;
    display:flex;
    justify-content:flex-start;
}
.state-state p{
    font-size:0.4rem;
    color:#313330;
    line-height:1.3rem;
    margin-left:0.48rem;
    margin-right:0.2rem;
}
.state-state i{
    width:0.26rem;
    height:0.3rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-0.42rem 0.03rem;
    margin-top:0.5rem;
}
.state-survey{
    height:0.52rem;
    padding:0.06rem;
    background:#e9e4e6;
    border:0.02rem solid #e1e1e1;
    display:flex;
    justify-content:flex-start;
    margin-right:0.28rem;
    border-radius:0.26rem;
    margin-top:0.39rem;
}
.state-survey i{
    width:0.36rem;
    height:0.36rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:0.04rem -0.42rem;
    margin-top:0.02rem;
    margin-right:0.06rem;
     margin-left:0.08rem;
}
.state-survey p{
    line-height:0.4rem;
    font-size:0.23rem;
    color:#818181;
    white-space:nowrap;
    margin-right:0.08rem;
}
.state-fulfill{
    width:93%;
    height:3.4rem;
    background:white;
    margin:0 auto;
    border:0.04rem solid #f1f1f1;
    border-radius:0.08rem;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.state-fulfill-t{
    width:100%;
    height:2.38rem;
    border-bottom:0.02rem solid #f1f1f1;
    border-radius:0.08rem;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.state-fulfill-t p{
    font-size:0.24rem;
    color:#454545;
    margin-left:0.3rem;
    margin-top:0.4rem;
    margin-bottom:0.46rem;
}
.fulfill-t{
    width:100%;
    height:0.76rem;
    display:flex;
    justify-content:flex-start;
}
.fulfill-t a{
    padding-left:0.3rem;
    padding-right:0.3rem;
    height:0.72rem;
    border:0.02rem solid #fdd425;
    line-height:0.7rem;
    text-align:center;
    font-size:0.24rem;
    color:#805215;
    background:#ffd041;
    border-radius:0.03rem;
}
.fulfill-t a:first-child{
    margin-left:0.3rem;
    margin-right:0.2rem;
}
.state-fulfill-b{
    width:100%;
    flex:1;
    display:flex;
    justify-content:center;
}
.state-fulfill-b a{
    width:50%;
    height:100%;
    font-size:0.24rem;
    color:#5a5a5a;
    line-height:1rem;
    display:flex;
    justify-content:center;
}
.state-fulfill-b a:first-child{
    border-right:0.02rem solid #fcf7f8;
}
.callshops{
    width:0.4rem;
    height:0.4rem;
    margin-top:0.3rem;
    margin-right:0.04rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-0.5rem -0.44rem;
}
.callhorseman{
    width:0.4rem;
    height:0.4rem;
    margin-top:0.3rem;
    margin-right:0.04rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-1.38rem 0.03rem;
}

</style>
