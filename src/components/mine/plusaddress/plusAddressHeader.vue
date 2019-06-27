<template>
   <div class="plus-address-header">
        <div class="back">
           <i class="iconfont" @click="returnOut" v-html="icon"></i>
            <span>新增收货地址</span>
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
<style scoped>
.plus-address-header {
    width: 100%;
    height: 1.5rem;
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

.plus-address-header .back {
    display: flex;
}

.plus-address-header .back>i {
    font-size: .6rem;
    color: #333;
}
.plus-address-header .back>span {
    margin-left: 1.3rem;
    font-size: .45rem;
    color: black;
}
</style>