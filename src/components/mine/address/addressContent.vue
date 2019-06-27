<template>
<div class='address-content'>
    <a href="#" v-if="true">
        <img :src="imgUrl" alt="">
    </a>
    <ul>
        <li v-if="false"></li>
    </ul>
</div>
</template>

<script>

export default {
components: {},
data() {
return {
    imgUrl:require('../../../assets/minePic/address.png')
};
},
computed: {},
watch: {},
methods: {

},
}
</script>
<style  scoped>
.address-content{
    margin-top: .08rem;
    flex: 1;
    background: #fff;
    text-align: center;
    padding:3.4rem 0;
}
.address-content img{
    width: 4rem;
    height: 4rem;
    margin: auto;
}
</style>