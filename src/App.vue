<template>
<<<<<<< HEAD
  <div id="app" @scroll="scrollHeader()" ref="app" >
    <router-view :isChange="flag"/>
=======
  <div id="app"  >
    <router-view />
>>>>>>> 6530ed4184d68f9bc9343ecadba25169482b025b
    <Mt-TabBar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import axios from 'axios'
import TabBar from "./components/common/tabBar.vue"

export default {
  name: 'App',
  components:{

    "Mt-TabBar":TabBar
<<<<<<< HEAD
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
    this.http.post('/api/search/',"").then(res=>{
      console.log(res)
    })
=======
>>>>>>> 6530ed4184d68f9bc9343ecadba25169482b025b
  }
  // mounted(){
  //   this.http.get('/posts').then(res=>{
  //     console.log(res)
  //   })
  // },
}
</script>

<style>

#app {
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 解决苹果滑动卡顿问题king */
  -webkit-overflow-scrolling: touch;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: scroll;
  /* background: #fff; */
}
</style>
