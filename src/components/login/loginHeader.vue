<template>
    <div class="header">
        <span class="iconfont" @click="$router.back()">&#xe60b;</span>
        <span>帮助</span>
    </div>
</template>

<script>
export default {
    name:'LoginHeader',
    methods:{
        goBack(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.header{
    padding:.3rem .5rem;
    color:rgb(255,189,39);
    display:flex;
    font-size:.3rem;
    justify-content:space-between;
    background: #fff;
}
.header .iconfont{
    font-size:.5rem;
}




</style>
