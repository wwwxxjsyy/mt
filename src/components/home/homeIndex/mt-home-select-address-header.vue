<template>
    <div class="address_header">
        <!-- 左侧返回 -->
        <div class="is-left" v-show ="isLeft">
            <span class="iconfont" @click="$router.go(-1)">&#xe609;</span>
            
        </div>
        <!-- 中间标题 -->
        <h1 class="title">{{title}}</h1>
    </div>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:String,
        isLeft:{
            type:Boolean,
            default:false,
        }
    }

}
</script>

<style scoped>
.iconfont{
    font-size: .4rem;
    
}
.address_header{
    height:1rem;
    display: flex;
    padding:0.1rem .4rem 0.1rem;
    color:rgb(179, 176, 176);
}
.is-left{
    line-height: 1rem;
    
}
.title{
    font-size:.35rem;
    line-height: 1rem;
    margin-left:.3rem;
    color:#333;
}
</style>
