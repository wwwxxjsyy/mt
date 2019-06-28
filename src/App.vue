<template>
  <div id="app"  >
    <router-view />
    <Mt-TabBar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import axios from 'axios'
import TabBar from "./components/common/tabBar.vue"

export default {
  name: 'App',
  components:{
<<<<<<< HEAD
    "Mt-TabBar":TabBar

=======

    "Mt-TabBar":TabBar
>>>>>>> ca3115cc4fb685565cd980e513cd2911023c8dc1
  }
  // mounted(){
  //   this.http.get('/posts').then(res=>{
  //     console.log(res)
  //   })
  // },
<<<<<<< HEAD
  ,
=======
<<<<<<< HEAD
=======
  // },
>>>>>>> ca3115cc4fb685565cd980e513cd2911023c8dc1
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
    this.http.post('api/home/',).then(res=>{
      console.log(res)
    })
  }
<<<<<<< HEAD
=======
>>>>>>> dandan
>>>>>>> ca3115cc4fb685565cd980e513cd2911023c8dc1
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
