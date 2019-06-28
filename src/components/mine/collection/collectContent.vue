<template>
<div class='collection-content'>
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
    imgUrl:require('../../../assets/minePic/collection.png')
};
},
computed: {},
watch: {},
methods: {

},

}
</script>
<style  scoped>
.collection-content{
    border-top: .08rem solid #fafafa;
    flex: 1;
    background: #fff;
    text-align: center;
    padding:3.4rem 0;
}
.collection-content img{
    width: 5rem;
    height: 4rem;
    margin: auto;
}
</style>