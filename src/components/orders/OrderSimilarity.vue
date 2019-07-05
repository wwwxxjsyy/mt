<template>
    <div class="ordersimilarity">
        <div class="similarity-head">
            <i @click="back"></i>
            <span></span>
            <p>相似商家</p>
        </div>
        <div class="similarity-body">
            <a href="#" class="similarity-now">
                <img src="" alt="">
                <div class="similarity-now-d">
                    <p class="now-d-t">张军擀面皮（岐山面科技六路）</p>
                    <div class="now-d-b">
                        <p>5减3</p>
                        <p>29减6</p>
                        <p>39减13</p>
                        <p>55减18</p>
                        <p v-show="false" class="now-d-bwmk">8元无门槛红包</p>
                        <p v-show="false" class="now-d-btk">极速退款</p>
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
                        <div class="shops-delivery">
                            <div class="delivery-price">
                                <p>起送<span class="defalut">￥20</span></p>
                                <p>配送<span class="defalut">￥4</span></p>
                                <p v-show="false">高峰配送<span class="price-defalut">￥4</span><span class="price-special">￥7</span></p>
                                <p v-show="false">免费配送</p>
                                <p>人均<span class="defalut">￥19</span></p>
                            </div>
                            <p class="delivery-zhb">准时宝</p>
                            <i></i>
                        </div>
                        <div class="shops-gaofen">
                            <p class="shops-gaofen-pj">"擀面皮类面筋类的都很好吃"</p>
                            <p>点评高分店铺</p>
                        </div>
                        <div v-show="false" class="shops-class">
                            <i></i>
                            <p>凉皮</p>
                        </div>
                        <div class="shops-labels">
                            <div class="shops-label">
                                <p>5减3</p>
                                <p>29减6</p>
                                <p>39减13</p>
                                <p>55减18</p>
                                <p v-show="false" class="label-wmk">8元无门槛红包</p>
                                <p v-show="false" class="label-tk">极速退款</p>
                                <p class="label-zq">支持自取</p>
                            </div>
                            <i></i>
                        </div>
                    </div>
                </a>
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
                        <div class="shops-delivery">
                            <div class="delivery-price">
                                <p>起送<span class="defalut">￥20</span></p>
                                <p v-show="false">配送<span class="defalut">￥4</span></p>
                                <p>高峰配送<span class="price-defalut">￥4</span><span class="price-special">￥7</span></p>
                                <p v-show="false">免费配送</p>
                                <p>人均<span class="defalut">￥19</span></p>
                            </div>
                            <p class="delivery-zhb">准时宝</p>
                            <i v-show="false"></i>
                        </div>
                        <div class="shops-gaofen">
                            <p class="shops-gaofen-pj">"擀面皮类面筋类的都很好吃"</p>
                            <p>点评高分店铺</p>
                        </div>
                        <div v-show="false" class="shops-class">
                            <i></i>
                            <p>凉皮</p>
                        </div>
                        <div class="shops-labels">
                            <div class="shops-label">
                                <p>5减3</p>
                                <p>29减6</p>
                                <p v-show="false">39减13</p>
                                <p>55减18</p>
                                <p class="label-wmk">8元无门槛红包</p>
                                <p v-show="false" class="label-tk">极速退款</p>
                                <p class="label-zq">支持自取</p>
                            </div>
                            <i></i>
                        </div>
                    </div>
                </a>
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
                        <div class="shops-delivery">
                            <div class="delivery-price">
                                <p>起送<span class="defalut">￥20</span></p>
                                <p v-show="false">配送<span class="defalut">￥4</span></p>
                                <p v-show="false">高峰配送<span class="price-defalut">￥4</span><span class="price-special">￥7</span></p>
                                <p>免费配送</p>
                                <p>人均<span class="defalut">￥19</span></p>
                            </div>
                            <p class="delivery-zhb">准时宝</p>
                            <i></i>
                        </div>
                        <div v-show="false" class="shops-gaofen">
                            <p class="shops-gaofen-pj">"擀面皮类面筋类的都很好吃"</p>
                            <p>点评高分店铺</p>
                        </div>
                        <div class="shops-class">
                            <i></i>
                            <p>凉皮</p>
                        </div>
                        <div class="shops-labels">
                            <div class="shops-label">
                                <p>5减3</p>
                                <p>29减6</p>
                                <p>39减13</p>
                                <p v-show="false">55减18</p>
                                <p class="label-wmk">8元无门槛红包</p>
                                <p class="label-tk">极速退款</p>
                                <p v-show="false" class="label-zq">支持自取</p>
                            </div>
                            <i v-show="false"></i>
                        </div>
                    </div>
                </a>
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
                        <div class="shops-delivery">
                            <div class="delivery-price">
                                <p>起送<span class="defalut">￥20</span></p>
                                <p>配送<span class="defalut">￥4</span></p>
                                <p v-show="false">高峰配送<span class="price-defalut">￥4</span><span class="price-special">￥7</span></p>
                                <p v-show="false">免费配送</p>
                                <p>人均<span class="defalut">￥19</span></p>
                            </div>
                            <p class="delivery-zhb">准时宝</p>
                            <i></i>
                        </div>
                        <div class="shops-gaofen">
                            <p class="shops-gaofen-pj">"擀面皮类面筋类的都很好吃"</p>
                            <p>点评高分店铺</p>
                        </div>
                        <div v-show="false" class="shops-class">
                            <i></i>
                            <p>凉皮</p>
                        </div>
                        <div class="shops-labels">
                            <div class="shops-label">
                                <p>5减3</p>
                                <p>29减6</p>
                                <p>39减13</p>
                                <p>55减18</p>
                                <p v-show="false" class="label-wmk">8元无门槛红包</p>
                                <p v-show="false" class="label-tk">极速退款</p>
                                <p class="label-zq">支持自取</p>
                            </div>
                            <i></i>
                        </div>
                    </div>
                </a>
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
                        <div class="shops-delivery">
                            <div class="delivery-price">
                                <p>起送<span class="defalut">￥20</span></p>
                                <p>配送<span class="defalut">￥4</span></p>
                                <p v-show="false">高峰配送<span class="price-defalut">￥4</span><span class="price-special">￥7</span></p>
                                <p v-show="false">免费配送</p>
                                <p>人均<span class="defalut">￥19</span></p>
                            </div>
                            <p class="delivery-zhb">准时宝</p>
                            <i></i>
                        </div>
                        <div class="shops-gaofen">
                            <p class="shops-gaofen-pj">"擀面皮类面筋类的都很好吃"</p>
                            <p>点评高分店铺</p>
                        </div>
                        <div v-show="false" class="shops-class">
                            <i></i>
                            <p>凉皮</p>
                        </div>
                        <div class="shops-labels">
                            <div class="shops-label">
                                <p>5减3</p>
                                <p>29减6</p>
                                <p>39减13</p>
                                <p>55减18</p>
                                <p v-show="false" class="label-wmk">8元无门槛红包</p>
                                <p v-show="false" class="label-tk">极速退款</p>
                                <p class="label-zq">支持自取</p>
                            </div>
                            <i></i>
                        </div>
                    </div>
                </a>
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
                        <div class="shops-delivery">
                            <div class="delivery-price">
                                <p>起送<span class="defalut">￥20</span></p>
                                <p>配送<span class="defalut">￥4</span></p>
                                <p v-show="false">高峰配送<span class="price-defalut">￥4</span><span class="price-special">￥7</span></p>
                                <p v-show="false">免费配送</p>
                                <p>人均<span class="defalut">￥19</span></p>
                            </div>
                            <p class="delivery-zhb">准时宝</p>
                            <i></i>
                        </div>
                        <div class="shops-gaofen">
                            <p class="shops-gaofen-pj">"擀面皮类面筋类的都很好吃"</p>
                            <p>点评高分店铺</p>
                        </div>
                        <div v-show="false" class="shops-class">
                            <i></i>
                            <p>凉皮</p>
                        </div>
                        <div class="shops-labels">
                            <div class="shops-label">
                                <p>5减3</p>
                                <p>29减6</p>
                                <p>39减13</p>
                                <p>55减18</p>
                                <p v-show="false" class="label-wmk">8元无门槛红包</p>
                                <p v-show="false" class="label-tk">极速退款</p>
                                <p class="label-zq">支持自取</p>
                            </div>
                            <i></i>
                        </div>
                    </div>
                </a>
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
                        <div class="shops-delivery">
                            <div class="delivery-price">
                                <p>起送<span class="defalut">￥20</span></p>
                                <p>配送<span class="defalut">￥4</span></p>
                                <p v-show="false">高峰配送<span class="price-defalut">￥4</span><span class="price-special">￥7</span></p>
                                <p v-show="false">免费配送</p>
                                <p>人均<span class="defalut">￥19</span></p>
                            </div>
                            <p class="delivery-zhb">准时宝</p>
                            <i></i>
                        </div>
                        <div class="shops-gaofen">
                            <p class="shops-gaofen-pj">"擀面皮类面筋类的都很好吃"</p>
                            <p>点评高分店铺</p>
                        </div>
                        <div v-show="false" class="shops-class">
                            <i></i>
                            <p>凉皮</p>
                        </div>
                        <div class="shops-labels">
                            <div class="shops-label">
                                <p>5减3</p>
                                <p>29减6</p>
                                <p>39减13</p>
                                <p>55减18</p>
                                <p v-show="false" class="label-wmk">8元无门槛红包</p>
                                <p v-show="false" class="label-tk">极速退款</p>
                                <p class="label-zq">支持自取</p>
                            </div>
                            <i></i>
                        </div>
                    </div>
                </a>
            </div>
            <div class="similarity-last">
                <span></span>
                <p>已经到底了</p>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ordersimilarity",
    methods:{
        back(){
            this.$router.back();
        }
    }
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
}
.similarity-head{
    position:fixed;
    width:100%;
    height:0.9rem;
    display:flex;
    justify-content:flex-start;
    background:white;
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
.similarity-body{
    width:100%;
    flex:1;
    overflow-y:auto;
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
    white-space: nowrap;
}
.now-d-b .now-d-bwmk{
    color:#b39116;
}
.now-d-b .now-d-btk{
    color:#666666;
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
.similarity-shops a:last-child{
    margin-bottom:0.6rem;
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
    margin-top:0.06rem;
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
    margin-top:0.06rem;
    margin-right:0.02rem;
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
.shops-delivery{
    width:100%;
    height:0.36rem;
    display:flex;
    margin-top:0.06rem;
}
.delivery-price{
    float:left;
    flex:1;
    height:0.36rem;
    margin-right:0.2rem;
    display:flex;
    justify-content:flex-start;
}
.delivery-price p{
    font-size:0.22rem;
    color:#8a8a8a;
    margin-right:0.06rem;
    white-space: nowrap;
};
.price-defalut{
    margin-left:0.08rem;
}
.price-special{
    color:#bebebe;
    text-decoration:line-through;
}
.delivery-zhb{
    float:right;
    font-size:0.22rem;
    color:#f4ac46;
    padding:0.04rem;
    border:0.01rem solid #e7d09a;
    margin-right:0.03rem;
    line-height:0.3rem;
    white-space: nowrap;
}
.shops-delivery i{
    float:right;
    width:1.1rem;
    height:0.36rem;
    background:url("../../../static/img/order/png.png");
    background-size:9.77rem 5.97rem;
    background-position:-3.3rem -2rem;
    margin-right:0.02rem;
}
.shops-gaofen{
    width:100%;
    height:0.36rem;
    display:flex;
    justify-content:flex-start;
    margin-top:0.06rem;
}
.shops-gaofen p{
    font-size:0.2rem;
    line-height:0.34rem;
    color:#ff7232;
    border:0.01rem solid #faeee1;
}
.shops-gaofen-pj{
    margin-right:0.1rem;
}
.shops-class{
    width:100%;
    height:0.36rem;
    display:flex;
    justify-content:flex-start;
    margin-top:0.06rem;
}
.shops-class i{
    width:0.28rem;
    height:0.28rem;
    background:url("../../../static/img/order/png.png");
    background-size:9.77rem 5.97rem;
    background-position:-9.31rem -0.25rem;
    margin-top:0.04rem;
    margin-right:0.06rem;
}
.shops-class p{
    font-size:0.22rem;
    color:#898989;
    line-height:0.36rem;
}
.shops-labels{
    width:100%;
    height:0.36rem;
    display:flex;
    justify-content:space-between;
    margin-top:0.06rem;
}
.shops-label{
    flex:1;
    height:100%;
    display:flex;
    justify-content:flex-start;
}
.shops-label p{
    font-size:0.2rem;
    color:#fb9f9e;
    padding:0.04rem;
    border:0.01rem solid #e3e9ea;
    margin-right:0.1rem;
    white-space: nowrap;
}
.shops-label .label-wmk{
    color:#b39116;
}
.shops-label .label-tk{
    color:#666666;
}
.shops-label .label-zq{
    color:#666666;
}
.shops-labels i{
    width:0.2rem;
    height:0.16rem;
    background:url("../../../static/img/order/png.png");
    background-size:4.77rem 2.97rem;
    background-position:-4.25rem -0.39rem;
    margin-top:0.08rem;
    margin-right:0.14rem;
    margin-left:0.2rem;
}
.similarity-last{
    width:100%;
    height:0.8rem;
    line-height:0.8rem;
    display:flex;
    justify-content:center;
    margin-bottom:0.3rem;
}
.similarity-last span{
    width:2.2rem;
    height:0.03rem;
    background:#e7e2e3;
    margin-top:0.39rem;
}
.similarity-last p{
    font-size:0.23rem;
    color:#575757;
    margin-left:0.5rem;
    margin-right:0.5rem;
}
</style>
