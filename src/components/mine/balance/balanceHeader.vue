<template>
<div class="balance-header">
        <div class="back" @click="returnOut">
            <img src="../../../assets/minePic/back.gif" alt="">
            <span>余额</span>
        </div>
        <div class="balance-header-titile">
          <span>余额明细</span>
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
.balance-header{
    width: 100%;
    height: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:#fafafa;
    padding-left: .58rem;
}
.balance-header .back{
    display: flex;
}
.balance-header .back>img{
    width: .5rem;
    height:.46rem;
}
.balance-header .back>span{
    margin-left:.44rem;
    font-size: .4rem;
    color:black;
}

.balance-header-titile>span{
    float: right;
    font-size: .4rem;
    color:black;
    margin-right: .35rem;
}
</style>