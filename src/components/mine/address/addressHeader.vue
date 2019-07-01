<template>
<div class='address-header'>
    <div class="back">
           <i class="iconfont" @click="returnOut" v-html="icon"></i>
            <span>我的收货地址</span>
    </div>
    <router-link to="/PlusAddress" tag="div" class="address-header-titile">
            <span>新增地址</span>
    </router-link>  
</div>
</template>

<script>

export default {
components: {},
data() {
return {
    icon:'&#xe609;'
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
.address-header {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fafafa;
    padding-left: .39rem;
    position:sticky;
    top:0;
    left:0;
    z-index: 2000;
}

.address-header .back {
    display: flex;
}

.address-header .back>i {
    font-size: .35rem;
    color:#757575;
}
.address-header .back>span {
    display: inline-block;
    margin-left: .3rem;
    font-size: .35rem;
    color: black;
}

.address-header-titile>span {
    float: right;
    font-size: .3rem;
    color: black;
    margin-right: .5rem;
}
</style>