<template>
<div class='mywallet'>
    <MyWalletHeader/>
    <MyWalletContent/>
</div>
</template>

<script>
 import MyWalletHeader from '../mywallet/mywalletHeader'
 import MyWalletContent from '../mywallet/mywalletContent'
export default {
   
components: {
    MyWalletHeader,
    MyWalletContent
},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},

}
</script>
<style scoped>
.mywallet{
    background: #fff;
    padding: .59rem .26rem 0 .24rem;
}
</style>