<template>
<div class='myaccount-header'>
    <div class="back">
           <i class="iconfont" @click="returnOut" v-html="icon"></i>
            <span>我的账户</span>
    </div>
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
<style scoped>
.myaccount-header {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    background: #fafafa;
    padding-left: .49rem;
    position:sticky;
    top:0;
    left:0;
}

.myaccount-header .back {
    display: flex;
}

.myaccount-header .back>i {
    font-size: .35rem;
    color:#757575;
}
.myaccount-header .back>span {
    margin-left: .35rem;
    font-size: .35rem;
    color: black;
}
</style>