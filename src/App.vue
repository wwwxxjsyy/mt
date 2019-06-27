<template>
<<<<<<< HEAD
  <div id="app"  >
    <router-view />
    <Mt-TabBar v-if="$route.meta.flag"/>
=======
  <div id="app" @scroll="scrollHeader()" ref="app" >
    <router-view :isChange="flag"/>
<<<<<<< HEAD
    <Mt-TabBar/>
=======
    <Mt-TabBar v-if="$route.meta.flag"/>
>>>>>>> 56ac1af05bd5506e88cafc7570786963714addd5
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
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
  }
  // mounted(){
  //   this.http.get('/posts').then(res=>{
  //     console.log(res)
  //   })
  // },
=======
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
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
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
<<<<<<< HEAD
  /* background: #fff; */
=======
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
}
</style>
