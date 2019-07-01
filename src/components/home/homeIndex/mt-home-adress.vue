<template>
    <div class="adress-map">
        <div class="home-adress-map">
            <div class="home-adress-map-left">
                <b class="iconfont adress" @click="$router.push({name:'selectAddress',params:{city:city}})">&#xe602;</b> <b class="address_text">{{address}}</b>
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
    name:"AdressMap",
    computed:{
        address(){
            return this.$store.getters.address;
        },
        city(){
            return this.$store.getters.location.addressComponent.city || this.$store.getters.location.addressComponent.city;
        }
    }
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
    font-size: .6rem;
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
    margin-right:.1rem;
    color:#333;
    font-weight:600;
}
.address_text{
    font-size: .3rem;
    color:rgb(26, 25, 25);
     width: 68%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left:.2rem;
     /* margin-right: .2rem */
}
</style>
