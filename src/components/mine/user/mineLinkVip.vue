<template>
<div class='Mine-link-vip' v-if="vipShow">
    <router-link to="/vip" tag="a">
    <img :src="url" alt="">
    </router-link>
</div>
</template>

<script>

export default {
components: {},
data() {
return {
    url:require('../../../assets/minePic/mineVip.gif'),
    vipShow:false
};
},
}
</script>
<style scoped>
.Mine-link-vip{
    width: 100%;
    height: 2.1rem;
    padding: .38rem 0;
}
.Mine-link-vip a{
    float: left;
    width: 100%;
    height: 100%;
}
.Mine-link-vip a img{
    width: 100%;
    height: 100%;
}
</style>