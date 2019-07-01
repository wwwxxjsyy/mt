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
<<<<<<< HEAD
    height: 1rem;
=======
    height: 1.2rem;
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

.plus-address-header .back {
    display: flex;
}

.plus-address-header .back>i {
<<<<<<< HEAD
    font-size: .35rem;
=======
    font-size: .5rem;
>>>>>>> 95771a1f104ccabf58c9fdd3023ef85659b7a6e6
    color: #333;

}
.plus-address-header .back>span {
<<<<<<< HEAD
    margin-left: 2rem;
    font-size: .35rem;
=======
    margin-left: 1.7rem;
    font-size: .4rem;
>>>>>>> 95771a1f104ccabf58c9fdd3023ef85659b7a6e6
    color: black;
}
</style>