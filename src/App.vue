<template>
<<<<<<< HEAD
  <div id="app">
    <router-view/>
    <!-- <Mt-TabBar/> -->
=======
  <div id="app"  >
    <router-view />
    <Mt-TabBar v-if="$route.meta.flag"/>
>>>>>>> 4351982289ebdf2fc34ede09dea95b06b01862ff
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
  // mounted(){
  //   this.http.get('/posts').then(res=>{
  //     console.log(res)
  //   })
  // },
  // },
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
<<<<<<< HEAD
  color: #fafafa;
=======
  /* 解决苹果滑动卡顿问题king */
  -webkit-overflow-scrolling: touch;
  color: #2c3e50;
>>>>>>> 4351982289ebdf2fc34ede09dea95b06b01862ff
  height: 100%;
  width: 100%;
  overflow: scroll;
  /* background: #fff; */
}
</style>
