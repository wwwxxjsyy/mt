<template>
  <div id="app">
    <router-view/>
    <Mt-TabBar/>
  </div>
</template>

<script>
import TabBar from "./components/common/tabBar.vue"
export default {
  name: 'App',
  components:{
    "Mt-TabBar":TabBar
  }
}
</script>

<style>

</style>
