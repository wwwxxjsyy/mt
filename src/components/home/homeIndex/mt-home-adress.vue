<template>
    <div class="adress-map">
        <div class="home-adress-map">
            <div class="home-adress-map-left">
                <b class="iconfont adress">&#xe602;立人科技园</b>
                <span class="iconfont adress-forward">&#xe733;</span>
            </div>
            <div class="adress-garden">
                <!-- 定位中间的园 -->
            </div>
            <div class="home-adress-map-right">
                <div class="iconfont adress-message">&#xe61f;</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AdressMap"
}
</script>

<style scoped>
.adress-map{
    width: 100%;
    height: .5rem;
    /* background: gray; */
}
.home-adress-map{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.home-adress-map-left{
    height: 100%;
    display: flex;
    align-items: center;
}
.home-adress-map-right{
    height: 100%;
}
.adress-forward{
    font-size: .5rem;
    font-weight: bolder;
    
}
.adress-message{
    font-size: .35rem;
    font-weight: bolder;
    line-height: .5rem;
}
.adress{
    height: 100%;
    font-size: .3rem;
    line-height: .5rem;
}
</style>
