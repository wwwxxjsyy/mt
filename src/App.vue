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
  }
=======
    "Mt-TabBar":TabBar
  },
>>>>>>> 687c9a4a7138af584ae7fa9e64b58e4e1fff9f0a
  // mounted(){
  //   this.http.get('/posts').then(res=>{
  //     console.log(res)
  //   })
  // },
<<<<<<< HEAD
  ,
  // },
=======
>>>>>>> 687c9a4a7138af584ae7fa9e64b58e4e1fff9f0a
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
