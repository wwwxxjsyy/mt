<template>
   <div class="balance-header">
        <div class="back">
           <i class="iconfont" @click="returnOut" v-html="icon"></i>
            <span>我的收藏</span>
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
created() {

},
mounted() {

},
beforeCreate() {}, 
beforeMount() {}, 
beforeUpdate() {}, 
updated() {}, 
beforeDestroy() {}, 
destroyed() {}, 
activated() {},
}
</script>
<style scoped>
.balance-header {
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding-left: .39rem;
    position:sticky;
    top:0;
    left:0;
    z-index: 2000;
}

.balance-header .back {
    display: flex;
}

.balance-header .back>i {
    font-size: .6rem;
    color: #333;
}
.balance-header .back>span {
    margin-left: .3rem;
    font-size: .45rem;
    color: black;
}
</style>