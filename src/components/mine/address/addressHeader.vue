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
<<<<<<< HEAD
    height: 1rem;
=======
    height: 1.3rem;
>>>>>>> 95771a1f104ccabf58c9fdd3023ef85659b7a6e6
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
<<<<<<< HEAD
    font-size: .35rem;
=======
    font-size: .5rem;
>>>>>>> 95771a1f104ccabf58c9fdd3023ef85659b7a6e6
    color:#757575;
}
.address-header .back>span {
    display: inline-block;
    margin-left: .3rem;
<<<<<<< HEAD
    font-size: .35rem;
=======
    font-size: .4rem;
>>>>>>> 95771a1f104ccabf58c9fdd3023ef85659b7a6e6
    color: black;
}

.address-header-titile>span {
    float: right;
    font-size: .3rem;
    color: black;
    margin-right: .5rem;
}
</style>