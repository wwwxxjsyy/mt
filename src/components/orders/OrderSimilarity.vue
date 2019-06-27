<template>
    <div class="ordersimilarity">
        <div class="similarity-head">
            <i></i>
            <span></span>
            <p>相似商家</p>
        </div>
        <a href="#" class="similarity-now">
            <img src="" alt="">
            <div class="similarity-now-d">
                <p class="now-d-t">张军擀面皮（岐山面科技六路）</p>
                <div class="now-d-b">
                    <p>5减3</p>
                    <p>29减6</p>
                    <p>39减13</p>
                    <p>55减18</p>
                    <p class="now-d-bzq">支持自取</p>
                </div>
            </div>
        </a>
        <div class="similarity-more">
            <span></span>
            <p>为您找到以下相似商家</p>
            <span></span>
        </div>
        <div class="similarity-shops">
            <a href="#">
                <img src="" alt="">
                <div class="shops-detail">
                    <p class="shops-detail-name">张军擀面皮（岐山面科技六路）</p>
                    <div class="shops-detail-sell">
                        <div class="sell-px">
                            <p class="sell-px-pj"><i></i><span>4.4</span></p>
                            <p class="sell-px-xl">月售<span>1005</span></p>
                        </div>
                        <div class="sell-sj">
                            <p>65分钟</p>
                            <p>3.5km</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"ordersimilarity"
}
</script>

<style>
.ordersimilarity{
    width:100%;
    height:100%;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    overflow-y:auot;
}
.similarity-head{
    position:fixed;
    width:100%;
    height:0.9rem;
    display:flex;
    justify-content:flex-start;
}
.similarity-head i{
    width:0.52rem;
    height:0.44rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-1.02rem -0.43rem;
    margin-top:0.23rem;
    margin-left:0.28rem;
}
.similarity-head span{
    width:0.02rem;
    height:0.26rem;
    background:#e4e4e4;
    margin-top:0.32rem;
    margin-left:.22rem;
    margin-right:0.22rem;
}
.similarity-head p{
    font-size:0.3rem;
    color:#222222;
    line-height:0.9rem;
}
.similarity-now{
    width:100%;
    height:1.72rem;
    display:flex;
    justify-content:flex-start;
    margin-top:0.9rem;
}
.similarity-now img{
    width:1.72rem;
    height:1.28rem;
    background:chocolate;
    margin-top:0.22rem;
    margin-left:0.34rem;
}
.similarity-now-d{
    height:100%;
    flex:1;
    margin-right:0.28rem;
    margin-left:0.24rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
.now-d-t{
    font-size:0.3rem;
    color:#353535;
    width:84%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.now-d-b{
    width:100%;
    display:flex;
    justify-content:flex-start;
    margin-top:0.1rem;
}
.now-d-b p{
    font-size:0.2rem;
    color:#fb9f9e;
    padding:0.04rem;
    border:0.01rem solid #e3e9ea;
    margin-right:0.1rem;
}
.now-d-b .now-d-bzq{
    color:#666666;
}
.similarity-more{
    width:100%;
    height:0.8rem;
    line-height:0.8rem;
    background:#f8f3f5;
    display:flex;
    justify-content:center;
}
.similarity-more span{
    width:1.2rem;
    height:0.03rem;
    background:#e7e2e3;
    margin-top:0.39rem;
}
.similarity-more p{
    font-size:0.23rem;
    color:#575757;
}
.similarity-shops{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.similarity-shops a{
    width:100%;
    height:2.56rem;
    display:flex;
    justify-content:space-between;
}
.similarity-shops a img{
    width:1.72rem;
    height:1.28rem;
    background:cornflowerblue;
    margin-top:0.3rem;
    margin-left:0.34rem;
}
.shops-detail{
    flex:1;
    height:100%;
    margin-right:0.28rem;
    margin-left:0.24rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
.shops-detail-name{
    font-size:0.3rem;
    color:#353535;
    width:84%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.shops-detail-sell{
    width:100%;
    height:0.36rem;
    display:flex;
    justify-content:space-between;
}
.sell-px{
    height:100%;
    line-height:0.36rem;
    display:flex;
    justify-content:space-between;
}
.sell-px p{
    font-size:0.24rem;
    display:flex;
}
.sell-px p i{
    width:0.22rem;
    height:0.24rem;
    background:url("../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:-7.9rem -0.19rem;
}
.sell-px-pj{
    color:#fab614;
    margin-right:0.14rem;
}
.sell-px-xl{
    color:#909090;
}
.sell-sj{
    height:100%;
    line-height:0.36rem;
    display:flex;
    justify-content:space-between;
}
.sell-sj p{
    font-size:0.24rem;
    color:#909090;
}
.sell-sj p:first-child{
    margin-right:0.14rem;
}
</style>
