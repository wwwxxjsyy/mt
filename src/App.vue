<template>
  <div id="app" @scroll="scrollHeader()" ref="app" >
    <router-view :isChange="flag"/>
    <Mt-TabBar/>
  </div>
</template>

<script>
import axios from 'axios'
import TabBar from "./components/common/tabBar.vue"

export default {
  name: 'App',
  data(){
    return{
      flag:false
    }
  },
  components:{
    "Mt-TabBar":TabBar
  },
  data(){
    return{
      flag:false
    }
  },
  methods: {
      scrollHeader() {
          this.flag = this.$refs.app.scrollTop == 0 ? false : true;
      }
  },
  mounted(){
    this.http.get('/posts').then(res=>{
      console.log(res)
    })
  } 
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: scroll;
  background: #fff;
}
</style>
