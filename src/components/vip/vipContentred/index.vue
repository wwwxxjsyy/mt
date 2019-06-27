<template>
    <div class="vip-content-text">
        <div class="vip-content-txt">
            <span class="privi">特权2</span><h1>限时抢购加量包</h1>
            <p class="vip-common">仅限在本期会员有效期内购买、使用</p> 
            <ul>
                <li><img src="../../../assets/img/vipImg/redpack.png" alt=""></li>
                <li><img src="../../../assets/img/vipImg/redpack-1.png" alt=""></li>
                <li><img src="../../../assets/img/vipImg/redpack.png" alt=""></li>
                <li><img src="../../../assets/img/vipImg/redpack.png" alt=""></li>
                <li><img src="../../../assets/img/vipImg/redpack.png" alt=""></li>
            </ul>
        </div>
    </div> 
</template>

<script>
export default {
    name:'VipContentred'
}
</script>

<style scoped>
.vip-content-text{
<<<<<<< HEAD:src/components/vip/vipContentred/index.vue
    background:#f2f2f2;
=======
    background:#f3f4f4;
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22:src/components/vip/vipContent-1/index.vue
}
.vip-content-txt{
    padding-top: 0.3rem;
}
.vip-content div h1{
    display: inline;
    /* margin-top: .5rem; */
}
.vip-content .privi{
    height: 0.3rem;
    background: #1b252f;
    color: #e3cdbc;
    font-size: 0.34rem;
    border-radius: 0.1rem;
    margin-left: 0.2rem;
    padding: 0.01rem 0.1rem;
}
.vip-content h1{
    font-size: 0.4rem;
    font-weight: 600;
    color: #33312e;
    margin-left: 0.2rem;
}
.vip-content p{
    margin: 0.1rem 0.2rem;
    font-size: 0.3rem;
    color: #888888;
}
.vip-content-txt>ul{
    display: flex;
    overflow-x: auto;

}
.vip-content-txt>ul>li{
    padding-left :0.25rem;
}
.vip-content-txt>ul>li>img{
    width: 2.8rem;
    height: 2.4rem;
}
</style>
