<template>
  <div id="app">
    <router-view/>
    <Mt-TabBar/>
  </div>
</template>

<script>
import TabBar from "./pages/tabBar.vue"
export default {
  name: 'App',
  components:{
    "Mt-TabBar":TabBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
