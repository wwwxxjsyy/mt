<template>
    <div class="balance-header">
        <div class="back">
           <i class="iconfont" @click="returnOut" v-html="icon"></i>
            <span>美团红包</span>
        </div>
        <div class="balance-header-titile">
            <span>兑换</span>
        </div>
    </div>
</template>

<script>

export default {
components: {},
data() {
return {
    icon:'&#xe607;'
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
.balance-header {
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding-left: .38rem;
    position:sticky;
    top:0;
    left:0;
    z-index: 2000;
}

.balance-header .back {
    display: flex;
}

.balance-header .back>i {
    font-size: .5rem;
    color: #555555;
}
.balance-header .back>span {
    margin-left: .4rem;
    font-size: .4rem;
    color: black;
}

.balance-header-titile>span {
    font-size: .3rem;
    color: black;
    margin-right: .5rem;
}

</style>