<template>
   <div class="homeshop">
    <!-- header -->
    <home-header></home-header>
    <!-- navigation -->
    <home-nav></home-nav>
    <!-- content -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
   </div>
</template>

<script>
import homeshopnav from './nav/homeshopNav'
import homeshopHeader from './header/homeshopHeader'
export default {
    name:"homeShop",
    components:{
        "home-header":homeshopHeader,
        "home-nav":homeshopnav
    },
//     created(){
//     fetch("/api/goods")
//       .then(res => {
//         return res.json()
//       })
//       .then(response =>{
//         if(response.code == 0){
//           this.poiInfo = response.data.poi_info
//         }
//       })

//     // 请求ratings
//     fetch("/api/ratings")
//       .then(res => {
//         return res.json()
//       })
//       .then(response =>{
//         if(response.code == 0){
//           this.commentNum = response.data.comment_num
//         }
//       })
//   }
}
</script>

<style scoped>
  
</style>
