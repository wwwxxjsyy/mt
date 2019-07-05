<template>
                                    <!-- 取消 -->
<div class="orderstatecancel">
    <div class="state-finish">
        <div class="state-state">
            <p>订单已取消</p>
            <i></i>
        </div>
        <div class="state-surveys">
        </div>
    </div>
    <div class="state-fulfillc">
        <div class="state-fulfill-tc">
            <p class="state-fulfill-tcsta">您的订单已取消</p>
            <div class="fulfill-tc">
                <router-link to="">逛逛别家</router-link>
                <router-link to="">再来一单</router-link>
            </div>
            <div class="fulfill-bc">
                <p>退款详情</p>
                <a href="#"><span>退款成功</span><i></i></a>
            </div>
        </div>
        <div class="state-fulfill-bc">
            <a href="#"><i class="callshops"></i><span>联系商家</span></a>
        </div>
    </div>
</div>    
</template>

<script>
export default {
    
}
</script>

<style>
.orderstatecancel{
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
.state-fulfillc{
    width:93%;
    /* height:3.4rem; */
    background:white;
    margin:0 auto;
    border:0.04rem solid #f1f1f1;
    border-radius:0.08rem;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.state-fulfill-tc{
    width:100%;
    border-bottom:0.02rem solid #f1f1f1;
    border-radius:0.08rem;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.state-fulfill-tcsta{
    font-size:0.24rem;
    color:#454545;
    margin-left:0.3rem;
    margin-top:0.4rem;
    margin-bottom:0.46rem;
}
.fulfill-tc{
    width:92%;
    height:0.76rem;
    margin:0 auto;
    display:flex;
    justify-content:flex-start;
    margin-bottom:0.3rem;
}
.fulfill-tc a{
    padding-left:0.3rem;
    padding-right:0.3rem;
    height:0.72rem;
    border:0.02rem solid #c6c6c6;
    line-height:0.7rem;
    text-align:center;
    font-size:0.24rem;
    color:#2f2f2f;
    background:#ffffff;
    border-radius:0.03rem;
}
.fulfill-tc a:first-child{
    margin-right:0.2rem;
}
.fulfill-bc{
    width:92%;
    height:0.96rem;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    border-top:0.01rem solid #f0f0f0;
}
.fulfill-bc p{
    font-size:0.28rem;
    color:#2d2d2d;
    line-height:0.96rem;
}
.fulfill-bc a{
    font-size:0.24rem;
    color:#ffa009;
    line-height:0.96rem;
    display:flex;
    justify-content:flex-end;
}
.fulfill-bc a i{
    width:0.22rem;
    height:0.28rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-0.46rem 0rem;
    margin-top:0.31rem;
    margin-left:0.3rem;
}
.state-fulfill-bc{
    width:100%;
    flex:1;
    display:flex;
    justify-content:center;
}
.state-fulfill-bc a{
    width:50%;
    height:100%;
    font-size:0.24rem;
    color:#5a5a5a;
    line-height:1rem;
    display:flex;
    justify-content:center;
}
.state-fulfill-bc a:first-child{
    border-right:0.02rem solid #fcf7f8;
}
.callshops{
    width:0.4rem;
    height:0.4rem;
    margin-top:0.3rem;
    margin-right:0.04rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-1.38rem 0.03rem;
}
</style>
