<template>
  <div id="app">
    <router-view/>
    <Mt-TabBar/>
  </div>
</template>

<script>
import axios from 'axios'
import TabBar from "./components/common/tabBar.vue"

export default {
  name: 'App',
  components:{
    "Mt-TabBar":TabBar
  },
  mounted(){
    this.http.get('/posts').then(res=>{
      console.log(res)
    })
  // this.http.get('/').then(res=>{
  //     console.log(res)
  //   })
  }
}
</script>

<style>

</style>
