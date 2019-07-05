<template>
<div class="myaccount">
    <MyAccountHeader/>
    <MyAccountContetn/>
    <MyAccountBottom/>
</div>
</template>

<script>
import MyAccountHeader from '../myaccount/myaccountHeader'
import MyAccountContetn from '../myaccount/myaccountContent'
import MyAccountBottom from '../myaccount/myaccountBottom'
export default {
components: {
    MyAccountHeader,
    MyAccountContetn,
    MyAccountBottom
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
<style  scoped>
.myaccount{
    background: #efefef;
}
</style>