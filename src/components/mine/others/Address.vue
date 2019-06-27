<template>
<div class="mt-address">
    <AddressHeader/>
    <AddressContent/>
</div>
</template>

<script>
import AddressHeader from '../address/addressHeader'
import AddressContent from '../address/addressContent'
export default {
components: {
    AddressHeader,
    AddressContent
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
.mt-address{
    background: #fff;
}
</style>