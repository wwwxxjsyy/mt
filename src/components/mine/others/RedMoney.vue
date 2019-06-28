<template>
<div class="red-money">
    <redMoneyHeader/>
    <redMonerContent/>
</div>
</template>

<script>

import redMoneyHeader from '../redmoney/redmoneyHeader';
import redMonerContent from '../redmoney/redmoneyContent';
export default {
components: {
    redMoneyHeader,
    redMonerContent
},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

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
<style  scoped>
.red-money{
    background: #fafafa;
}
</style>