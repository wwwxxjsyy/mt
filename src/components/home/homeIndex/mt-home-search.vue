<template>
    <div class="search">
        <span class="iconfont">&#xe661;</span>
        <a href="">小馋虫麻食 满24减10</a>
    </div>
</template>

<script>
export default {
    name:"Search"
}
</script>

<style scoped>
.search{
    width: 100%;
    height: .6rem;
    /* background: red; */
    display: flex;
    align-items: center;
    margin-top: .2rem;
}
.search span{
    width: .5rem;
    height: 100%;
    font-size: .3rem;
    line-height: .6rem;
    padding-left: .1rem;
    background: #e4e4e4;
    opacity: .5;
    border-radius: .1rem 0 0 .1rem ;
}
.search a{
    width: 100%;
    height: 100%;
    line-height: .6rem;
    background: #e4e4e4;
    opacity: .5;
    border-radius: 0 .1rem .1rem 0;
} 
</style>
