<template>
<div class='setpassword-header'>
    <div class="back">
           <i class="iconfont" @click="returnOut" v-html="icon"></i>
            <span>设置密码</span>
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
.setpassword-header {
    width: 100%;
    height: 1.1rem;
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

.setpassword-header .back {
    display: flex;
}

.setpassword-header .back>i {
    font-size: .5rem;
    color: #ffdea1;
}
.setpassword-header .back>span {
    margin-left: 2rem;
    font-size: .4rem;
    color: black;
}
</style>