<template>
<div class='myevaluate-header'>
    <div class="return" @click="returnOut">
        <i class="iconfont">{{'&#xe609;'}}</i>
    </div>
    <div class="person">
        <img src="../../../assets/minePic/logo2.png" alt="">
        <p>
            <span>TCC22225558</span>
            <span>已贡献0条评论</span>
        </p>
    </div>
</div>
</template>

<script>

export default {
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {
    returnOut(){
        window.history.back()
    }
},

}
</script>
<style  scoped>
.myevaluate-header{
    background: url('../../../assets/minePic/background.png') no-repeat 0 0;
    height: 3rem;
    position: relative;
}
.myevaluate-header .return{
    position: absolute;
    left: .4rem;
    top: .4rem
}
.myevaluate-header .return>i{
    font-size: .5rem;
    color:#6c5f4e;
}
.myevaluate-header .person{
    position: absolute;
    left: 36%;
    top: 19%;
}
.myevaluate-header .person>img{
    width: 1.2rem;
    height: 1.2rem;
    margin-bottom: .3rem;
    margin: 0 auto;
}
.myevaluate-header .person>p>span{
    display: block;
    font-size: .34rem;
    line-height: .49rem;
    color: black;
}
</style>