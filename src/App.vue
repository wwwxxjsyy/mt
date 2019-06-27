<template>
  <div id="app" @scroll="scrollHeader()" ref="app" >
    <router-view :isChange="flag"/>
<<<<<<< HEAD
    <Mt-TabBar/>
=======
    <Mt-TabBar v-if="$route.meta.flag"/>
>>>>>>> 56ac1af05bd5506e88cafc7570786963714addd5
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
  /* 解决苹果滑动卡顿问题king */
  -webkit-overflow-scrolling: touch;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: scroll;
}
</style>
