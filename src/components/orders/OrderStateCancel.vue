<template>
                                    <!-- 取消 -->
<div class="orderstateachieve">
    <div class="state-finish">
        <div class="state-state">
            <p>订单已取消</p>
            <i></i>
        </div>
        <div class="state-surveyc">
            
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

</style>
