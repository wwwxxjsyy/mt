<template>
    <div class="search">
        <div class="search-food">
             <span class="iconfont" @click="back()">&#xe682; 美食</span>
        </div>
        <div class="search-shop">
            
                <i class="iconfont">&#xe661;</i>
                <a>请输入商家.商品名称</a>
          
        </div>
    </div>
</template>

<script>
export default {
    name:"Search",
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.search{
    background: #ff872a;
    height: .8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
}
.search-food span{
    font-size: .35rem;
    color: #fff;
    line-height: .7rem;
}

.search-shop{
    width: 5.5rem;
    height: .5rem;
    background: #ecaf87;
    border-radius: .12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: .5rem;
    opacity: .6;
}
.search-shop a{
    width: 5rem;
    height: .5rem;
    font-size: .25rem;

    border: none;
    outline: none;
    color: #fffde5;
}
.search-shop i{
    width: .5rem;
    height: .5rem;
    font-size: .3rem;
    padding-left: .1rem;
}
</style>
