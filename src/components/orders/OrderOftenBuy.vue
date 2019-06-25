<template>
                            <!-- 最近常买 -->
    <div class="orderoftenbuy">
        <div class="orderoftenbuy-top">
            <h3>最近常买</h3>
            <a href="#">查看10个商家  ></a>
        </div>
        <div class="orderoftenbuy-bottom">
            <ul>
                <li>
                    <a class="shops" href="#">
                        <img src="" alt="">
                        <p class="shopsname">麻辣空间(科技西路南窑头)</p>
                        <p class="shopsbuynum">买过<span>1</span>次</p>
                    </a>
                </li>
                <li>
                    <a class="shops" href="#">
                        <img src="" alt="">
                        <p class="shopsname">麻辣空间(科技西路南窑头)</p>
                        <p class="shopsbuynum">买过<span>1</span>次</p>
                    </a>
                </li>
                <li>
                    <a class="shops" href="#">
                        <img src="" alt="">
                        <p class="shopsname">麻辣空间(科技西路南窑头)</p>
                        <p class="shopsbuynum">买过<span>1</span>次</p>
                    </a>
                </li>
                <li>
                    <a class="shops" href="#">
                        <img src="" alt="">
                        <p class="shopsname">麻辣空间(科技西路南窑头)</p>
                        <p class="shopsbuynum">买过<span>1</span>次</p>
                    </a>
                </li>
                <li>
                    <a class="shops" href="#">
                        <img src="" alt="">
                        <p class="shopsname">麻辣空间(科技西路南窑头)</p>
                        <p class="shopsbuynum">买过<span>1</span>次</p>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.orderoftenbuy{
    width:100%;
    height:3.6rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    /* margin-top:0.9rem; */
}
.orderoftenbuy-top{
    width:100%;
    height:1.2rem;
    line-height:1.2rem;
    display:flex;
    justify-content:space-between;
}
.orderoftenbuy-top h3{
    font-size:0.3rem;
    color:#2f2f2f;
    font-weight:800;
    margin-left:0.2rem;
}
.orderoftenbuy-top a{
    font-size:0.26rem;
    color:#7a7a7a;
    margin-right:0.2rem;
}
.orderoftenbuy-bottom{
    width:100%;
    flex:1;
    overflow: hidden;
}
.orderoftenbuy-bottom ul{
    height:100%;
    display:flex;
    flex-wrap:nowrap;
    overflow-x:auto;
}
.orderoftenbuy-bottom ul::-webkit-scrollbar{
    display:none;
}
.orderoftenbuy-bottom ul li{
    flex-shrink:0;
    float:left;
    width:2.4rem;
    height:100%;
    margin-left:0.2rem;
    background:white;
}
.orderoftenbuy-bottom ul li:last-child{
    margin-right:0.2rem;
}
.orderoftenbuy-bottom ul li .shops{
    display:block;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
.shops img{
    width:0.72rem;
    height:0.72rem;
    background:chartreuse;
    margin:0.2rem auto 0;
}
.shopsname{
    width:80%;
    font-size:0.24rem;
    color:#363636;
    margin:0 auto;
    overflow:hidden; 
    white-space:nowrap;
    text-overflow:ellipsis;
}
.shopsbuynum{
    width:1rem;
    margin:0 auto 0.2rem;
    font-size:0.22rem;
    color:#ecdd98;
    padding:0.04rem;
    border:0.01rem solid #f0ebef;
}
.shopsbuynum span{
    color:#ecdd98;
}
</style>


